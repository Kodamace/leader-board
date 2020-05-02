import React, { createContext, useState } from 'react'

import Name from './name'
import Points from './points'
import Submit from './submit'

export const InputContext = createContext({
  name: '',
  points: '',
  setName: () => null,
  setPoint: () => null,
})

const Input = () => {
  const [name, setName] = useState('')
  const [points, setPoints] = useState('')

  return (
    <div>
      Contestant Input <br />
      <InputContext.Provider value={{ name, points, setName, setPoints }}>
        <Name />
        <Points />
        <Submit />
      </InputContext.Provider>
    </div>
  )
}

export default Input
