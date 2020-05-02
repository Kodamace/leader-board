import React, { useContext } from 'react'

import { InputContext } from '../'

const Name = () => {
  const { name, setName } = useContext(InputContext)

  const handleChange = (e) => setName(e.target.value)

  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder="Contestant Name"
      value={name}
    />
  )
}

export default Name
