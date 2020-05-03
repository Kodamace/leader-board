import React, { createContext, useContext, useEffect, useState } from 'react'

import db from 'services'

const ContestantsContext = createContext({
  contestants: [],
})

export const ContestantsProvider = ({ children }) => {
  const [contestants, setContestants] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .collection('contestants')
      .orderBy('points', 'desc')
      .onSnapshot((snapshot) => {
        setContestants(
          snapshot.docs.map((doc, index) => ({
            ...doc.data(),
            id: doc.id,
            rank: index + 1,
          }))
        )
      })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <ContestantsContext.Provider value={{ contestants }}>
      {children}
    </ContestantsContext.Provider>
  )
}

export function useContestants() {
  return useContext(ContestantsContext)
}
