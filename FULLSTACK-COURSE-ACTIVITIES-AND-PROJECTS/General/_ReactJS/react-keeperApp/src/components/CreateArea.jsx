import { useState } from "react";

function CreateArea(props){
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return(
    <div>
      <form action="">
        <input type="text" name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
        <textarea name="content" placeholder="Take a note here..." rows="3" onChange={handleChange} value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;