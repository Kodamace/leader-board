import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import 'styles.css'

import { DispatchButton } from 'components'
import { removeContestant } from 'reducer/actions'

const Contestant = ({ id, name, points, rank }) => {
  const history = useHistory()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const handleClick = () => history.push(`/contestant/${id}`)

  return (
    <div className="contestant-row" onClick={handleClick}>
      <div className="ranker">{rank}</div>
      <div className="name">{name}</div>
      <div className="points">{points}</div>
      {isLoggedIn && (
        <DispatchButton
          action={() => removeContestant(name)}
          text="Remove Contestant"
        />
      )}
      <hr />
      <br />
    </div>
  )
}

export default Contestant
