import * as React from 'react';
import Layout from './layout2';
import {
	Menu, 
	Navbar,
	Container,
	Columns,
	Card,
	Heading,
	Button,
	Section
} from 'react-bulma-components';

import atob from 'atob';
import btoa from 'btoa';
// @ts-ignore
import window from 'global';

interface props { 
	characters: string[];
	player: any;
}

const encode = (encode: string) => btoa(encode);
const decode = (decode: string) => atob(decode);

export default (props: props) => {
	let chars: any[] = [];
	let characters: any[] = [];
	let administration;

	props.characters.map((char: any, i: any) => {
		{/*
		// @ts-ignore */}
		chars.push(<Menu.List.Item key={i} href={"/ucp/character/" + char.id}>{char.firstname + " " + char.lastname}</Menu.List.Item>)
	});

	props.characters.map((char: any, i: any) => {
		characters.push(
			<div key={i}>
				<div className="js-modal" id={"modal-" + char.id}>
					<div className="modal">
						<div className="modal-background"></div>
						<div className="modal-card">
							<header className="modal-card-head">
								<p className="modal-card-title">Confirmation</p>
								<button className="delete" aria-label="close"></button>
							</header>
							<section className="modal-card-body">
								Are you sure you wish to delete this character?
							</section>
							<footer className="modal-card-foot">
								{/*
								// @ts-ignore */}
								<Button color="danger" renderAs="a" href={"/ucp/character/delete/" + char.id}>Confirm</Button>
								<Button color="primary" id="cancel">Cancel</Button>
							</footer>
						</div>
					</div>
				</div>

				<Section>
					<Card>
						<Card.Content>

						<Columns>
							<Columns.Column size="three-quarters">
								<div style={{ fontSize: "22px" }}>{char.firstname + " " + char.lastname}</div>
								<div style={{ fontSize: "18px" }}>Level {char.level} | ${char.cash}</div>

							</Columns.Column>
							<Columns.Column>
								{/*
								// @ts-ignore */}
								<Button fullwidth color="primary" renderAs="a" href={"/ucp/character/" + char.id} style={{ marginBottom: "4px" }}>View Character</Button>
								<Button fullwidth color="danger" id={encode(char.id)}>Delete Character</Button>
							</Columns.Column>
						</Columns>

						</Card.Content>
					</Card>
				</Section>
			</div>
		)
	});

	if (characters.length < 3) {
		for (let i = characters.length; i < 3; i++) {
			characters.push(
				<Section key={i}>
					<Card>
						<Card.Content>

						<Columns>
							<Columns.Column size="three-quarters">
								<div style={{ fontSize: "22px" }}>Empty Character Slot {i + 1}</div>
								<div style={{ fontSize: "18px" }}></div>

							</Columns.Column>
							<Columns.Column>
								<Button fullwidth color="success" style={{ marginBottom: "4px" }}>Create Character</Button>
								<Button fullwidth color="danger" isStatic>Delete Character</Button>
							</Columns.Column>
						</Columns>

						</Card.Content>
					</Card>
				</Section>
			)
		}
	}
	if (props.player.helper > 0 && props.player.admin === 0) {
		administration = (
			<Menu.List title="Administration">
				{/* 
				// @ts-ignore */}
				<Menu.List.Item renderAs="a" href="/admin/applications">
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
				<Menu.List.Item renderAs="a" href="/admin/applications">	
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

	return (
		<Layout title="Onset Roleplay - Characters">
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
									<a className="is-active" href="/ucp/characters">
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
						<div style={{paddingBottom: "22px", paddingTop: "14px"}}><Heading>Your Characters</Heading></div>
						{characters}
					</Columns.Column>
				</Columns>

			</Container>

			<script src="/js/characters.js"></script>
		</Layout>
		
	)
}