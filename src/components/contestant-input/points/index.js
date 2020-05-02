import React, { useContext } from 'react'

import { InputContext } from '../'

const Points = () => {
  const { points, setPoints } = useContext(InputContext)

  const handleChange = (e) => setPoints(e.target.value)

  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder="Contestant Points"
      value={points}
    />
  )
}

export default Points
