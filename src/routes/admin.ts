import express from 'express';
import ensureAuthenticated from '../misc/ensureAuthenticated';

// @ts-ignore
import mysql from 'sync-mysql';
import config from '../database/config';

const router: express.Router = express.Router();

router.get('/', ensureAuthenticated, (req: express.Request, res: express.Response) => {
	return res.redirect('/ucp');
});

router.get('/applications', ensureAuthenticated, (req: express.Request, res: express.Response) => {
	let conn = new mysql(config);

	let player = conn.query("SELECT * FROM accounts WHERE steamid = ?;", 
	// @ts-ignore
	[req.user.id]);

	if (player.length === 0) {
		conn.dispose();
		return res.redirect("/logout");
	}
	if ((player.admin <= 0 || player.admin > 5) && (player.helper <= 0 || player.helper > 2)) {
		conn.dispose();
		return res.redirect("/ucp");
	}

	let characters = conn.query("SELECT * FROM characters WHERE accountid = ?;", [player[0].id]);
	let applicants = conn.query("SELECT * FROM applications WHERE status = 1;");
	console.log("View Applications Rendered");
	return res.render("viewapplications", { player: player[0], characters: characters, applicants: applicants })
});

export default router;