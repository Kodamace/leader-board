import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const AdminPage = lazy(() => import("pages/admin"));
const LoginPage = lazy(() => import("pages/login"));
const PublicPage = lazy(() => import("pages/public"));
const UserPage = lazy(() => import("pages/user"));

const Routes = () => (
  <Switch>
    <Suspense fallback={<div>Loading Page..</div>}>
      <Route path="/admin" component={AdminPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/user/:username" component={UserPage} />
      <Route exact path="/" component={PublicPage} />
    </Suspense>
    <Route component={() => <div>Page Not Found</div>} />
  </Switch>
);

export default Routes;
