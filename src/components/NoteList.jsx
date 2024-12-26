import { useState } from "react";
import NoteItem from "./NoteItem";
import "./NoteList.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNote = () => {
    if (title.trim() === "" || text.trim() === "") {
      alert("Complete the fields");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      text,
      date: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setText("");
  };

  return (
    <div className="notes">
      <h2 className="title-notes">Notes</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={text}
        placeholder="Text"
        className="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addNote} className="add-btn">
        Add
      </button>
      {notes.length === 0 ? (
        <p>No notes </p>
      ) : (
        <ul>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              date={note.date}
              setNotes={setNotes}
              notes={notes}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
