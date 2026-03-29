import React from "react";

const Button = (props) => {
  return (
    <button className="bg-linear-to-b from-orange-400 to-orange-600 md:px-6 px-3 md:py-3 py-2 font-semibold text-white rounded-lg mt-3 cursor-pointer hover:scale-105 hover:to-orange-700 transition-all duration-300 text-md">
      {props.content}
    </button>
  );
};

export default Button;
