import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from 'hooks'

import DeleteButton from './delete-button'
import 'styles.css'

const Contestant = ({ id, name, points, rank }) => {
  const history = useHistory()
  const user = useUser()

  const handleClick = () => history.push(`/contestant/${id}`)

  return (
    <div className="contestant-row" onClick={handleClick}>
      <div className="ranker">{rank}</div>
      <div className="name">{name}</div>
      <div className="points">{points}</div>
      {user && <DeleteButton id={id} />}
      <hr />
      <br />
    </div>
  )
}

export default Contestant
