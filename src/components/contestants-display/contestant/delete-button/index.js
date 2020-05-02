import React, { useState } from 'react'

import { deleteContestant } from 'services'

const DeleteButton = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleClick = async (e) => {
    e.stopPropagation()
    setIsDeleting(true)
    try {
      await deleteContestant(id)
    } catch (ex) {
      console.log({ ex })
      setIsDeleting(false)
    }
  }

  return (
    <button disabled={isDeleting} onClick={handleClick}>
      Remov{isDeleting ? 'ing' : 'e'} Contestant{isDeleting ? '...' : ''}
    </button>
  )
}

export default DeleteButton
