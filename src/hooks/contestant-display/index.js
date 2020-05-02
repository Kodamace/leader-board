import React, { createContext, useContext, useEffect, useState } from 'react'

import db from 'services'

const ContestantDisplayContext = createContext({
  contestants: [],
})

export const ContestantDisplayProvider = ({ children }) => {
  //   const [isMobile, setIsMobile] = useState(window.innerWidth < 500)
  //   const [height, setHeight] = useState(window.innerHeight)
  //   const [width, setWidth] = useState(window.innerWidth)
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

  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 500)
  //     setHeight(window.innerHeight)
  //     setWidth(window.innerWidth)
  //   }

  //   useEffect(() => {
  //     window.addEventListener('resize', handleResize)
  //     return () => window.removeEventListener('resize', handleResize)
  //   }, [])

  return (
    <ContestantDisplayContext.Provider value={{ contestants }}>
      {children}
    </ContestantDisplayContext.Provider>
  )
}

export function useContestantDisplay() {
  return useContext(ContestantDisplayContext)
}
