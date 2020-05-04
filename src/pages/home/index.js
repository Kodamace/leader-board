import React from 'react'

import {
  AuthButton,
  ClearContestantsButton,
  ClearPointsButton,
  ContestantsDisplay,
  ContestantInput,
  Header,
} from 'components'
import { useContestants, useUser } from 'hooks'

const HomePage = () => {
  const { contestants, isFetching } = useContestants()
  const user = useUser()
  return (
    <>
      <Header />
      <ContestantsDisplay />
      {user && (
        <>
          <ContestantInput />
          {!isFetching && contestants.length > 0 && (
            <>
              <br />
              <br />
              <ClearPointsButton />
              &nbsp;&nbsp;
              <ClearContestantsButton />
            </>
          )}
        </>
      )}
      <br />
      <br />
      <AuthButton />
    </>
  )
}

export default HomePage
