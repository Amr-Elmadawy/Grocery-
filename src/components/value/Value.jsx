import React from "react";
import Heading from "../Heading/Heading";
import Basket from "../../assets/basket-full-vegetables.png";
import { IoIosHeart } from "react-icons/io";
import { FaLeaf ,FaSeedling ,FaShieldAlt  } from "react-icons/fa";



const Value = () => {
  const renderLeftValue = values.slice(0, 2).map((value) => {
    return (
      <div key={value.id} className="flex md:flex-row-reverse flex-row  items-center gap-5 ">
        <div className="bg-orange-500 text-2xl p-3 rounded-full text-white ">
          {value.icon}
        </div>
        <div className="md:text-end">
          <h3 className="text-zinc-800 text-3xl font-bold">{value.title}</h3>
          <p className="text-zinc-500  font-semibold">{value.para}</p>
        </div>
      </div>
    );
  });

  const renderRightValue = values.slice(2).map((value) => {
    return (
      <div key={value.id} className="flex   items-center gap-5 ">
        <div className="bg-orange-500 text-2xl p-3 rounded-full text-white ">
          {value.icon}
        </div>
        <div className="">
          <h3 className="text-zinc-800 text-3xl font-bold">{value.title}</h3>
          <p className="text-zinc-500  font-semibold">{value.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section id="value">
      <div  className="max-w-350 mx-auto">
        <Heading Highlight="Our" Heading="Value" />
        <div className="flex md:flex-row flex-col basis-80 justify-between  gap-10 md:px-0 px-10 py-20">
          <div className=" flex flex-1 justify-between gap-10 flex-col">
            {renderLeftValue}
          </div>
          <div className="md:flex    w-full flex-1 hidden">
            <img src={Basket} alt="basket-full-vegetables" />
          </div>
          <div className="flex flex-1 justify-between gap-10 flex-col">
            {renderRightValue}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;

const values = [
  {
    id: 1,
    icon: <IoIosHeart />,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    id: 3,
    icon: <FaShieldAlt  />,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    icon:<FaSeedling /> ,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
