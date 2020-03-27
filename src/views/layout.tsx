import * as React from 'react';
interface props { title: string; children: any; }

export default (props: props) => {
	return (
		<html>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

				<title>{props.title}</title>
				<link rel="stylesheet" href="/stylesheets/bulma.min.css"/>
				<link rel="stylesheet" href="/stylesheets/main.css"/>
				<link rel="stylesheet" href="/stylesheets/simplebar.css"/>

				<script src="/js/warning.js"></script>
				<script src="/js/simplebar.min.js"></script>
				<script src="/js/jquery.min.js"></script>
				<script src="/js/main.js"></script>

				<script src="https://kit.fontawesome.com/f3f846f7f5.js"></script>
			</head>
			<body>{props.children}</body>
		</html>
	)
}