import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Main from "./components/MainPage/main";
import { prepareInitialData } from "./services/insteadServer";
import { PrivateRoute } from "./helpers/PrivateRoute";
import LoginPage from "./components/Login/LoginPage";
import FavoriteMoviesPage from "./components/FavoriteMoviesPage";

prepareInitialData();

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <div className="flex flex-row-reverse bg-purple-500 ">
        <button
          className="bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded"
          onClick={() => changeLanguage("ru")}
        >
          Русский
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
      </div>

      <Switch>
        <PrivateRoute exact path="/movie">
          <Main/>
        </PrivateRoute>
        <PrivateRoute path="/favorite">
          <FavoriteMoviesPage/>
        </PrivateRoute>
        <Route exact path={"/"} component={LoginPage} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
