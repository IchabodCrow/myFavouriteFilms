import React from "react";
import { reduxForm, Field, SubmissionError } from "redux-form";
import { withRouter, useHistory } from "react-router-dom";
import {
  email,
  requiredEmail,
  requiredPassword,
} from "../../utils/validatorsFields";
import Input from "../UI/Input";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="flex justify-center mr-8">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mb-5">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3 h-16">
            <Field
              name="email"
              placeholder={"Login"}
              component={Input}
              validate={[email, requiredEmail]}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mb-5">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3 h-16">
            <Field
              name="password"
              type={"password"}
              placeholder={"Password"}
              component={Input}
              validate={[requiredPassword]}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  const history = useHistory();
  const registerdUser = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (user) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    return sleep(1000).then(() => {
      if (
        registerdUser.email === user.email &&
        registerdUser.password === user.password
      ) {
        history.push("/movie");
      } else {
        throw new SubmissionError({
          email: "Упс. Где-то ошибка",
          password: "Упс. Где-то ошибка",
        });
      }
    });
  };

  return (
    <div className="flex flex-col">
      <div className="my-8 w-1/3 self-center">
        <h1 className="font-bold text-4xl bg-purple-500 text-center text-white font-bold py-2 px-4 rounded ">
          My favorite cinema
        </h1>
      </div>
      <LoginReduxForm onSubmit={handleSubmit} />
    </div>
  );
};

export default withRouter(Login);
