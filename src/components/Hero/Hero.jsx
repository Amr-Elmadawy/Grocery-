import React from "react";
import grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="max-w-350 mx-auto px-10 flex  gap-10  py-10 h-screen md:flex-row flex-col">
        {/* Hero content */}
        <div className="flex-1">
          <span className="bg-orange-100 px-5 py-2 rounded-full md:text-lg text-md text-orange-500">Export Best Quality ...</span>
          <h1 className="md:text-7xl/20 text-5xl/14 font-bold my-6">
            Tasty Organic <br className="lg:hidden" /> <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> <br />
            In Your City
          </h1>
          <p className="md:text-2xl/14 text-zinc-500  font-semibold">Bred For a High Content Of Beneficial Substances , Our Products Are All Fresh And healthy </p>
        <Button content="Shop Now" />
        </div>
        {/* End Hero content */}
        {/* Hero Img */}
        <div className=" flex-1">
          <img src={grocery} alt="Hero Image" />
        </div>
        {/* End Hero Img */}
      </div>
    </section>
  );
};

export default Hero;
