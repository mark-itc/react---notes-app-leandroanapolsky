import "./App.css";
import { useState } from "react";
import DeleteMessage from "./message";
import NoteModal from "./noteModal";

function Note(props) {
  const { date, title, noteText } = props;

  return (
    <div>
      <h2>{title}</h2>
      <div className="note-date">{date}</div>
      <div className="note-text">{noteText}</div>
    </div>
  );
}

function NotesContainer() {
  const [noteItems, setNoteItems] = useState([]);
  const [date, setDate] = useState("new Date()");
  const [title, setTitle] = useState("Note title");
  const [noteText, setNoteText] = useState("Example Note");
  const [dialog, setDialog] = useState({
    isLoading: false,
  });

  const [modal, setModal] = useState({
    isShown: false,
  });

  const onNoteClicked = () => {
    setModal({ isShown: true });
  };

  const closeModal = () => {
    setModal({ isShown: false });
  };

  const onAddNoteClicked = () => {
    setDate(new Date().toString());
    setNoteItems([...noteItems, ""]);
  };

  const onDeleteItem = (noteIndex) => {
    const noteItemsDuplicated = [...noteItems];
    noteItemsDuplicated.splice(noteIndex, 1);
    setNoteItems(noteItemsDuplicated);
  };

  const handleDialog = (isLoading) => {
    setDialog({ isLoading });
  };

  const onDeleteClick = (index) => {
    handleDialog(true, index);
    setModal({ isShown: false });
    console.log(modal);
  };

  const sureToDelete = (choose) => {
    if (choose) {
      onDeleteItem();
      handleDialog(false);
    } else {
      handleDialog(false);
    }
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
          <div className="new-note" onClick={onNoteClicked}>
            <Note
              key={note + index.toString()}
              date={date}
              title={title}
              noteText={noteText}
            />
            <button
              onClick={() => onDeleteClick(index)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {dialog.isLoading && <DeleteMessage onDialog={sureToDelete} />}
      {modal.isShown && (
        <NoteModal
          noteTitle={title}
          noteDate={date}
          noteContent={noteText}
          modalClose={closeModal}
        />
      )}
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
