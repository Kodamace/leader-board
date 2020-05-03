import { useEffect, useState } from 'react'

import { errHandler } from 'helpers'
import db from 'services'

const useContestant = (id) => {
  const [contestant, setContestant] = useState()
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const unsubscribe = db
      .collection('contestants')
      .orderBy('points', 'desc')
      .onSnapshot((snapshot, err) => {
        if (errHandler(err)) return
        let rank = 0
        const foundDoc = snapshot.docs.find((doc) => {
          rank++
          return doc.id === id
        })
        if (foundDoc) setContestant({ ...foundDoc.data(), rank })
        else alert('Contestant with that ID does not exist')
        setIsFetching(false)
      })
    return () => {
      unsubscribe()
    }
  }, [id])

  return { contestant, isFetching }
}

export default useContestant
