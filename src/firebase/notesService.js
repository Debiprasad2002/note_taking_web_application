import { db } from './config';

export const addNote = async (userId, note) => {
  try {
    await db.collection('notes').add({ userId, ...note, createdAt: new Date() });
  } catch (error) {
    console.error("Error adding note: ", error);
  }
};

export const getNotes = async (userId) => {
  try {
    const notesSnapshot = await db.collection('notes').where('userId', '==', userId).get();
    return notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting notes: ", error);
  }
};
