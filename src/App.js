import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Trans, useTranslation } from 'react-i18next'
import axios from 'axios'

import Main from "./components/MainPage/main";
import insteadServer from "./services/insteadServer";
import { PrivateRoute } from "./helpers/PrivateRoute";
import LoginPage from "./components/Login/LoginPage";

insteadServer.prepareInitialData();

function App () {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  };

  return (
    <div className="App">
      <button onClick={ () => changeLanguage('ru') }>Русский</button>
      <button onClick={ () => changeLanguage('en') }>English</button>
      <Switch>
        <PrivateRoute exact path={"/movie"} component={Main}/>
        <Route exact path={"/"} component={LoginPage}  />
      </Switch>

    </div>
  );
}

export default withRouter(App);

