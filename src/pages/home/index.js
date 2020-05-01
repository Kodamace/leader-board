import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  ContestantsDisplay,
  ContestantInput,
  RefreshContestantsButton,
  Header,
  RefreshPointsButton,
} from 'components'
import { toggleLoggedIn } from 'reducer/actions'

const HomePage = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const history = useHistory()

  //   if (!isLoggedIn) return <Redirect to="/login" />

  return (
    <>
      <Header />
      <ContestantsDisplay />
      {isLoggedIn && <ContestantInput />}

      {/* <br />
      <RefreshPointsButton />
      &nbsp;&nbsp;
      <RefreshContestantsButton /> */}
      <br />
      <br />
      {!isLoggedIn && (
        <button onClick={() => history.push('/login')}>Login</button>
      )}
      {isLoggedIn && (
        <button onClick={() => dispatch(toggleLoggedIn())}>Logout</button>
      )}
    </>
  )
}

export default HomePage
