import { useCallback, useEffect, useState } from 'react'

import { errHandler } from 'helpers'
import db from 'services'

const useMatchingContestants = (matchText) => {
  const [contestants, setContestants] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const fetch = useCallback(async () => {
    if (matchText.length > 0) {
      setIsFetching(true)
      try {
        const snapshot = await db.collection('contestants').get()
        const results = await snapshot.docs.reduce(
          (filteredContestants, doc) => {
            const { name } = doc.data()
            const lowerName = name.toLowerCase()
            const lowerMatch = matchText.toLowerCase()
            if (lowerName !== lowerMatch && lowerName.includes(lowerMatch)) {
              filteredContestants.push(doc.data())
            }
            return filteredContestants
          },
          []
        )
        setContestants(results)
      } catch (err) {
        errHandler(err)
      }
      setIsFetching(false)
    } else setContestants([])
  }, [matchText])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { contestants, isFetching }
}

export default useMatchingContestants
