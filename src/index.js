import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/*
TODO

1. Implement the add note functionality
- Pass the new note back to the app
- add new note to an array
- take array and render seperate note components for each item

2. Implement the delete note functionality
- callback from the note component to trigger a delete function
- use the filter function to filter out the item that needs deletion
- pass a id over to the note component, pass it back to the app.
*/
