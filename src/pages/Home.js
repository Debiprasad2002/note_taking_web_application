import React from 'react';
import NoteEditor from '../components/Note/NoteEditor';
import NoteList from '../components/Note/NoteList';

function Home({ userId }) {
  return (
    <div>
      <h1>Your Notes</h1>
      <NoteEditor userId={userId} />
      <NoteList userId={userId} />
    </div>
  );
}

export default Home;
