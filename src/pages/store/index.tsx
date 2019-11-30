import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreSignIn from "./signin";
import StoreSignUp from "./signup";
function StorePage() {
  return (
    <Switch>
      <Route path="/store/signin" component={StoreSignIn} exact />
      <Route path="/store/signup" component={StoreSignUp} exact />
    </Switch>
  );
}

export default StorePage;
