import React, { useState } from 'react';
import styled from 'styled-components';
import NotesList from './NotesList';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	jsutify-content: center;
	width: 100%;
	height: 100%;
	margin: auto;
`;

const NotesMain = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');

	const handleNoteChange = (event) => {
		setNewNote(event.target.value);
	};

	const handleSaveNote = () => {
		if (newNote.trim() !== '') {
			setNotes([...notes, newNote]);
			setNewNote('');
		}
	};

	return (
		<Container>
			<h1>My Notes</h1>
			<textarea value={newNote} onChange={handleNoteChange} />
			<button onClick={handleSaveNote}>Save Note</button>
			<NotesList notes={notes} />
		</Container>
	);
};

export default NotesMain;
