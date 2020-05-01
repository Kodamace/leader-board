import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const AdminPage = lazy(() => import('pages/admin'))
const ContestantPage = lazy(() => import('pages/contestant'))
const LoginPage = lazy(() => import('pages/login'))
const PublicPage = lazy(() => import('pages/public'))
const UserPage = lazy(() => import('pages/user'))

const Routes = () => (
  <Switch>
    <Suspense fallback={<div>Loading Page...</div>}>
      <Route path="/admin" component={AdminPage} />
      <Route path="/contestant/:id" component={ContestantPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/user/:username" component={UserPage} />
      <Route exact path="/" component={PublicPage} />
    </Suspense>
    <Route component={() => <h1>Page Not Found</h1>} />
  </Switch>
)

export default Routes
