import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { devToolsEnhancer } from 'redux-devtools-extension'

import reducer from 'reducer'

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  reducer
)

const configureStore = (initialState = {}) => {
  const store = createStore(
    persistedReducer,
    initialState,
    devToolsEnhancer({})
  )
  const persistor = persistStore(store)
  return { persistor, store }
}

export default configureStore
