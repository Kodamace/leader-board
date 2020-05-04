import { useState } from 'react'

import { errHandler } from 'helpers'
import db from 'services'

const useClearContestants = () => {
  const [isClearing, setIsClearing] = useState()

  const clearContestants = async () => {
    setIsClearing(true)

    try {
      const snapshot = await db.collection('contestants').get()
      snapshot.docs.forEach((doc) =>
        db.collection('contestants').doc(doc.id).delete()
      )
    } catch (err) {
      errHandler(err)
    }

    setIsClearing(false)
  }

  return { clearContestants, isClearing }
}

export default useClearContestants
