import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from './layout2';
import {
	Menu, 
	Navbar,
	Container,
	Columns,
	Card,
	Heading,
	Modal,
	Button
} from 'react-bulma-components';

import atob from 'atob';
import btoa from 'btoa';

											/*{/*
											// @ts-ignore }
											<Button color="success" renderAs="a" href={"/admin/applications/accept/" + applicant.id}>Accept</Button>
											{/*
											// @ts-ignore }
											<Button color="danger" renderAs="a" href={"/admin/applications/deny/" + applicant.id}>Deny</Button>*/

interface Applicants {
	id: number;
	charname: string;
	charstory: string;
	question1: string;
	answer1: string;
	question2: string;
	answer2: string;
	question3: string;
	answer3: string;
	question4: string;
	answer4: string;
	question5: string;
	answer5: string;
}

interface props { 
	player: any;
	characters: string[];
	applicants: Array<Applicants>;
}

const encode = (encode: string) => btoa(encode);
const decode = (decode: string) => atob(decode);

export default (props: props) => {
	let applicants: JSX.Element | null;
	let chars: JSX.Element[] = [];
	let administration;
	let totalPlayingHours: number = 0;

	props.characters.map((char: any, i: any) => {
		totalPlayingHours += char.minutes;
		{/*
		// @ts-ignore */}
		chars.push(<Menu.List.Item key={i} href={"/ucp/character/" + char.id}>{char.firstname + " " + char.lastname}</Menu.List.Item>)
	});

	totalPlayingHours = totalPlayingHours / 60;

	if (props.player.helper > 0 && props.player.admin === 0) {
		administration = (
			<Menu.List title="Administration">
				{/* 
				// @ts-ignore */}
				<Menu.List.Item active renderAs="a" href="/admin/applications">
					<div><span className="icon"><i className="fas fa-book"></i></span>
					<span style={{ paddingLeft: "2px" }}>View Applications</span></div>
				</Menu.List.Item>
			</Menu.List>
		)
	} else if (props.player.admin > 0 && props.player.helper >= 0) {
		administration = (
			<Menu.List title="Administration">
				{/* 
				// @ts-ignore */}
				<Menu.List.Item active renderAs="a" href="/admin/applications">	
					<div><span className="icon"><i className="fas fa-book"></i></span>
					<span style={{ paddingLeft: "2px" }}>View Applications</span></div>
				</Menu.List.Item>
				<Menu.List.Item>
					<div><span className="icon"><i className="fas fa-users"></i></span>
					<span style={{ paddingLeft: "2px" }}>View All Players</span></div>
				</Menu.List.Item>
				<Menu.List.Item>
					<div><span className="icon"><i className="fas fa-user-cog"></i></span>
					<span style={{ paddingLeft: "2px" }}>Modify a Player</span></div>
				</Menu.List.Item>
				<Menu.List.Item>
					<div><span className="icon"><i className="far fa-user"></i></span>
					<span style={{ paddingLeft: "2px" }}>Modify a Character</span></div>
				</Menu.List.Item>
			</Menu.List>
		)
	} else {
		administration = null;
	}

	if (props.applicants.length > 0) {
		console.log("Applicants length is NOT 0");
		applicants = (
			<div className="table">
				<div className="head">
					<Columns>
						<Columns.Column>ID</Columns.Column>
						<Columns.Column>Character Name</Columns.Column>
						<Columns.Column>Character Story</Columns.Column>
						<Columns.Column>Question 1</Columns.Column>
						<Columns.Column>Question 2</Columns.Column>
						<Columns.Column>Question 3</Columns.Column>
						<Columns.Column>Question 4</Columns.Column>
						<Columns.Column>Question 5</Columns.Column>
						<Columns.Column>Review</Columns.Column>
					</Columns>
				</div>
				<div className="body" data-simplebar data-simplebar-auto-hide="false">
					{props.applicants.map((applicant: Applicants, i: number) => {
						console.log(JSON.stringify(applicant));
						<div key={i}>
							<div className="js-modal" id={"modal-1-" + applicant.id}>
								<div className="modal">
									<div className="modal-background"></div>
									<div className="modal-card">
										<header className="modal-card-head">
											<p className="modal-card-title">Character Story</p>
											<button className="delete" aria-label="close"></button>
										</header>
										<section className="modal-card-body">
											Character Story:<br></br>
											{applicant.charstory}
										</section>
										<footer className="modal-card-foot">
											<Button color="primary" id="cancel">Close</Button>
										</footer>
									</div>
								</div>
							</div>

							<div className="js-modal" id={"modal-2-" + applicant.id}>
								<div className="modal">
									<div className="modal-background"></div>
									<div className="modal-card">
										<header className="modal-card-head">
											<p className="modal-card-title">Question 1</p>
											<button className="delete" aria-label="close"></button>
										</header>
										<section className="modal-card-body">
											Question:<br></br>{applicant.question1}<br></br>
											Answer:<br></br>{applicant.answer1}
										</section>
										<footer className="modal-card-foot">
											<Button color="primary" id="cancel">Close</Button>
										</footer>
									</div>
								</div>
							</div>

							<div className="js-modal" id={"modal-3-" + applicant.id}>
								<div className="modal">
									<div className="modal-background"></div>
									<div className="modal-card">
										<header className="modal-card-head">
											<p className="modal-card-title">Question 2</p>
											<button className="delete" aria-label="close"></button>
										</header>
										<section className="modal-card-body">
											Question:<br></br>{applicant.question2}<br></br>
											Answer:<br></br>{applicant.answer2}
										</section>
										<footer className="modal-card-foot">
											<Button color="primary" id="cancel">Close</Button>
										</footer>
									</div>
								</div>
							</div>

							<div className="js-modal" id={"modal-4-" + applicant.id}>
								<div className="modal">
									<div className="modal-background"></div>
									<div className="modal-card">
										<header className="modal-card-head">
											<p className="modal-card-title">Question 3</p>
											<button className="delete" aria-label="close"></button>
										</header>
										<section className="modal-card-body">
											Question:<br></br>{applicant.question3}<br></br>
											Answer:<br></br>{applicant.answer3}
										</section>
										<footer className="modal-card-foot">
											<Button color="primary" id="cancel">Close</Button>
										</footer>
									</div>
								</div>
							</div>

							<div className="js-modal" id={"modal-5-" + applicant.id}>
								<div className="modal">
									<div className="modal-background"></div>
									<div className="modal-card">
										<header className="modal-card-head">
											<p className="modal-card-title">Question 4</p>
											<button className="delete" aria-label="close"></button>
										</header>
										<section className="modal-card-body">
											Question:<br></br>{applicant.question4}<br></br>
											Answer:<br></br>{applicant.answer4}
										</section>
										<footer className="modal-card-foot">
											<Button color="primary" id="cancel">Close</Button>
										</footer>
									</div>
								</div>
							</div>

							<div className="js-modal" id={"modal-6-" + applicant.id}>
								<div className="modal">
									<div className="modal-background"></div>
									<div className="modal-card">
										<header className="modal-card-head">
											<p className="modal-card-title">Question 5</p>
											<button className="delete" aria-label="close"></button>
										</header>
										<section className="modal-card-body">
											Question:<br></br>{applicant.question5}<br></br>
											Answer:<br></br>{applicant.answer5}
										</section>
										<footer className="modal-card-foot">
											<Button color="primary" id="cancel">Close</Button>
										</footer>
									</div>
								</div>
							</div>

							<div className="js-modal" id={"modal-7-" + applicant.id}>
								<div className="modal">
									<div className="modal-background"></div>
									<div className="modal-card">
										<header className="modal-card-head">
											<p className="modal-card-title">{applicant.charname}'s Final Review</p>
											<button className="delete" aria-label="close"></button>
										</header>
										<section className="modal-card-body">

											<p>
												Please ensure that you have reviewed all their information correctly, to the best of your judgement.<br></br>
												If you are unfamiliar with the application acceptance guidelines, they can be found <a href="https://forum.onsetroleplay.com/viewtopic.php?f=16&t=19">here</a>.<br></br>
												You will be required to recap on all of their answers again here. Based on your satisfaction, you may accept/deny their application.<br></br>
												If you are unsure of whether a staff member is already reviewing an application or not, please ask in the Onset Roleplay discord before reviewing.
											</p>

											<p>
												Character Name:<br></br>{applicant.charname}<br></br>
											</p>

											<p>
												Character Story:<br></br>{applicant.charstory}<br></br>
											</p>

											<p>
												Question 1:<br></br>{applicant.question1}<br></br>
												Answer:<br></br>{applicant.answer1}<br></br>
											</p>

											<p>
												Question 2:<br></br>{applicant.question2}<br></br>
												Answer:<br></br>{applicant.answer2}<br></br>
											</p>
										
											<p>
												Question 3:<br></br>{applicant.question3}<br></br>
												Answer:<br></br>{applicant.answer3}<br></br>

											</p>

											<p>
												Question 4:<br></br>{applicant.question4}<br></br>
												Answer:<br></br>{applicant.answer4}<br></br>
											</p>

											<p>
												Question 5:<br></br>{applicant.question5}<br></br>
												Answer:<br></br>{applicant.answer5}<br></br>
											</p>

										</section>
										<footer className="modal-card-foot">
											<Button color="success" id={encode("accept")}>Accept</Button>
											<Button color="danger" id={encode("deny")}>Deny</Button>
											<Button color="primary" id="cancel">Close</Button>
										</footer>
									</div>
								</div>
							</div>

							<Columns>
								<Columns.Column>{applicant.id}</Columns.Column>
								<Columns.Column>{applicant.charname}</Columns.Column>
								<Columns.Column><Button color="info" fullwidth id={"1-" + applicant.id}>View</Button></Columns.Column>
								<Columns.Column><Button color="info" fullwidth id={"2-" + applicant.id}>View</Button></Columns.Column>
								<Columns.Column><Button color="info" fullwidth id={"3-" + applicant.id}>View</Button></Columns.Column>
								<Columns.Column><Button color="info" fullwidth id={"4-" + applicant.id}>View</Button></Columns.Column>
								<Columns.Column><Button color="info" fullwidth id={"5-" + applicant.id}>View</Button></Columns.Column>
								<Columns.Column><Button color="info" fullwidth id={"6-" + applicant.id}>View</Button></Columns.Column>
								<Columns.Column><Button color="info" fullwidth id={"7-" + applicant.id}>Review</Button></Columns.Column>
							</Columns>
						</div>
					})}
				</div>
			</div>
		)
	} else {
		applicants = (
			<p>There are no applications for review at this moment in time!</p>
		);
	}

	return (
		<Layout title="ORP Admin - View Applications">
			<Navbar active>
				<Navbar.Brand>
					{/* 
					// @ts-ignore */}
					<Navbar.Item renderAs="a" href="/">
						Onset Roleplay
					</Navbar.Item>
					<Navbar.Burger />
				</Navbar.Brand>
				<Navbar.Menu >
					<Navbar.Container position="end">
						<Navbar.Item dropdown hoverable>
							<Navbar.Link className="displayname">
								{props.player.steamname}
							</Navbar.Link>
							<Navbar.Dropdown>
								<Navbar.Item>
									View Characters
								</Navbar.Item>
							</Navbar.Dropdown>
						</Navbar.Item>
						{/*
						// @ts-ignore */}
						<Navbar.Item renderAs="a" href="/logout">
							Logout
						</Navbar.Item>
					</Navbar.Container>
				</Navbar.Menu>
			</Navbar>

			{/*
			// @ts-ignore */}
			<Container fluid>
				<Columns>
					<Columns.Column size="one-fifth" className="aside">
						<Menu>
							<Menu.List title="General">
								{/*
								// @ts-ignore */}
								<Menu.List.Item renderAs="a" href="/ucp">
									<div><span className="icon"><i className="fas fa-tachometer-alt"></i></span>
									<span style={{ paddingLeft: "2px" }}>Your Profile</span></div>
								</Menu.List.Item>
								<li>
									<a href="/ucp/characters">
										<span className="icon"><i className="fas fa-user-friends"></i></span>
										<span style={{ paddingLeft: "2px" }}>Your Characters</span>
									</a>
									<ul>
										{chars}
									</ul>
								</li>
							</Menu.List>

							{administration}

						</Menu>
					</Columns.Column>
					<Columns.Column>
						<div style={{paddingBottom: "22px", paddingTop: "14px"}}><Heading>View Applications</Heading></div>

						{applicants}

					</Columns.Column>
				</Columns>

			</Container>

			<script src="/js/viewapplications.js"></script>
		</Layout>
	)
}