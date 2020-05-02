import React, { useState } from 'react'

import Submit from './submit'

const Input = () => {
  const [name, setName] = useState('')
  const [points, setPoints] = useState('')

  return (
    <div>
      Contestant Input <br />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Contestant Name"
        value={name}
      />
      <input
        onChange={(e) => setPoints(e.target.value)}
        type="number"
        placeholder="Contestant Points"
        value={points}
      />
      <Submit
        name={name}
        points={points}
        setName={setName}
        setPoints={setPoints}
      />
    </div>
  )
}

export default Input
