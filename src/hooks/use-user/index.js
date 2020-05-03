import React, { createContext, useContext, useState } from 'react'

import { auth } from 'services'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()

  auth.onAuthStateChanged(setUser)

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
