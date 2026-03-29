import React from "react";

const Wishlist = ({ activePanel ,HandleClose}) => {
  return (
    <div
      className={`flex justify-between flex-col fixed top-0 right-0 bottom-0 py-5  w-[60vh] bg-zinc-100 border border-orange-200 z-50 transform transition-transform duration-300 ${activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"}`}
    >
      <div>
        <h2 className="text-3xl text-center font-bold text-zinc-800  pb-5">Your Wishlist</h2>
      </div>
      <div className="flex-1">Wishlist</div>
      {/* buttons */}
      <div className="flex justify-between gap-x-3 px-10 mt-3 ">
        <button className="text-white bg-linear-to-b from-orange-400 to-orange-600 flex-1 cursor-pointer   h-[7vh] w-full"
        onClick={HandleClose}>
          Close
        </button>
        <button className="text-white bg-linear-to-b from-orange-400 to-orange-600 flex-1 cursor-pointer  h-[7vh] w-full">
          Clear All
        </button>
      </div>
      {/* buttons */}
    </div>
  );
};

export default Wishlist;
