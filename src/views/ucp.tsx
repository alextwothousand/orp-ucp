import * as React from 'react';
import Layout from './layout2';
import {
	Menu, 
	Navbar,
	Container,
	Columns,
	Card,
	Heading
} from 'react-bulma-components';

interface props { 
	player: any;
	characters: string[];
	donatorlevel: number;
}

export default (props: props) => {
	/*let chars: any[] = [];

	chars = props.characters.map((char, i) => {
		<Menu.List.Item key={i} id={char.id}>{char.firstname} {char.lastname}</Menu.List.Item>
	})

	props.characters.map((char: any, i: any) => {
		chars.push(
		
		);
	});*/
	
	let chars: any[] = [];
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
		<Layout title="Onset Roleplay - UCP">
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
								<Menu.List.Item active renderAs="a" href="/ucp">
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
						<div style={{paddingBottom: "22px", paddingTop: "14px"}}><Heading>Your Profile</Heading></div>

						<Columns>
							<Columns.Column>
								<Card>
									<Card.Content>
										<div style={{paddingBottom: "10px"}}>
											<Heading subtitle size={5}>Your Account</Heading>
										</div>

										<hr></hr>

										<Columns>
											<Columns.Column>
												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Your Username</div>
													<div style={{float: "right"}}>{props.player.steamname}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Registration Time</div>
													<div style={{float: "right"}}>{props.player.registration_time}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Registration IP</div>
													<div style={{float: "right"}}>{props.player.registration_ip}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Total Playing Hours</div>
													<div style={{float: "right"}}>{Math.floor(totalPlayingHours)}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Donator Level</div>
													<div style={{float: "right"}}>{props.donatorlevel}</div>
												</div>
											</Columns.Column>
											<Columns.Column>
												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Email</div>
													<div style={{float: "right"}}>{props.player.email}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Last Login</div>
													<div style={{float: "right"}}>{props.player.last_login_time}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Character Accounts</div>
													<div style={{float: "right"}}>{props.characters.length}</div>
												</div>
											</Columns.Column>
										</Columns>
									</Card.Content>
								</Card>
							</Columns.Column>

							<Columns.Column>
								<Card>
									<Card.Content>
										<div style={{paddingBottom: "10px"}}>
											<Heading subtitle size={5}>Recent News</Heading>
										</div>

										<hr></hr>

										Work in progress! Please check back later...
									</Card.Content>
								</Card>
							</Columns.Column>
						</Columns>

					</Columns.Column>
				</Columns>

			</Container>

		</Layout>
	)
}