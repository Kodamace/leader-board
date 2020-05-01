import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { getContestant } from 'services'

const ContestantPage = () => {
  const { id } = useParams()
  const [isFetching, setIsFetching] = useState(true)
  const [contestant, setContestant] = useState()
  const history = useHistory()

  const fetchContestant = useCallback(async () => {
    const result = await getContestant(id)
    setContestant(result)
    setIsFetching(false)
  }, [id])

  useEffect(() => {
    fetchContestant()
  }, [fetchContestant])

  if (isFetching) return <h4>Fetching Contestant...</h4>

  if (!contestant) return <h4>Contestant Not Found</h4>

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
      <button onClick={() => history.push('/')}>
        Back to contestant display
      </button>
    </div>
  )
}

export default ContestantPage
