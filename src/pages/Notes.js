import React from 'react';
import styled from 'styled-components';
import NotesMain from '../components/notes/NotesMain';

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
			<NotesMain />
		</Container>
	);
}

export default Notes;
