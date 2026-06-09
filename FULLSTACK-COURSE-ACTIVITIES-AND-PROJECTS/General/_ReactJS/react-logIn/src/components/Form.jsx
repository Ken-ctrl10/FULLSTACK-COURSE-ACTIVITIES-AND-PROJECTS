import Input from "./Input";

function Form({isRegistered}) {
  return <form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    
    {!isRegistered && <Input type="password" placeholder="Confirm Password" />}

    {isRegistered ? <button type="submit">Login</button> : 
    <button type="submit">Register</button>}
  </form>
}

export default Form;

/* //Basic Login Logic
import Input from "./Input";

function Form() {
  return <form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
}

export default Form; */