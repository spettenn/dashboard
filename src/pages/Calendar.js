import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
`;

function Calender() {
	return (
		<Container>
			<h1>Kalender</h1>
		</Container>
	);
}

export default Calender;
