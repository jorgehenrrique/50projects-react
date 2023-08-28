
import { useEffect, useState } from 'react';
// import * as marked from 'marked';
import './NotesApp.css';

export default function NotesApp() {
  useEffect(() => {
    document.title = 'Notes App';
  }, []);

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const addNewNote = () => {
    const updatedNotes = [...notes];
    const newNote = {
      id: updatedNotes.length + 1,
      text: text,
      isEditing: true,
    };
    updatedNotes.push(newNote);
    setNotes(updatedNotes);
    updateLS(updatedNotes);
  };

  const updateLS = (updatedNotes) => {
    const notesText = updatedNotes.map((note) => note.text);
    localStorage.setItem('notes', JSON.stringify(notesText));
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    updateLS(updatedNotes);
  };

  const handleToggleEdit = (index) => {
    const updatedNotes = [...notes];
    const note = updatedNotes[index];
    note.isEditing = !note.isEditing;
    setNotes(updatedNotes);
  };

  const handleNoteChange = (index, e) => {
    const updatedNotes = [...notes];
    const note = updatedNotes[index];
    note.text = e.target.value;
    setNotes(updatedNotes);
  };

  return (
    <div className='body-33'>

      <button className='add-note-33' onClick={() => addNewNote()}><span>+</span> Add note</button>
      {notes.map((note, index) => (
        <div key={note.id} className='note-33'>
          <div className='tools-33'>
            <button onClick={() => handleToggleEdit(index)}>✏️</button>
            <button onClick={() => handleDeleteNote(index)}>🗑️</button>
          </div>
          {note.isEditing ? (
            <textarea value={note.text} onChange={(e) => handleNoteChange(index, e)}></textarea>
          ) : (
            <div className='main-33'>{note.text}</div>
          )}
        </div>
      ))}

    </div >
  );
}