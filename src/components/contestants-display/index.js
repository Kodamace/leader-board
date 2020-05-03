import React from 'react'

import { useContestants } from 'hooks'

import Contestant from './contestant'

const DisplayData = () => {
  const { contestants, isFetching } = useContestants()

  if (isFetching) return <h4>Fetching Contestants...</h4>

  return (
    <div>
      {/* we then pass contestant below  */}
      {contestants.length > 0 ? (
        contestants.map((contestant) => (
          <Contestant key={contestant.id} {...contestant} />
        ))
      ) : (
        <h4>No Contestants Yet</h4>
      )}
    </div>
  )
}

export default DisplayData
