import React, { useState } from 'react'

import { useDeleteContestant } from 'hooks'

const DeleteButton = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const deleteContestant = useDeleteContestant

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
