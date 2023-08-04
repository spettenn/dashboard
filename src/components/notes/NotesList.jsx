import React from 'react';
import Note from './Notes';

const NotesList = ({ notes }) => {
	return (
		<div>
			{notes.map((note, index) => (
				<Note key={index} text={note} />
			))}
		</div>
	);
};

export default NotesList;
