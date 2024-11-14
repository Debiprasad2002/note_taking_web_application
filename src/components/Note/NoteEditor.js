import React, { useState } from 'react';
import { addNote } from '../../firebase/notesService';

function NoteEditor({ userId }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSaveNote = () => {
    addNote(userId, { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSaveNote}>Save Note</button>
    </div>
  );
}

export default NoteEditor;
