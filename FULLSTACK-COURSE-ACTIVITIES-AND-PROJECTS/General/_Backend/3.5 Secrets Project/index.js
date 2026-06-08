//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

var userAuthorized = false;

function passCheck (req, res, next){
  const password = req.body["password"];
  
  if(password === "ILoveProgramming"){
    userAuthorized = true;
  }
  
  next();
}

app.use(passCheck);

function logReq(req, res, next){
  console.log(`Received a "${req.method}" request to "${req.url}" at "${new Date().toLocaleTimeString()}" Authorized: "${userAuthorized}"`);
  next();
}

app.use(logReq);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
  if(userAuthorized === true){
    res.sendFile(__dirname + "/public/secret.html");
  }
  else{
    res.sendFile(__dirname + "/public/index.html")
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})