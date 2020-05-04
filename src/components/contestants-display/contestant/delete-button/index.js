import React from 'react'

import { useDeleteContestant } from 'hooks'

const DeleteButton = ({ id }) => {
  const { deleteContestant, isDeleting } = useDeleteContestant()

  const handleClick = async (e) => {
    e.stopPropagation()
    await deleteContestant(id)
  }

  return (
    <button disabled={isDeleting} onClick={handleClick}>
      Remov{isDeleting ? 'ing' : 'e'} Contestant{isDeleting ? '...' : ''}
    </button>
  )
}

export default DeleteButton
