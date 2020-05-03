import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const ContestantPage = lazy(() => import('pages/contestant'))
const HomePage = lazy(() => import('pages/home'))
const LoginPage = lazy(() => import('pages/login'))

const Routes = () => (
  <Switch>
    <Suspense fallback={<div>Loading Page...</div>}>
      <Route path="/contestant/:id" component={ContestantPage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
    </Suspense>
    <Route component={() => <h1>Page Not Found</h1>} />
  </Switch>
)

export default Routes
