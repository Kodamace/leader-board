import { useState } from 'react'

import { errHandler } from 'helpers'
import db from 'services'

const useClearPoints = () => {
  const [isClearing, setIsClearing] = useState()

  const clearPoints = async () => {
    setIsClearing(true)

    try {
      const snapshot = await db.collection('contestants').get()
      snapshot.docs.forEach((doc) =>
        db.collection('contestants').doc(doc.id).update({ points: 0 })
      )
    } catch (err) {
      errHandler(err)
    }

    setIsClearing(false)
  }

  return { clearPoints, isClearing }
}

export default useClearPoints()
