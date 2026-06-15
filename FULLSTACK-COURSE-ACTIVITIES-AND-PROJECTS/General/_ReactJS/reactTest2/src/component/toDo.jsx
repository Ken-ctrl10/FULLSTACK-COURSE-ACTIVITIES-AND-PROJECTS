import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";


function ToDo() {

  const [items, setItems] = useState([]);

  function handleClick(inputText){
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return(
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea onAdd={handleClick}  />


      <div className="items-output">
        <ul>
            {items.map((item, index)=> {
              return <ToDoItem key={index} id={index} text={item} 
              onChecked={deleteItem}/>
            })}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;