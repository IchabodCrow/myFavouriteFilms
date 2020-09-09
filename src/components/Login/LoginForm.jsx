import React from "react";
import { Form } from "react-final-form";
import { useTranslation } from "react-i18next";

import {
  emailRegex,
  required,
  composeValidators,
} from "../../utils/validators";

import EmailField from "../UI/EmailField";
import PasswordField from "../UI/PasswordField";
import Action from "../UI/Action";

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
              placeholder={t("description.emailPlaceholder")}
              labelText={t("description.email")}
              validate={composeValidators(required, emailRegex)}
            />
            <PasswordField
              name="password"
              placeholder={t("description.passwordPlaceholder")}
              labelText={t("description.password")}
              validate={composeValidators(required)}
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
