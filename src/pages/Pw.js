import React from 'react';
import styled from 'styled-components';
import Dropdowns from '../components/pw/Dropdowns';
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
`;

function Pw() {
	return (
		<Container>
			<Dropdowns />
		</Container>
	);
}

export default Pw;
