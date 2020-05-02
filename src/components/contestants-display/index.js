import React, { useEffect, useState } from 'react'

import db from 'services'

import Contestant from './contestant'

const DisplayData = () => {
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

  // if (isFetching) return <h4>Fetching Contestants...</h4>

  return (
    <div>
      {/* we then pass contestant below  */}
      {contestants.length > 0 ? (
        contestants.map((contestant) => (
          <Contestant key={contestant.id} {...contestant} />
        ))
      ) : (
        <h4>No Contestants Yet</h4>
      )}
    </div>
  )
}

export default DisplayData
