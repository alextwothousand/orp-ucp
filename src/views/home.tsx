import * as React from 'react';
import Layout from './layout';
import { 
	Button, 
	Hero,
	Section,
	Container, 
	Navbar, 
	Heading, 
	Card 
} from 'react-bulma-components';
 
interface HelloProps { name: string; articles: any; }

export default (props: HelloProps) => {
	let items: any[] = [];

	props.articles.map((article: any, i: any) => {
		items.push(
		<Section key={i}>
			<Card>
				<Card.Content>
					<Heading className="news-title">
						{article.title}
					</Heading>
					<Heading subtitle className="news-author">
						Written by {article.author} (Published by {article.publisher})
					</Heading>
					<hr></hr>
					{article.body}
				</Card.Content>
			</Card>
		</Section>);
	});

	return ( 
		<Layout title="Onset Roleplay">
			<div data-simplebar>
				<Navbar active fixed="top">
					<Navbar.Brand>
						{/* 
						// @ts-ignore */}
						<Navbar.Item renderAs="a" href="/">
							Onset Roleplay
						</Navbar.Item>
						<Navbar.Burger />
					</Navbar.Brand>
					<Navbar.Menu >
						<Navbar.Container>
							<Navbar.Item dropdown hoverable>
								<Navbar.Link>
									Factions
								</Navbar.Link>
								<Navbar.Dropdown>
									{/* 
									// @ts-ignore */}
									<Navbar.Item href="https://nhp.nsgov.info">
										Highway Patrol
									</Navbar.Item>
									{/* 
									// @ts-ignore */}
									<Navbar.Item href="https://nms.nsgov.info">
										Medical Services
									</Navbar.Item>
								</Navbar.Dropdown>
							</Navbar.Item>
						</Navbar.Container>
						<Navbar.Container position="end">
							<Navbar.Item>
								Forum
							</Navbar.Item>
							<Navbar.Item>
								News
							</Navbar.Item>
							<Navbar.Item>
								<div className="buttons">
									{/* 
									// @ts-ignore */}
									<Button color="primary" renderAs="a" href="/auth">Login</Button>
								</div>
							</Navbar.Item>
						</Navbar.Container>
					</Navbar.Menu>
				</Navbar>

				<section className="hero is-fullheight-with-navbar">
					<Hero size="fullheight">
						<Hero.Body>
							<Container className="has-text-centered">

								<Heading color="white">
									Onset Roleplay
								</Heading>
								<Heading subtitle size={3} color="white">
									A new generation of Roleplay
								</Heading>

							</Container>
						</Hero.Body>
					</Hero>
				</section>

				<section className="hero is-fullheight-with-navbar">
					<Hero size="fullheight">
						<Hero.Body>
							<Container className="has-text-centered">

								<Card>
									<Card.Content>
										<Heading className="news">
											News
										</Heading>
										{items}
									</Card.Content>
								</Card>

							</Container>
						</Hero.Body>
					</Hero>
				</section>

			</div>
		</Layout>
  	);
}