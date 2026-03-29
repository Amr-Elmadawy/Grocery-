import React from "react";
import x from "../../assets/beef.png"
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = ({ activePanel, HandleClose }) => {
  return (
    <div
      className={`py-5 flex flex-col justify-between fixed top-0 right-0 bottom-0  w-[60vh] bg-zinc-100 border border-orange-200 z-50 transform transition-transform duration-300 ${activePanel === "cart" ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="px-10">
        <h3 className="text-3xl text-center font-bold text-zinc-800  pb-5">
          Your Cart
        </h3>
      </div>

      {/* cart items */}
      <div className=" flex-1 flex flex-col gap-1.5 overflow-y-auto scroll ">
        <div
          className={`flex items-center gap-x-3  border-y border-zinc-300 px-2 py-1  `}
        >
          <div className="w-20 h-20  ">
            <img src={x} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between  my-1">
              <h4 className="text-zinc-800 font-bold text-lg ">444</h4>
              <button className="text-white bg-red-600 w-7 h-7 flex justify-center items-center rounded-full mr-6.5 cursor-pointer active:bg-red-700">
                <FaTrash />
              </button>
            </div>
            <div className="flex justify-between  my-1">
              <span className="text-zinc-500 font-semibold line-through ">
                444
              </span>

              <span className="text-red-600 font-semibold">444</span>
              <div className="flex gap-x-2">
                <button className="text-white bg-blue-600 w-7 h-7 flex justify-center items-center rounded-full cursor-pointer active:bg-blue-700 text-[14px]">
                  <FaMinus />
                </button>
                <span className="text-zinc-800">4</span>
                <button className="text-white bg-blue-600 w-7 h-7 flex justify-center items-center rounded-full cursor-pointer active:bg-blue-700 text-[14px]">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cart items */}

      {/*cart details  */}
      <div>
        <div className="border-y border-zinc-300 my-5 px-10">
          <div className="flex justify-between items-center pt-2 text-[14px] ">
            <span className="text-zinc-800 font-semibold">Subtotal</span>
            <span className="text-zinc-800 font-semibold">gggg</span>
          </div>
          <div className="flex justify-between items-center py-2 text-[14px]  ">
            <span className="text-zinc-800 font-semibold">
              Shipping & Handlings
            </span>
            <span className="text-zinc-800 font-semibold">ggg</span>
          </div>
          <div className="flex justify-between items-center py-3 border-t border-zinc-300">
            <span className="text-orange-600 font-bold text-lg">
              Order Total
            </span>
            <span className="text-orange-600 font-bold">ggg</span>
          </div>
        </div>

        {/* cart details  */}
        {/* buttons */}
        <div className="flex justify-between gap-x-3 px-10 ">
          <button
            className="text-white bg-linear-to-b from-orange-400 to-orange-600 flex-1 cursor-pointer   h-[7vh] w-full"
            onClick={HandleClose}
          >
            Close
          </button>
          <button
            className={`text-white  flex-1  bg-linear-to-b from-orange-400 to-orange-600  h-[7vh] w-full `}
          >
            Checkout
          </button>
        </div>
        {/* buttons */}
      </div>
    </div>
  );
};

export default Cart;
