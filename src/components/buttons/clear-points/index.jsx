import React from 'react'

import { useClearPoints } from 'hooks'

const ClearPointsButton = () => {
  const { clearPoints, isClearing } = useClearPoints()

  const handleClick = async () =>
    window.confirm(
      'Are you sure you want to remove all contestants points?\nTHIS CANNOT BE UNDONE!!!!!'
    ) && (await clearPoints())

  return (
    <button disabled={isClearing} onClick={handleClick}>
      Clear{isClearing ? 'ing' : ''} Points
    </button>
  )
}

export default ClearPointsButton
