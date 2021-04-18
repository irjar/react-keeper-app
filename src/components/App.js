import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// map through the notes array and render Note components
// return a single note component 
// and pass the props: key, name and description
function App() {
  return (
    <div>
      <Header />
      {notes.map(newNote =>(
        <Note 
      key={newNote.id}
      name={newNote.title}
      description={newNote.content}
      />)
      )}
      <Footer />
    </div>
  );
}

export default App;
