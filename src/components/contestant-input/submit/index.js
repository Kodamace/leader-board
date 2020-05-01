import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearContestantInputs } from 'reducer/actions'
import { addContestant } from 'services'

const Submit = () => {
  const dispatch = useDispatch()
  const { name, points } = useSelector((state) => ({
    name: state.name,
    points: state.points,
  }))
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitClick = async () => {
    setIsSubmitting(true)
    await addContestant(name, points)
    setIsSubmitting(false)
    dispatch(clearContestantInputs())
  }

  return (
    <button disabled={isSubmitting} onClick={handleSubmitClick}>
      Submit{isSubmitting ? 'ting...' : ''}
    </button>
  )
}

export default Submit
