import React, {useState} from "react";

function CreateArea(props) {
  const [inputNote, setNote] = useState({
    title: "",
    content: ""
  })

  function handleInput(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" value={inputNote.title}/>
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." rows="3" value={inputNote.content}/>
        <button  onClick={(event) => {
          if (inputNote.content && inputNote.title) {
            props.onCreate(inputNote);
            setNote({
              title: "",
              content: ""
            });
          }
          event.preventDefault();
        }} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
