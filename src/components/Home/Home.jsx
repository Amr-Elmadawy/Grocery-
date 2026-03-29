import React from "react";
import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Value from "../value/Value";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Value />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
      
    </div>
  );
};

export default Home;
