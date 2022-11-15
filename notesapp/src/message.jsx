import "./message.css";

function DeleteMessage({ onDialog }) {
  return (
    <div className="message-container">
      <div className="delete-messsage-box">
        <h3>Confirm</h3>

        <div>Are you sure you want to delete this note?</div>
        <button onClick={() => onDialog(true)} className="yes-button">
          Yes
        </button>
        <button onClick={() => onDialog(false)} className="no-button">
          No
        </button>
      </div>
    </div>
  );
}

export default DeleteMessage;
