import React, { useEffect, useState, useRef } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = ({ HandlePanel }) => {
  const [ShowMenu, SetShowMenu] = useState(false);
  const [IsScroll, SetScroll] = useState(false);

  // لما اضغط علي اي مكان برا القايمة تقفل
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        SetShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // لما اضغط علي اي مكان برا القايمة تقفل

  const CloseMenu = () => {
    SetShowMenu(false);
  };

  const ToggleMenu = () => {
    SetShowMenu(!ShowMenu);
  };

  useEffect(() => {
    const HandleScroll = () => {
      SetScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, []);
  return (
    <header
      className={`sticky  top-0 bg-white  z-50  ${IsScroll ? "shadow-md" : ""}`}
    >
      <nav className="flex  max-w-350 md:h-[14vh] h-[12vh] mx-auto  justify-between items-center px-10  ">
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cery
        </Link>
        <ul className="md:flex gap-10 font-semibold hidden">
          <li className="hover:text-orange-500 text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500">
            <a href="#value">About Us</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#process">Process</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-x-5 ">
          <div className="md:flex border-orange-500 border-2 p-1 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="h-[5vh] flex-1 px-3 focus:outline-none"
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-600 text-2xl p-2 rounded-full text-white focus:outline-none">
              <MdOutlineSearch />
            </button>
          </div>
          <button
            className="text-3xl ml-2 cursor-pointer"
            onClick={() => {
              HandlePanel("wishlist");
            }}
          >
            <GoHeartFill />
          </button>
          <button
            className="text-3xl ml-2 cursor-pointer"
            onClick={() => {
              HandlePanel("cart");
            }}
          >
            <HiMiniShoppingBag />
          </button>
          <button
            type="button"
            className="text-3xl ml-2 md:hidden"
            onClick={ToggleMenu}
          >
            {ShowMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
          {/* mobile menu */}
          <ul
            ref={menuRef}
            className={`flex gap-4 shadow-xl  font-semibold md:hidden absolute top-25 -left-full p-6 flex-col backdrop-blur-xl rounded-xl transform -translate-x-1/2  bg-orange-500/15 ${ShowMenu ? "left-1/2" : ""} transition-all duration-500`}
          >
            <li
              onClick={CloseMenu}
              className="hover:text-orange-500 text-orange-500 border-b-2 pb-5 border-orange-600/30"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={CloseMenu}
              className="hover:text-orange-500 border-b-2 pb-5 border-orange-600/30"
            >
              <a href="#value">About Us</a>
            </li>
            <li
              onClick={CloseMenu}
              className="hover:text-orange-500 border-b-2 pb-5 border-orange-600/30"
            >
              <a href="#process">Process</a>
            </li>
            <li
              onClick={CloseMenu}
              className="hover:text-orange-500 border-b-2 pb-5 border-orange-600/30"
            >
              <a href="#footer">Contact Us</a>
            </li>
            <li className="flex border-orange-500 border-2 p-2 rounded-full md:hidden ">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search..."
                autoComplete="off"
                className="h-[5vh] flex-1 px-3 focus:outline-none"
              />
              <button className="bg-linear-to-b from-orange-400 to-orange-600 text-2xl p-1.5 rounded-full text-white focus:outline-none">
                <MdOutlineSearch />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
