import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Trans, useTranslation } from 'react-i18next'
import { FORM_ERROR } from 'final-form'

import i18n from '../../i18n'
import LoginForm from "./LoginForm";
import checkUserCredentails from "../../services/checkUserCredentails";
import insteadServer from "../../services/insteadServer";

const LoginPage = () => {
  const history = useHistory();

  const handleSubmit = (userValue) => {
    insteadServer.setToken(userValue);
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/movie");
    } else {
      return { [FORM_ERROR]: `${i18n.t("validation.submitError")}` }
    }
    
  };

  return (
    <div className="flex flex-col">
      <div className="my-8 w-1/3 self-center">
        <h1 className="font-bold text-4xl bg-purple-500 text-center text-white font-bold py-2 px-4 rounded ">
          <Trans i18nKey="title">
            My favorite cinema
          </Trans>
        </h1>
      </div>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default withRouter(LoginPage);
