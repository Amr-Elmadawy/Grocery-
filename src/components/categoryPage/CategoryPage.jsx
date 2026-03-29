import React from "react";
import Banner from "../Banner/Banner";
import ProductsList from "../ProductsList/ProductsList";
import Cards from "../Cards/Cards";

const CategoryPage = ({ title, BgImg, Categories = [] }) => {
  let filteredItems = Categories.includes("All")
    ? ProductsList
    : ProductsList.filter((items) => Categories.includes(items.category));

  const RenderProducts = filteredItems.map((product) => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    );
  });

  return (
    <div>
      <Banner title={title} BgImg={BgImg} />
      <div className="max-w-350 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 my-10 md:px-0 px-5 ">
          {RenderProducts}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
