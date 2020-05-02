import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import DeleteButton from './delete-button'
import 'styles.css'

const Contestant = ({ id, name, points, rank }) => {
  const history = useHistory()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const handleClick = () => history.push(`/contestant/${id}`)

  return (
    <div className="contestant-row" onClick={handleClick}>
      <div className="ranker">{rank}</div>
      <div className="name">{name}</div>
      <div className="points">{points}</div>
      {isLoggedIn && <DeleteButton id={id} />}
      <hr />
      <br />
    </div>
  )
}

export default Contestant
