import React from "react";

import "styles.css";
import { getAppName } from "helpers";
import Routes from "routes";

// Testing a Push

const App = () => (
  <div className="App">
    <h1>{getAppName()}</h1>
    <Routes />
  </div>
);

export default App;

// https://stackoverflow.com/questions/6515502/javascript-form-submit-confirm-or-cancel-submission-dialog-box
// https://react-redux.js.org/api/connect
