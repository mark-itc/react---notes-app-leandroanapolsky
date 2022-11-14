import "./App.css";
import { useState } from "react";

function Note(props) {
  const { date } = props;
  return (
    <div>
      <h2>Note title</h2>
      <div className="note-date">{date}</div>
      <div className="note-text">Example Note</div>
    </div>
  );
}

function NotesContainer() {
  const [noteItems, setNoteItems] = useState([]);
  const [date, setDate] = useState(new Date());

  const onAddNoteClicked = () => {
    setDate(date.toString());
    setNoteItems([...noteItems, ""]);
  };

  const onDeleteItem = (noteIndex) => {
    const noteItemsDuplicated = [...noteItems];
    noteItemsDuplicated.splice(noteIndex, 1);
    setNoteItems(noteItemsDuplicated);
  };

  const noNotes = noteItems.length === 0;

  return (
    <div className="container">
      <h1>MY NOTES</h1>
      <input type="text" className="input-field" />
      <button onClick={onAddNoteClicked} className="add-button">
        new note
      </button>
      <div className="notes-grid">
        {noteItems.map((note, index) => (
          <div className="new-note">
            <Note key={note + index.toString()} date={date} />
            <button
              onClick={() => onDeleteItem(index)}
              className="delete-button"
            >
              Delete
            </button>
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
