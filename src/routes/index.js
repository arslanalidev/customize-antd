import React from "react";
import { Switch, Redirect, Route } from "react-router";

import PageNotFound from "../views/PageNotFound";
import Login from "../views/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/not-found" component={PageNotFound} />
      <Redirect
        to={{
          pathname: "/not-found",
        }}
      />
    </Switch>
  );
};

export default Router;
