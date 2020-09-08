import React from "react";
import { Field } from "react-final-form";
import { useTranslation } from 'react-i18next'

const FieldWithLabel = ({ name, type, placeholder, validate, labelText}) => {

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3 mb-5">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="inline-full-name"
        > 
            {labelText}
        </label>
      </div>
      <div className="md:w-2/3 h-16">
        <Field
          name={name}
          type={type}
          validate={validate}
        >
          {({ input, meta }) => (
            <div>
              <input
                {...input}
                type="text"
                placeholder={placeholder}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
              />
              {meta.error && meta.touched && (
                <span className="text-red-400">
                  {meta.error}
                </span>
              )}
            </div>
          )}
        </Field>
      </div>
    </div>
  );
};

export default FieldWithLabel;
