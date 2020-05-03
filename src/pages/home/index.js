import React from 'react'

import {
  AuthButton,
  ContestantsDisplay,
  ContestantInput,
  Header,
} from 'components'
import { useUser } from 'hooks'

const HomePage = () => {
  const user = useUser()

  return (
    <>
      <Header />
      <ContestantsDisplay />
      {user && <ContestantInput />}
      <br />
      <br />
      <AuthButton />
    </>
  )
}

export default HomePage
