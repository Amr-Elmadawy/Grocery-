import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { PiPlant } from "react-icons/pi";
import { PiFactory } from "react-icons/pi";

const Process = () => {
  const renderSteps = steps.map((step) => {
    return (
      <div className="mt-20">
        <div className={`${step.id % 2 !== 0 ? "md:mt-50" : ""} `}>
          <span className="mx-auto text-8xl bg-zinc-800 text-white flex justify-center items-center h-18 w-18 rounded-full outline-[3px] outline-offset-7 outline-zinc-600 outline-dashed ">
            {step.number}
          </span>
        </div>
        <div className="flex items-center gap-x-5 mt-5">
          <span className="text-white bg-linear-to-b from-orange-400 to-orange-600 text-3xl p-2.5 rounded-full">
            {step.icon}
          </span>
          <div>
            <h3 className="text-2xl text-zinc-800 font-bold">{step.title}</h3>
            <p className="text-zinc-500 font-semibold">{step.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="my-20" id="process">
      <div className="max-w-350 mx-auto  ">
        <div className="mr-auto w-fit px-5">
          <Heading Highlight="Our" Heading="Process" />
        </div>
        <div className="flex md:flex-row flex-col p-5">{renderSteps}</div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
