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
	Section,
	Level,
	Progress
} from 'react-bulma-components';

interface props { 
	characters: string[];
	character: { 
		id: number;
		firstname: string, 
		lastname: string; 
		gender: number; 
		health: number; 
		armour: number; 
		cash: number; 
		bank: number; 
		paycheck: number; 
		level: number;
		exp: number;
		minutes: number;
	}
	items: string[];
	properties: any;
	player: any;
}

export default (props: props) => {
	let chars: any[] = [];

	let inventory: any[] = [];
	let inventory_items: any[] = [];

	let properties: any[] = [];
	let properties_init: any[] = [];

	let administration;

	const VEHICLE_NAMES: string[] = [
		"Premier", "Taxi", "Police Cruiser", "Luxe", "Regal", "Nascar", "Raptor", "Ambulance", "Garbage Truck", "Maverick",
		"Pinnacle", "Sultan", "Bearcat Police", "Bearcat Camo", "Bearcat Medic", "Bearcat Military", "Barracks Police", "Barracks Camo", "Premier SE", 
		"Maverick SE", "Patriot", "Cargo Lite Desert", "Cargo Lite Army", "Securicar", "Dacia"
	]

	const INVENTORY_ITEMS: string[] = [
		"Portable Radio",
		"Repair Kit",
		"Health Kit",
		"Taser",
		"GPS",
		"Brick Phone",
		"pearPhone I",
		"NOS Cannister",
		"Marijuana",
		"Cigar",
		"Cigarette",
		"Cocaine",
		"Heroine",
		"Amphetamine",
		"Xanax",
		"Paracetamol",
		"Steroids",
		"Fuel Can",
		"Mask",
		"Armored Vest"
	]

	const getVehicleNameFromModel = (model: number) => {
		return VEHICLE_NAMES[model - 1];
	}

	const getInventoryItemNameFromId = (id: number) => {
		return INVENTORY_ITEMS[id - 1];
	}

	props.characters.map((char: any, i: any) => {
		if (props.character.id === char.id) {
			{/*
			// @ts-ignore */}
			chars.push(<Menu.List.Item key={i} href={"/ucp/character/" + char.id} active>{char.firstname + " " + char.lastname}</Menu.List.Item>)
		} else {
			{/*
			// @ts-ignore */}
			chars.push(<Menu.List.Item key={i} href={"/ucp/character/" + char.id}>{char.firstname + " " + char.lastname}</Menu.List.Item>)
		}
		
	});

	if (props.items.length > 0) {
		props.items.map((item: any, i: any) => {
			inventory_items.push(
				<Columns key={i}>
					<Columns.Column>
						{getInventoryItemNameFromId(item.id)}
					</Columns.Column>
					<Columns.Column>
						{item.amount}
					</Columns.Column>
				</Columns>
			)
		})

		inventory.push(
			<div className="table">
				<div className="head">
					<Columns>
						<Columns.Column>Item Name</Columns.Column>
						<Columns.Column>Amount</Columns.Column>
					</Columns>
				</div>
				<div className="body" data-simplebar data-simplebar-auto-hide="false">
					{inventory_items}
				</div>
			</div>
		)
	}

	if (props.properties.length > 0) {
		props.properties.map((property: any, i: any) => {
			properties_init.push(
				<Columns key={i}>
					<Columns.Column>
						{property.doorid !== undefined ? <i className="fas fa-home"></i> : <i className="fas fa-store"></i>}
					</Columns.Column>
					<Columns.Column>
						{property.name}
					</Columns.Column>
					<Columns.Column>
						{property.price}
					</Columns.Column>
					<Columns.Column>
						{property.locked === 0 ? 'No' : (property.locked === 1 ? 'Yes' : 'NaN')}
					</Columns.Column>
				</Columns>
			)
		});

		properties.push(
			<div className="table">
				<div className="head">
					<Columns>
						<Columns.Column>Type</Columns.Column>
						<Columns.Column>Name</Columns.Column>
						<Columns.Column>Price</Columns.Column>
						<Columns.Column>Locked</Columns.Column>
					</Columns>
				</div>
				<div className="body" data-simplebar data-simplebar-auto-hide="false">
					{properties_init}
				</div>
			</div>
		)
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
						<div style={{paddingBottom: "22px", paddingTop: "14px"}}><Heading>{props.character.firstname + " " + props.character.lastname}</Heading></div>

						<Columns>
							<Columns.Column>
								<Card>
									<Card.Content>
										<Heading subtitle size={5}>{props.character.firstname + " " + props.character.lastname}'s Statistics</Heading>

										<hr></hr>

										<Columns>
											<Columns.Column>
												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Full Name</div>
													<div style={{float: "right"}}>{props.character.firstname + " " + props.character.lastname}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Gender</div>
													<div style={{float: "right"}}>{props.character.gender === 0 ? 'Male' : 'Female'}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Health</div>
													<div style={{float: "right"}}><Progress color="danger" max={100} value={Math.floor(props.character.health)} /></div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Armour</div>
													<div style={{float: "right"}}><Progress color="info" max={100} value={Math.floor(props.character.health)} /></div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Cash</div>
													<div style={{float: "right"}}>${props.character.cash}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Bank</div>
													<div style={{float: "right"}}>${props.character.bank}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Level</div>
													<div style={{float: "right"}}>{props.character.level}</div>
												</div>

												<div style={{ clear: "both", display: "block" }}>
													<div style={{float: "left", fontWeight: 700}}>Playing Hours</div>
													<div style={{float: "right"}}>{Math.floor(props.character.minutes / 60)}</div>
												</div>
											</Columns.Column>
										</Columns>

									</Card.Content>
								</Card>
							</Columns.Column>
							<Columns.Column>
								<Card>
									<Card.Content>
										<Heading subtitle size={5}>{props.character.firstname + " " + props.character.lastname}'s Inventory</Heading>

										<hr></hr>

										{inventory}
									</Card.Content>
								</Card>
							</Columns.Column>
						</Columns>

						<Columns>
							<Columns.Column>
								<Card>
									<Card.Content>
										<Heading subtitle size={5}>{props.character.firstname + " " + props.character.lastname}'s Properties</Heading>

										<hr></hr>

										{properties}
									</Card.Content>
								</Card>
							</Columns.Column>
							<Columns.Column></Columns.Column>
						</Columns>

					</Columns.Column>
				</Columns>

			</Container>

		</Layout>
	)
}