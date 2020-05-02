import React, { useState } from 'react'

import { addContestant } from 'services'

const Submit = ({ name, points, setName, setPoints }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitClick = async () => {
    setIsSubmitting(true)
    await addContestant(name, points)
    setIsSubmitting(false)
    setName('')
    setPoints('')
  }

  return (
    <button disabled={isSubmitting} onClick={handleSubmitClick}>
      Submit{isSubmitting ? 'ting...' : ''}
    </button>
  )
}

export default Submit
