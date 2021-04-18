import React from "react";

// create a note with the properties name and description
function Note(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Note;
