import "./App.css";
import { useState } from "react";

function NotesContainer() {
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date());

  const onAddNoteClick = () => {
    const newNote = "Example Note";
    setDate(date.toString());
    setNotes([...notes, newNote]);
  };

  return (
    <div className="container">
      <h1>My Notes</h1>
      <div className="form-style">
        <input type="text" className="input-field" />
        <button onClick={onAddNoteClick} className="add-button">
          Add Note
        </button>
      </div>

      <div className="notes-grid">
        {notes.map((note) => (
          <div className="new-note">
            <div className="note-date">{date}</div>
            <div className="note-text">{note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NotesContainer />
    </div>
  );
}

export default App;
