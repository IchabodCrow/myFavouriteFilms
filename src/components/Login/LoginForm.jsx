import React from "react";
import { Form } from "react-final-form";
import { useTranslation } from "react-i18next";

import EmailField from "components/UI/EmailField";
import PasswordField from "components/UI/PasswordField";
import Action from "components/UI/Action";

const LoginForm = (props) => {
  const { t } = useTranslation();
  return (
    <Form
      onSubmit={props.handleSubmit}
      render={({ submitError, modifiedSinceLastSubmit, handleSubmit }) => (
        <div className="flex justify-center mr-8">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <EmailField 
              name="email" 
              namespace="description" 
              required={true} 
            />
            <PasswordField
              name="password"
              namespace="description"
              required={true}
            />
            <Action label={t("description.signIn")} />
            {submitError && (
              <div className="text-xl mt-5 text-center m- text-red-400">
                {modifiedSinceLastSubmit || submitError}
              </div>
            )}
          </form>
        </div>
      )}
    />
  );
};

export default LoginForm;