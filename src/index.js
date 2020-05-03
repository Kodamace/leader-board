import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from 'App'
import { configureStore } from 'core'
import CustomHooksProvider from 'hooks/provider'

const { persistor, store } = configureStore()

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<div>Loading LocalStorage...</div>}
        persistor={persistor}
      >
        <BrowserRouter>
          <CustomHooksProvider>
            <App />
          </CustomHooksProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
  rootElement
)
