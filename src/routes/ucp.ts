import express from 'express';
import ensureAuthenticated from '../misc/ensureAuthenticated';

// @ts-ignore
import mysql from 'sync-mysql';
import config from '../database/config';

import quizQuestions from './../misc/quizQuestions';
import applicationQuestions from './../misc/applicationQuestions';

import chalk from 'chalk';

const router: express.Router = express.Router();

const randomArray = (array: any) => array[Math.floor(Math.random() * array.length)];
const shuffle = (array: any) => array.sort(() => Math.random() - 0.5);

router.get('/', ensureAuthenticated, (req: express.Request, res: express.Response) => {
	/* 
		Statuses for Accounts:
		0 - Multiple Choice Incomplete;
		1 - Multiple Choice Complete, no first char.
		2 - Both quizzes complete, full access;
	*/

	/* 
		Statuses for Applications:
		0 - Unsubmitted
		1 - Unreviewed
		2 - Denied
		3 - Accepted
	*/

	let conn = new mysql(config);

	// @ts-ignore
	let player = conn.query("SELECT * FROM accounts WHERE steamid = ? LIMIT 1;", [req.user.id]);
	let dbquestions = conn.query("SELECT * FROM multiplechoice WHERE accountid = ?;", [player[0].id]);
	let questions: any[] = [];
	
	if (player.length === 0) {
		// @ts-ignore
		conn.query("INSERT INTO accounts (steamid, steamname, registration_time) VALUES (?, ?, ?);", [req.user.id, req.user.displayName, new Date().getTime()])
		// @ts-ignore
		player = conn.query("SELECT * FROM accounts WHERE steamid = ? LIMIT 1;", [req.user.id]);
		console.log("players length is 0, inserting a new player.");
	}

	if (dbquestions.length === 0) {
		console.log('dbquestions length is 0')
		const quizquestions = shuffle(quizQuestions);
		let questions: any[] = [];

		for (let i: number = 0; i < 15; i++) {
			questions.push({
				question: quizquestions[i].question,
				answer: quizquestions[i].answer,
				answers: shuffle(quizquestions[i].answers)
			});
		}

		/*for (; ;) {
			// assuming we want to store 15 results into @questions
			if (questions.length === 15) {
				break;
			}
			const q = randomArray(quizQuestions);
			if (questions.indexOf(q) !== -1) {
				continue;
			} else {
				questions.push({
					question: q.question,
					answer: q.answer,
					answers: shuffle(q.answers)
				});
			}
		}*/

		conn.query("INSERT INTO multiplechoice (accountid, multiplechoice) VALUES (?, ?);", [player[0].id, JSON.stringify(questions)]);
	}

	if (player[0].status === 0) {
		console.log("player status is 0.")
		if (questions.length === 0) {
			console.log("player questions is 0")
			questions = JSON.parse(conn.query("SELECT * FROM multiplechoice WHERE accountid = ?;", [player[0].id])[0].multiplechoice);
		}

		conn.dispose();
		return res.render('multiplechoice', { player: player[0], questions: questions, count: -1 });
	}

	let characters = conn.query("SELECT * FROM characters WHERE accountid = ?;", [player[0].id]);

	if (player[0].status === 1/*&& characters.length === 0*/) {
		let appid;
		// @ts-ignore
		appid = conn.query("SELECT * FROM applications WHERE steamid = ? LIMIT 1;", [req.user.id]);

		if (appid.length === 0) {
			// @ts-ignore
			conn.query("INSERT INTO applications (steamid) VALUES (?);", [req.user.id]);
			// @ts-ignore
			appid = conn.query("SELECT * FROM applications WHERE steamid = ? LIMIT 1;", [req.user.id]);
		}

		conn.dispose();
		return res.redirect("/ucp/application/" + appid[0].id);
	}

	let donatorlevel = conn.query("SELECT * FROM donations WHERE accountid = ?;", [player[0].id]);
	// @ts-ignore
	conn.query("UPDATE accounts SET status = ? WHERE steamid = ?;", [2, req.user.id]);
	conn.dispose();

	return res.render('ucp', { player: player[0], characters: characters, donatorlevel: donatorlevel.length === 0 ? 0 : donatorlevel.level });
});

router.post('/', ensureAuthenticated, (req: express.Request, res: express.Response) => {
	let answers = req.body.answers;

	console.log(answers);
	console.log(answers.length);

	if (answers.length === 15) {
		console.log("Status Code Sent");
		//res.sendStatus(res.statusCode);

		let conn = new mysql(config);
		// @ts-ignore
		let player = conn.query("SELECT * FROM accounts WHERE steamid = ? LIMIT 1;", [req.user.id]);
		let questions = JSON.parse(conn.query("SELECT * FROM multiplechoice WHERE accountid = ?;", [player[0].id])[0].multiplechoice);
		console.log(questions);

		let parsedAnswers: Array<number[]> = [];
		let success: null | boolean = null;

		answers.forEach((answer: string) => {
			console.log(chalk.blue("iterating through answers"));
			let parseAnswer: string[] = answer.split(":");
			let parsedAnswer: number[] = [parseInt(parseAnswer[0].split("q")[1]), parseInt(parseAnswer[1])];

			if (Number.isNaN(parsedAnswer[0]) || Number.isNaN(parsedAnswer[1])) {
				success = false;
			}
			else if ((parsedAnswer[0] < 0 && parsedAnswer[0] > 15) || (parsedAnswer[1] < 1 && parsedAnswer[1] > 3)) {
				success = false;
			}
			else {
				parsedAnswers.push(parsedAnswer);
			}
		});

		let count: number = 0;

		if (parsedAnswers.length !== 15 || success === false) {
			conn.dispose();
			console.log("the length of parsed answers or ur success is false");
			return res.redirect("/ucp");
		} else {
			console.log(chalk.red(`${parsedAnswers}`));
			for (let i: number = 0; i < 15; i++) {
				console.log(chalk.red("parsed answers IS WHAT WE ARE NOW ITERATING THROUGH"));

				if (questions[i].answer === questions[i].answers[(parsedAnswers[i][1] - 1)]) {
					count += 1;
				}
			}

			if (count < 10) {
				conn.dispose();
				console.log(chalk.green("rendering multiplechoice quiz again.... total sped. count: " + count));
				return res.redirect("/ucp");
				//return res.render("multiplechoice", { player: player[0], questions: questions, count: count });
			} else {
				// @ts-ignore
				conn.query("UPDATE accounts SET status = ? WHERE steamid = ?;", [1, req.user.id]);
				// @ts-ignore
				conn.query("INSERT INTO applications (steamid) VALUES (?);", [req.user.id]);
				// @ts-ignore
				let appid = conn.query("SELECT * FROM applications WHERE steamid = ? LIMIT 1;", [req.user.id]);
	
				conn.dispose();
				console.log(chalk.yellow("redirecting you to longanswer"));
				console.log(appid[0].id);

				return res.redirect("/ucp/application/" + appid[0].id);
			}
		}
	} else {
		console.log("rendering UCP");
		return res.redirect("/ucp");
	}
});

router.get('/characters', ensureAuthenticated, (req: express.Request, res: express.Response) => {
	let conn = new mysql(config);

	// @ts-ignore
	let player = conn.query("SELECT * FROM accounts WHERE steamid = ? LIMIT 1;", [req.user.id]);
	console.log(player);

	let characters = conn.query("SELECT * FROM characters WHERE accountid = ?;", [player[0].id]);
	console.log(characters);

	conn.dispose();

	return res.render('characters', { player: player[0], characters: characters });
});

router.get('/character/:charId', ensureAuthenticated, (req: express.Request, res: express.Response) => {
	let conn = new mysql(config);
	let charid = req.params.charId;
	let properties: string[] = [];

	// @ts-ignore
	let player = conn.query("SELECT * FROM accounts WHERE steamid = ? LIMIT 1;", [req.user.id]);
	//console.log(player);

	let characters = conn.query("SELECT * FROM characters WHERE accountid = ?;", [player[0].id]);
	//console.log(characters);

	let character = conn.query("SELECT * FROM characters WHERE id = ? LIMIT 1;", [charid]);
	//console.log(character);

	let items = conn.query("SELECT * FROM inventory WHERE charid = ?;", [charid]);
	//console.log(items);

	let houses = conn.query("SELECT * FROM houses WHERE owner = ?;", [charid]);
	let businesses = conn.query("SELECT * FROM businesses WHERE owner = ?;", [charid]);

	houses.forEach((house: any) => {
		properties.push(house);
	});

	businesses.forEach((business: any) => {
		properties.push(business);
	});

	conn.dispose();
	return res.render('characterview', { player: player[0], characters: characters, character: character[0], items: items, properties: properties });
});

router.get("/application/:appId", ensureAuthenticated, (req, res) => {
	let appid = req.params.appId;

	let conn = new mysql(config);
	// @ts-ignore
	let application = conn.query("SELECT * FROM applications WHERE id = ? AND steamid = ?;", [appid, req.user.id]);

	if (application.length === 0) {
		conn.dispose();
		return res.redirect("/ucp");
	}

	// @ts-ignore
	let player = conn.query("SELECT * FROM accounts WHERE steamid = ? LIMIT 1;", [req.user.id]);

	if (player[0].status === 0) {
		conn.dispose();
		return res.redirect("/ucp");
	}
	if (player[0].status === 1) {
		if (application[0].status === 0) {
			if (application[0].question1 === null) {
				let randomQuestions = shuffle(applicationQuestions);
	
				console.log("Updating questions");
				conn.query("UPDATE applications SET question1 = ?, question2 = ?, question3 = ?, \
				question4 = ?, question5 = ? WHERE steamid = ?;", 
				// @ts-ignore
				[randomQuestions[0], randomQuestions[1], randomQuestions[2], randomQuestions[3], randomQuestions[4], req.user.id]);
			}
	
			// @ts-ignore
			application = conn.query("SELECT * FROM applications WHERE id = ? AND steamid = ?;", [appid, req.user.id]);
			
			let responses = [
				[application[0].question1, application[0].answer1],
				[application[0].question2, application[0].answer2],
				[application[0].question3, application[0].answer3],
				[application[0].question4, application[0].answer4],
				[application[0].question5, application[0].answer5]
			]
			conn.dispose();
			return res.render("application", { player: player[0], appid: parseInt(appid), charname: application[0].charname, charstory: application[0].charstory, responses: responses, nochar: true });
		} else if (application[0].status === 1) {
			// @ts-ignore
			application = conn.query("SELECT * FROM applications WHERE id = ? AND steamid = ?;", [appid, req.user.id]);

			let responses = [
				[application[0].question1, application[0].answer1],
				[application[0].question2, application[0].answer2],
				[application[0].question3, application[0].answer3],
				[application[0].question4, application[0].answer4],
				[application[0].question5, application[0].answer5]
			]

			conn.dispose();
			return res.render("applicationdisabled", { player: player[0], appid: parseInt(appid), charname: application[0].charname, charstory: application[0].charstory, responses: responses, accepted: true });
		} else if (application[0].status === 2) {
			// @ts-ignore
			application = conn.query("SELECT * FROM applications WHERE id = ? AND steamid = ?;", [appid, req.user.id]);

			let responses = [
				[application[0].question1, application[0].answer1],
				[application[0].question2, application[0].answer2],
				[application[0].question3, application[0].answer3],
				[application[0].question4, application[0].answer4],
				[application[0].question5, application[0].answer5]
			]

			conn.dispose();
			return res.render("applicationdisabled", { player: player[0], appid: parseInt(appid), charname: application[0].charname, charstory: application[0].charstory, responses: responses, denial_admin: application[0].denial_admin, denial_reason: application[0].denial_reason, accepted: false });
		} else if (application[0].status === 3) {
			conn.query("UPDATE accounts SET status = ? WHERE steamid = ?;",
			// @ts-ignore
			[2, req.user.id]);
			conn.dispose();
			return res.redirect("/ucp");
		}

	} else if (player[0].status === 2) {
		conn.dispose();
		return res.render("application", { player: player[0], appid: parseInt(appid), charname: application[0].charname, charstory: application[0].charstory, nochar: false });
	} else {
		conn.dispose();
		return res.redirect("/logout");
	}
});

router.post("/application/:appId", ensureAuthenticated, (req, res) => {
	let appid = req.params.appId;
	let charname = req.body.charname;
	let answers = req.body.answers;
	let action = parseInt(req.body.action);

	if (Number.isNaN(action)) {
		return res.sendStatus(res.statusCode);
	}

	if (charname.length < 0 || (answers.length !== 6 && answers.length !== 1)) {
		return res.sendStatus(res.statusCode);
	}

	let conn = new mysql(config);

	if (action === 1) {
		conn.query("UPDATE applications SET charname = ?, charstory = ?, answer1 = ?, answer2 = ?, answer3 = ?, answer4 = ?, answer5 = ?, status = ? WHERE steamid = ?",
		// @ts-ignore
		[charname, answers[0], answers[1], answers[2], answers[3], answers[4], answers[5], 1, req.user.id]);
	} else if (action === 2) {
		conn.query("UPDATE applications SET charname = ?, charstory = ?, answer1 = ?, answer2 = ?, answer3 = ?, answer4 = ?, answer5 = ? WHERE steamid = ?",
		// @ts-ignore
		[charname, answers[0], answers[1], answers[2], answers[3], answers[4], answers[5], req.user.id]);
	}

	conn.dispose();
	res.redirect("/application/" + appid);
	return res.sendStatus(res.statusCode);
});

export default router;