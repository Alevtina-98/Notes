import { useState } from "react";
import "./NoteItem.css";

const NoteList = ({ id, title, text, date, setNotes, notes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: newTitle, text: newText } : note
    );
    setNotes(updatedNotes);
    setIsEditing(false);
  };

  const removeNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <li>
      {isEditing ? (
        <div className="new-inputs">
          <input
            type="text"
            value={newTitle}
            className="new-title"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newText}
            className="new-text"
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave} className="save">
            Save
          </button>
        </div>
      ) : (
        <div className="note">
          <h3>{title}</h3>
          <p>{text}</p>
          <span>{date}</span>
          <button onClick={removeNote}>Remove</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default NoteList;
