import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { FORM_ERROR } from "final-form";
import { useTranslation } from "react-i18next";

import LoginForm from "./LoginForm";
import PageHeader from "components/PageHeader";
import { useMutation } from "@apollo/client";
import login from "../../mutation/login";


const LoginPage = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [data, {error, loading}] = useMutation(login, {
    onCompleted(data){
      localStorage.setItem('token', data.login.token)
      if(data.login.token){
        history.push("/movie");
      } else {
        return { [FORM_ERROR]: `${t("validation.submitError")}`};
      }
    }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const handleSubmit = (userValue) => {
    data({
      variables: userValue
    });
  };

  return (
    <div className="flex flex-col">
      <PageHeader />
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default withRouter(LoginPage);