import "./noteModal.css";
import Note from "./App";

function NoteModal(props) {
  const { noteTitle, noteDate, noteContent, modalClose } = props;
  return (
    <div className="note-modal-container">
      <div className="note-modal">
        <h2>{noteTitle}</h2>

        <div className="modal-date">{noteDate}</div>
        <div className="modal-content">{noteContent}</div>
        <button onClick={modalClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default NoteModal;
