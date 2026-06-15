import { useState } from 'react';

function Form(){
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [isMouseOver, setIsMouseOver] = useState(false);
  const buttonColor = isMouseOver ? "lightblue" : "white";

/*   function handleClick(){
    setHeading("Submitted");
  } */

  function handleMouseOver(){
    setIsMouseOver(true);
  }

  function handleMouseOut(){
    setIsMouseOver(false);
  }
  
  function handleChange(event){
    const { name, value } = event.target;

    setContact( prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return(
  <div className="container">
    <h1>Hello {contact.fName} {contact.lName}</h1>
    <p>{contact.email}</p>
    <form onSubmit={(e) => e.preventDefault()}>
      <input name='fName' type="text" placeholder="Enter Firstname" onChange={handleChange}/>
      <input name='lName' type="text" placeholder="Enter Lastname" onChange={handleChange}/>
      <input name='email' type="email" placeholder="Enter Email" onChange={handleChange}/>

      <button onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut} 
              style={{backgroundColor: buttonColor}}
              >Submit</button>
    </form>
  </div>);
}

export default Form;