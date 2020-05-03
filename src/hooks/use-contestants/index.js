import { useEffect, useState } from 'react'

import { errHandler } from 'helpers'
import db from 'services'

const useContestants = () => {
  const [contestants, setContestants] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const unsubscribe = db
      .collection('contestants')
      .orderBy('points', 'desc')
      .onSnapshot((snapshot, err) => {
        if (errHandler(err)) return
        setContestants(
          snapshot.docs.map((doc, index) => ({
            ...doc.data(),
            id: doc.id,
            rank: index + 1,
          }))
        )
        if (isFetching) setIsFetching(false)
      })
    return () => {
      unsubscribe()
    }
  }, [isFetching])

  return { contestants, isFetching }
}

export default useContestants
