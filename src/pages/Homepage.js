// HomePage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;

	text-align: center;
`;

const HomePage = () => {
	return (
		<Container>
			<h1>Home Page</h1>
		</Container>
	);
};

export default HomePage;
