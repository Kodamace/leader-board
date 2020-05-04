import React from 'react'

import { useClearContestants } from 'hooks'

const ClearContestantButton = () => {
  const { clearContestants, isClearing } = useClearContestants()

  const handleClick = async () =>
    window.confirm(
      'Are you sure you want to remove all contestants?\nTHIS CANNOT BE UNDONE!!!!!'
    ) && (await clearContestants())

  return (
    <button disabled={isClearing} onClick={handleClick}>
      Clear{isClearing ? 'ing' : ''} Contestants
    </button>
  )
}

export default ClearContestantButton
