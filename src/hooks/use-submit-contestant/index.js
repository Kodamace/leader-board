import { useState } from 'react'

import { capitalize, errHandler } from 'helpers'
import db from 'services'

const useSubmitContestant = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async (rawName, rawPoints, callback) => {
    setIsSubmitting(true)
    const name = capitalize(rawName)
    const points = Number(rawPoints)
    try {
      const snapshot = await db.collection('contestants').get()
      const foundDoc = snapshot.docs.find((doc) => doc.data().name === name)
      if (foundDoc) {
        await db
          .collection('contestants')
          .doc(foundDoc.id)
          .update({ points: foundDoc.data().points + points })
      } else await db.collection('contestants').add({ name, points })

      if (callback) callback()
    } catch (err) {
      errHandler(err)
    }
    setIsSubmitting(false)
  }

  return { isSubmitting, submit }
}

export default useSubmitContestant
