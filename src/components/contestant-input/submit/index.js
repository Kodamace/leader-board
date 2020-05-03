import React, { useContext } from 'react'

import { useSubmitContestant } from 'hooks'

import { InputContext } from '../'

const Submit = () => {
  const { name, points, setName, setPoints } = useContext(InputContext)
  const { isSubmitting, submit } = useSubmitContestant()

  const clearInputs = () => {
    setName('')
    setPoints('')
  }

  const handleSubmitClick = async () => {
    await submit(name, points, clearInputs)
  }

  return (
    <button disabled={isSubmitting} onClick={handleSubmitClick}>
      Submit{isSubmitting ? 'ting...' : ''}
    </button>
  )
}

export default Submit
