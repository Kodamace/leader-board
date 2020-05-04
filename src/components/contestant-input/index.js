import React, { createContext, useState } from 'react'

import Matches from './matches'
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
        <div>
          <Name />
          <Points />
          <Submit />
        </div>
        <Matches />
      </InputContext.Provider>
    </div>
  )
}

export default Input
