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
      <li className="ranker">{rank}</li>
      <li className="name">{name}</li>
      <li className="points">{points}</li>
      <br />
      <br />
      {user && <DeleteButton id={id} />}
      <hr />
      <br />
    </div>
  )
}

export default Contestant
