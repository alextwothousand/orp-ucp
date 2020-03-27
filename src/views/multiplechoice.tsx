import * as React from 'react';
import Layout from './layout2';
import {
	Menu, 
	Navbar,
	Container,
	Columns,
	Card,
	Heading,
	Hero,
	Section,
	Button
} from 'react-bulma-components';

interface props {
	nochar: boolean;
	player: any;
	questions: any;
	count: number;
}

const randomArray = (array: any) => array[Math.floor(Math.random() * array.length)];

export default (props: props) => {
	let questions: any[] = [];
	let count: number = 1;

	props.questions.map((question: any, i: any) => {
		questions.push(
			<Section style={{ padding: "1.5rem 1.5rem"}} key={i}>
				{count}. {question.question}
				<div className="control">
					<label className="radio">
						<input type="radio" name={"q" + count} id={"q" + count + ":1"} style={{ marginRight: "2px" }}/>
						{question.answers[0]}
					</label>
				</div>
				<div className="control">
					<label className="radio">
						<input type="radio" name={"q" + count} id={"q" + count + ":2"} style={{ marginRight: "2px" }}/>
						{question.answers[1]}
					</label>
				</div>
				<div className="control">
					<label className="radio">
						<input type="radio" name={"q" + count} id={"q" + count + ":3"}style={{ marginRight: "2px" }}/>
						{question.answers[2]}
					</label>
				</div>
			</Section>
		)
		count += 1;
	});

	let score: JSX.Element | null = props.count !== -1 ? <div><br></br>You have currently scored {props.count} out of 15.</div> : null;

	return (
		<Layout title="Onset Roleplay - Multiple Choice Quiz">
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

			<section className="hero is-fullheight-with-navbar">
				<Container>
					<Hero size="fullheight">
						<Hero.Body>

							<Card>
								<Card.Content>
									<Section style={{ padding: "1.5rem 1.5rem"}}>
										<Heading>Welcome to Onset Roleplay, {props.player.steamname}!</Heading>

										<p>
											You will be required to complete a multiple choice quiz completely tailored to you, followed by a quiz containing
											general information regarding your character and your understanding of Onset Roleplay's Rules and Regulations.<br></br>
											You must answer a minimum of 10 out of 15 questions correctly to be able to proceed onto the next section.
											{score}
										</p>
									</Section>

									{questions}

									<Section style={{ padding: "1.5rem 1.5rem"}}>
										<Button color="primary" id="submit">Submit</Button>
									</Section>
									
								</Card.Content>
							</Card>

						</Hero.Body>
					</Hero>
				</Container>
			</section>

			<script src="/js/dashboard.js"></script>

		</Layout>
	)
}