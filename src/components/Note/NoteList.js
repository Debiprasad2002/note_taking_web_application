import React, { useEffect, useState } from 'react';
import { getNotes } from '../../firebase/notesService';

function NoteList({ userId }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const userNotes = await getNotes(userId);
      setNotes(userNotes);
    };
    fetchNotes();
  }, [userId]);

  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
