
// Contact HEading Component
function Heading(){
  return <h1 className="heading">My Contacts:</h1>
}

export default Heading;

/*//Heading Component Practice
function Heading(){

  let currHour = new Date().getHours();
  let message, fColor;
  if(currHour < 13) {
    message = "Good Morning Mate!";
    fColor = {
      color: "red"
    }
  }
  else if(currHour < 18 && currHour >= 13) {
    message = "Good Afternoon Dude!";
    fColor = {
      color: "green"
    }
  }
  else {
    message = "Good Evening Buddy!";
    fColor = {
      color: "blue"
    }
  }
  
  return(
    <h1 className="heading" style={fColor}>{message}</h1>
  );
}

export default Heading;
*/
/*//First Component Practice
 function Heading(){
  return(
    <h1>List of my Favorite Animes:</h1>
  );
}

export default Heading; */