import { useState } from 'react'
import db from 'services'

import { errHandler } from 'helpers'

const useDeleteContestant = () => {
  const [isDeleting, setIsDeleting] = useState(false)

  const deleteContestant = async (id) => {
    setIsDeleting(true)
    try {
      await db.collection('contestants').doc(id).delete()
    } catch (err) {
      errHandler(err)
    }
    setIsDeleting(false)
  }

  return { deleteContestant, isDeleting }
}

export default useDeleteContestant
