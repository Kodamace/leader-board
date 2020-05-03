import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'App'
import CustomHooksProvider from 'hooks/provider'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <CustomHooksProvider>
        <App />
      </CustomHooksProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
)
