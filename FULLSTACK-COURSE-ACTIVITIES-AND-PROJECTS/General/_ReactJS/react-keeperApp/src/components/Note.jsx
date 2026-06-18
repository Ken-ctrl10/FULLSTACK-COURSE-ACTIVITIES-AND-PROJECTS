import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function Note({ title, content, onDelete, id }){

  function handleClick(){
    onDelete(id);
  }

  return(
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <Button onClick={ handleClick } className="delete-button">
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Note;