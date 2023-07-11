import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
`;
function Notes() {
	return (
		<Container>
			<h1>Notes</h1>
		</Container>
	);
}

export default Notes;
