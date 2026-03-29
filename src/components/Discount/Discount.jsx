import React from "react";
import Button from "../Button/Button";
import FreshFruits from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className=" bg-zinc-100 bg-contain bg-no-repeat bg-right"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="md:bg-transparent bg-zinc-100  flex md:flex-row flex-col max-w-350 p-10 mx-auto ">
        <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90  h-fit md:self-center   ">
          20%
        </span>
        <div className="max-w-175">
          <h3 className="md:text-7xl text-5xl font-bold text-zinc-800 ">
            First Order Discount!
          </h3>
          <p className=" text-zinc-600 my-5  font-semibold">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button content="Get A Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
