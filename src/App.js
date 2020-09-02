import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/Login/LoginForm";
import Main from "./components/Main/main";
import insteadServer from "./services/insteadServer";

insteadServer.prepareInitialData();

function App () {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/movie"} component={Main}/>
        <Route path={"/"} component={Login} />
      </Switch>

    </div>
  );
}

export default withRouter(App);

