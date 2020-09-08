import React from "react";
import { Form } from "react-final-form";
import { Trans, useTranslation } from 'react-i18next'

import i18n from '../../i18n'
import {
  emailRegex,
  required,
  composeValidators,
} from "../../utils/validators";
import FieldWithLabel from "../UI/FieldWithLabel";

const LoginForm = (props) => {
  return (
    <Form
      onSubmit={props.handleSubmit}
      render={({ submitError, handleSubmit }) => (
        <div className="flex justify-center mr-8">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <FieldWithLabel
              name="email"
              type="text"
              placeholder={i18n.t("description.emailPlaceholder")}
              labelText={i18n.t("description.email")}
              validate={composeValidators(required, emailRegex)}
            />
            <FieldWithLabel
              name="password"
              type="password"
              placeholder={i18n.t("description.passwordPlaceholder")}
              labelText={i18n.t("description.password")}
              validate={composeValidators(required)}
            />
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  <Trans i18nKey="description.signIn">
                    Sign In
                  </Trans>
                </button>
              </div>
            </div>
            {submitError && <div className="text-xl mt-5 text-center m- text-red-400">{submitError}</div>}
          </form>
        </div>
      )}
    />
  );
};

export default LoginForm;
