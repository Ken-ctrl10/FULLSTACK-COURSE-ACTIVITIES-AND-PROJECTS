import { useState } from 'react';

import './App.css';


function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
    console.log("Plus 1");
  };

  function decrement(){
    setCount(count - 1);
    console.log("Minus 1");
  };

  return <div className="container">
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>;
}

export default App;