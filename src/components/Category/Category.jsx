import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import MeatCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCard = category.map((categoryCard) => {
    return (
      // card
      <div key={categoryCard.id} className="flex-1 basis-80 md:my-0 my-15  ">
        {/* card img */}
        <div className="md:min-h-[30vh] min-h-[20vh] w-full relative -mb-6">
          <img
            src={categoryCard.image}
            alt={categoryCard.title}
            className="absolute bottom-0 "
          />
        </div>
        {/* card content */}
        <div className=" bg-zinc-100  rounded-b-xl">
          <h3 className="font-bold text-3xl text-zinc-800 pt-8 px-5">
            {categoryCard.title}
          </h3>
          <p className="text-zinc-500 font-semibold px-5 mb-7 mt-5 text-md min-h-[10vh]">
            {categoryCard.description}
          </p>
          <div className="pb-10 px-5">
            <Link
              to={categoryCard.path}
              className="  bg-linear-to-b from-orange-400 to-orange-600 md:px-6 px-3 md:py-3 py-2 font-semibold text-white rounded-lg mt-3 cursor-pointer hover:scale-105 hover:to-orange-700 transition-all duration-300 text-md"
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="md:mt-0 mt-40">
      <div className="py-10">
        <Heading Highlight="Shop" Heading="By Category" />
        <div className="flex flex-wrap max-w-350 mx-auto gap-10 py-15 px-5 ">
          {renderCard}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    image: FruitsCat,
    title: "Fruits & Veggies",
    description:
      "Fresh Organic Produce Sourced Daily From Local Farms . Explore A Wide Range Of Seasonal Fruits And Crisp Vegetables .",
    path: "/fruits",
  },
  {
    id: 2,
    image: DairyCat,
    title: "Dairy & Eggs",
    description:
      "Wholesome Dairy Products And Free-Range Eggs. From Creamy Milk And Yogurt To Artisanal Cheese .",
    path: "/dairy",
  },
  {
    id: 3,
    image: MeatCat,
    title: "Meat & Seafood",
    description:
      "High-Quality , Responsibly Sourced Meat And Seafood . Choose From Fresh Cuts , Marinated Options , And More",
    path: "/seafood",
  },
];
