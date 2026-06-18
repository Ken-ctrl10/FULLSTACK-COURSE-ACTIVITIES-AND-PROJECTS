import { useState } from "react";
import AddNote from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props){

  const [isClick, setIsClick] = useState(false);
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
      <form className="create-note">
        { isClick && <input type="text" name="title" onChange={ handleChange } placeholder="Title" value={note.title}/> }
        
        <textarea name="content" 
          placeholder="Take note here..." 
          rows={ isClick ? 3 : 1 } 
          onChange={ handleChange } 
          value={note.content}
          onClick={() => setIsClick(true)}
        />
        
        <Zoom in={isClick}>
          <Fab onClick={ submitNote } className="add-button">
            <AddNote />
          </Fab>
        </Zoom>

        
      </form>
    </div>
  );
}

export default CreateArea;