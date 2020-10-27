import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { FORM_ERROR } from "final-form";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";

import LoginForm from "./LoginForm";
import PageHeader from "components/PageHeader";
import login from "mutation/login";

const LoginPage = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [data, { error, loading}] = useMutation(login, {
    onCompleted(data){
      localStorage.setItem('token', data.login.token)
      if(data.login.token ){
        history.push("/movie");
      } else {
        return { [FORM_ERROR]: `${t("validation.submitError")}`};
      }
    }, 
    onError(){}
  })

  if (loading) return <p>Loading...</p>;
  
  const handleSubmit = (userValue) => {
    localStorage.setItem("userInSession", JSON.stringify(userValue.email));
    data({
      variables: userValue
    });
  };
  
  return (
    <div className="flex flex-col">
      <PageHeader />
      <LoginForm handleSubmit={handleSubmit} />
      {error && error.graphQLErrors.map(error => {
        return  <div key={error} className="flex flex-row justify-center leading-8 m-4 text-red-400">{error.message}</div>
      })}
    </div>
  );
};

export default withRouter(LoginPage);