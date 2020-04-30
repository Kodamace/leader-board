import React from 'react'

import db from 'db'
import { getAppName } from 'helpers'
import Routes from 'routes'
import 'styles.css'

const App = () => {
  console.log(db.collection('contestants'))

  return (
    <div className="App">
      <h1>{getAppName()}</h1>
      <Routes />
    </div>
  )
}

export default App

// https://stackoverflow.com/questions/6515502/javascript-form-submit-confirm-or-cancel-submission-dialog-box
// https://react-redux.js.org/api/connect
