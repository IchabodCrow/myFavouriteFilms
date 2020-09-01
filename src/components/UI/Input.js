import React from "react";

const Input = ({
  placeholder,
  input,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div >
      <div>
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"}
        />
        {touched &&
          ((error && <span className="text-red-400">{error}</span>) || (warning && <span className="text-red-400">{warning}</span>))}
      </div>
    </div>
  );
};

export default Input;
