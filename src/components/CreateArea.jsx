import React, { useState } from "react";

//React Hook useState
//variable note with funtion setNote
//init value of note is an JS object with 2 element title and content
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //get values of name and value from input-form via event handling  onChange={handleChange}.
  //handleChange receive an event when it is triggered
  function handleChange(event) {
    //Destructuring the results of event.target as "name" and "value"
    //"name" and "value" can be used as a seperated constants.
    const { name, value } = event.target;

    //setNote receive the previous notes "prevNote" and use that to add to the existing Notes
    //
    setNote((prevNote) => {
      //return final result object
      return {
        //Spead Operator to spread all the key and value of the current notes "title" and "content"
        ...prevNote,
        // JS6 set object key by variable
        //syntax [name] changes the constant "name"-key from input String "name"
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    //prevent reload the page when button is clicked

    props.onAdd();
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
