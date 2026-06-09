import Form from './components/Form';

import './App.css';

let isRegistered = true;

function App(){
  return <Form isRegistered={isRegistered} />;
}

export default App;

/* //Basic Login Logic
import Form from './components/Form';

import './App.css';


let isLogged = false;

function App(){
  return(
    <div className="container">
      {isLogged ? <h1>Hello</h1> : 
        <Form />
      }
    </div>
  );
}

export default App; */