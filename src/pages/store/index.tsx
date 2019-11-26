import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreSignIn from "./signin";
function StorePage() {
  return (
    <Switch>
      <Route path="/store/signin" component={StoreSignIn} exact />
    </Switch>
  );
}

export default StorePage;
