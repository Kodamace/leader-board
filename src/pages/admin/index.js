import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  ContestantsDisplay,
  ContestantInput,
  RefreshContestantsButton,
  Header,
  RefreshPointsButton,
} from 'components'
import { toggleLoggedIn } from 'reducer/actions'

const AdminPage = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  if (!isLoggedIn) return <Redirect to="/login" />

  return (
    <>
      <Header />
      <ContestantsDisplay />
      <ContestantInput />
      {/* <br />
      <RefreshPointsButton />
      &nbsp;&nbsp;
      <RefreshContestantsButton /> */}
      <br />
      <br />
      <button onClick={() => dispatch(toggleLoggedIn())}>Logout</button>
    </>
  )
}

export default AdminPage
