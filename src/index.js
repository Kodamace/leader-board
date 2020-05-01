import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import reducer from 'reducer'

import App from 'App'
import { history } from 'core'
import { ViewportProvider } from 'hooks'

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  reducer
)

const store = createStore(persistedReducer, {}, devToolsEnhancer({}))

const persistor = persistStore(store)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<div>Loading LocalStorage...</div>}
        persistor={persistor}
      >
        <BrowserRouter history={history}>
          <ViewportProvider>
            <App />
          </ViewportProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
  rootElement
)
