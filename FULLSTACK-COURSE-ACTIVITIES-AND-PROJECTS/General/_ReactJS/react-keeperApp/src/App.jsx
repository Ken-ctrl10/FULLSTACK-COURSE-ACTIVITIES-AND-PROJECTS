import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

import noteEntry from "./notes.js";

import "./App.css";

/* function createNote(noteDetails){
  return <Note 
  key={noteDetails.id} 
  title={noteDetails.title} 
  content={noteDetails.content} />;
} */

function App() {
  return(
    <div>
      <Header />
       
      {noteEntry.map(noteDetails => <Note 
        key={noteDetails.key} 
        title={noteDetails.title} 
        content={noteDetails.content} />)}

      <Footer />
    </div>
  ); 
}

export default App;