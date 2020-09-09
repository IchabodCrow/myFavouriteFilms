import React from "react";
import { Field } from "react-final-form";
import { composeInitialProps } from "react-i18next";

const EmailField = ({ name, placeholder, validate, labelText }) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3 mb-5">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {labelText}
        </label>
      </div>
      <div className="md:w-2/3 h-16">
        <Field name={name} validate={validate}>
          {({ input, meta }) => {
            return (
              <div>
                <input
                  {...input}
                  type="email"
                  placeholder={placeholder}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                {meta.error && meta.touched && (
                  <span className="text-red-400">
                    {!meta.active && meta.error}
                  </span>
                )}
              </div>
            );
          }}
        </Field>
      </div>
    </div>
  );
};

export default EmailField;
