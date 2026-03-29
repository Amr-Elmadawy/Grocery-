import React from "react";
import { FaPlus, FaHeart } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({ name, image, price,}) => {
  return (
    <div className="bg-zinc-100 rounded-b-xl rounded-xl p-5">
      <div className="flex justify-between items-center text-2xl mb-5">
        <span
          className={`cursor-pointer text-4xl text-zinc-200`}
        >
          <FaHeart />
        </span>
        <button className="cursor-pointer bg-orange-500 px-3 py-2 text-white rounded-lg">
          <FaPlus />
        </button>
      </div>
      <div className="h-50 w-full">
        <img
          className=" w-full h-full object-contain mx-auto"
          src={image}
          alt={name}
        />
      </div>
      <div className="text-center mt-5">
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        <span className="text-2xl font-bold">${price.toFixed(2)}</span>
      </div>
      <div className="text-center">
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
