import React from "react";

const Heading = (props) => {
  return (
    <div className="md:text-5xl text-[2.5rem] font-bold mx-auto w-fit text-zinc-800">
      <h2>
        <span className="text-orange-500 ">{props.Highlight}</span>{" "}
        {props.Heading}
      </h2>
      <div className="md:w-40 w-25 bg-orange-500 h-1 md:mt-6 mt-4 ml-auto"></div>
    </div>
  );
};

export default Heading;
