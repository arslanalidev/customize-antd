import React from "react";
import { Route, Redirect } from "react-router-dom";
import LayoutWrapper from "./../components/Layout";

export default function PrivateRoute({
  component: Component,
  title,
  titleColor,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return (
            <LayoutWrapper title={title} titleColor={titleColor}>
              <Component {...props} />
            </LayoutWrapper>
          );
        }
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}
