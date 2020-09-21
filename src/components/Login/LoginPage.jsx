import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { FORM_ERROR } from "final-form";
import { useTranslation } from "react-i18next";

import LoginForm from "./LoginForm";
import { setToken } from "services/insteadServer";
import PageHeader from "components/PageHeader";

const LoginPage = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const handleSubmit = (userValue) => {
    setToken(userValue);
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/movie");
    } else {
      return { [FORM_ERROR]: `${t("validation.submitError")}` };
    }
  };

  return (
    <div className="flex flex-col">
      <PageHeader />
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default withRouter(LoginPage);
