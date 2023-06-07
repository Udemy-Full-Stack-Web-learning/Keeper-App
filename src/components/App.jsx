import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(inputNote) {
    setNotes(prevNote => {
      return [
        ...prevNote,
        inputNote
      ];
    });
  }

  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onCreate={addNote}/>
      {notes.map((note, index) => {
        return <Note key={index} id={index} onDelete={deleteNote} title={note.title} content={note.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
