import React from "react";
import { Switch, Redirect, Route } from "react-router";

import PrivateRoute from "./privateRoute";
import PageNotFound from "../views/PageNotFound";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/not-found" component={PageNotFound} />

      <PrivateRoute path="/dashboard" component={Dashboard} />

      <Redirect
        to={{
          pathname: "/not-found",
        }}
      />
    </Switch>
  );
};

export default Router;
