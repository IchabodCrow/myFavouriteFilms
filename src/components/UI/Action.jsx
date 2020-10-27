import React from "react";

const Action = ({ label, onClick }) => {
  return (
    <div className="md:flex items-center justify-center">
      <div>
        <button
          onClick={onClick}
          className="shadow s bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default Action;