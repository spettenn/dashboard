// HomePage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
`;

const HomePage = () => {
	return (
		<Container>
			<h1>Home Page</h1>
			<h2>Hello there</h2>
		</Container>
	);
};

export default HomePage;
