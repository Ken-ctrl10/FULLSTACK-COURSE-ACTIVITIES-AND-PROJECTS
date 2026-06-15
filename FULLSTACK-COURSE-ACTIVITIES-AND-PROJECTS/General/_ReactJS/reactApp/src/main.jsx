import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.jsx';

import './local.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



/* //Simple Destructuring Practice
import React from 'react';
import ReactDOM from 'react-dom/client';

import cars from '../cars.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const [ honda, tesla] = cars;

let { model: hondaModel, coloursByPopularity: hondaColors, speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty } } = honda;
let { model: teslaModel, coloursByPopularity: teslaColors, speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty } } = tesla;

root.render(
  <React.StrictMode>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colours</th>
      </tr>
      <tr>
        <td>{hondaModel}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaColors.join(', ')}</td>
      </tr>
      <tr>
        <td>{teslaModel}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaColors.join(', ')}</td>
      </tr>
    </table>
  </React.StrictMode>
); */


/* import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.jsx';

import './local.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

); */

/* //React Props
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */


/* //Import, Export, and Modules Practice
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

/* //React Components Practice
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.jsx';

import './local.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */


/* //React Components
import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './components/Heading';
import List from './components/List';

import './local.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Heading />
    <List />
  </React.StrictMode>
); */


/* //Challenge 1
import React from 'react';
import ReactDOM from 'react-dom/client';

import './local.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fullName = "Ken Castillo";
const currYear = new Date().getFullYear();

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

root.render(
  <React.StrictMode>
    <h1 className="heading" style={fColor}>{message}</h1>
    <footer>
      Created by {fullName}<br/>Copyright {currYear}
    </footer>
  </React.StrictMode>
);
*/


/* //Inline Styling
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const h1InlineStyle = {
  fontFamily: "verdana",
  fontSize: "20px",
  color: "red"
};

root.render(
  <React.StrictMode>
    <h1 style={h1InlineStyle}>Hello World</h1>
  </React.StrictMode>
); */


/* //Styling in React
import React from "react";
import ReactDOM from "react-dom/client";

import "./local.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const katekyo = "https://tse1.mm.bing.net/th/id/OIP.XdXCgU2a4zgLzXNfckX3ewHaKh?rs=1&pid=ImgDetMain&o=7&rm=3";
const bleach = "https://tse1.mm.bing.net/th/id/OIP.vJuCMhd9c6jfjiq4xrCrswHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3";
const yakitate = "https://tse4.mm.bing.net/th/id/OIP.AQUmPrksUqzXvXZFOscpHAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3";
const frieren = "https://tse1.mm.bing.net/th/id/OIP.dDzQc-BTebWGuJbBy1DurgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3";
const onePiece = "https://images-cdn.ubuy.co.in/633ff1157e3fbc25557517c8-one-piece-poster-japanese-anime-posters.jpg";



root.render(
  <React.StrictMode>
    <h1>My Favorite Animes:</h1>
    <ul>
      <li>
        <img src={katekyo} alt="katekyo-hitman-reborn-img" />
      </li>
      <li>
        <img src={bleach} alt="bleach-tybw-img"/>
      </li>
      <li>
        <img src={yakitate} alt="yakitate-japan-img" />
      </li>
      <li>
        <img src={frieren} alt="frieren-img"/>
      </li>
      <li>
        <img src={onePiece} alt="one-piece-img"/>
      </li>
    </ul>
  </React.StrictMode>
)
 */


/* //Current Year and Copyright
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fullName = "Ken Castillo";
const currYear = new Date().getFullYear();

root.render(
  <React.StrictMode>
    <p>Created by {fullName}</p>
    <p>Copyright {currYear}</p>
  </React.StrictMode>
); */


/* //Template Literals
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fname = "Ken";
const lname = "Castillo";
const luckyNum = 23;

root.render(
  <React.StrictMode>
    <h1>
      Hello, {fname} {lname}!
    </h1>

    <p>You're Lucky Number is {luckyNum}</p>
    <p>The addition of {luckyNum} and 7 is {luckyNum + 7}.</p>
  </React.StrictMode>
); */


/* //First Practice
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>My Favorite Animes:</h1>
    <ul>
      <li>Katekyo Hitman Reborn!</li>
      <li>Bleach</li>
      <li>Yakitate!! Japan</li>
      <li>Frieren</li>
      <li>One Piece</li>
    </ul>
  </React.StrictMode>
); */


/* //modern Syntax 
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import App from './App.jsx';
 import './index.css';
 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Hello World</h1>
  </React.StrictMode>
 );*/