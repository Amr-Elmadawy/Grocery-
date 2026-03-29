import React, { useState } from "react";
import Heading from "../Heading/Heading";
// import Category from "../Category/Category";
import ProductsList from "../ProductsList/ProductsList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const Categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredProducts =
    activeTab === "All"
      ? ProductsList
      : ProductsList.filter((products) => products.category === activeTab);

  const RenderProducts = filteredProducts.slice(0, 8).map((product) => {
    return (
      <div className="bg-zinc-100  rounded-lg">
        <Cards
          name={product.name}
          image={product.image}
          price={product.price}
        />
      </div>
    );
  });

  return (
    <section className="py-20">
      <div className="max-w-350 mx-auto">
        <Heading Highlight="Our" Heading="Products" />

        {/* Tads */}
        <div className="flex gap-5 md:flex-nowrap flex-wrap md:p-0 p-5 justify-center my-10">
          {Categories.map((cat) => {
            return (
              <button
                className={` text-xl px-5 py-2 cursor-pointer rounded-lg 
                     ${activeTab === cat ? "bg-linear-to-b from-orange-400 to-orange-600 text-white" : "bg-zinc-100"}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 md:p-0 p-5 ">
          {RenderProducts}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          to={"/all"}
          className="  bg-linear-to-b from-orange-400 to-orange-600 md:px-6 px-3 md:py-3 py-2 font-semibold text-white rounded-lg mt-3 cursor-pointer hover:scale-105 hover:to-orange-700 transition-all duration-300 text-md"
        >
          View All 
        </Link>
      </div>
    </section>
  );
};

export default Products;
