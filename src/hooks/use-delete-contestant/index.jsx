import React from 'react'

import { useClearPoints } from 'hooks'

const ClearPointsButton = () => {
  const { clearPoints, isClearing } = useClearPoints()

  const handleClick = async () => await clearPoints()

  return (
    <button disabled={isClearing} onClick={handleClick}>
      Clear{isClearing ? 'ing' : ''} Points
    </button>
  )
}

export default ClearPointsButton
