import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { useContestant } from 'hooks'

const ContestantPage = () => {
  const history = useHistory()
  const { id } = useParams()

  const { contestant, isFetching } = useContestant(id)

  if (isFetching) return <h4>Fetching Contestant...</h4>

  if (!contestant) return <h4>Contestant Not Found</h4>

  function handleBackClick() {
    history.push('/')
  }

  return (
    <div>
      <h2>Contestant Page</h2>
      <strong>ID: </strong>
      {id}
      <br />
      <strong>Name: </strong>
      {contestant.name}
      <br />
      <strong>Points: </strong>
      {contestant.points}
      <br />
      <strong>Rank: </strong>
      {contestant.rank}
      <br />
      <br />
      <button onClick={handleBackClick}>Back to contestant display</button>
    </div>
  )
}

export default ContestantPage
