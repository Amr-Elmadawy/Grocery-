import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <section className="bg-zinc-100" id="footer">
      <div className="max-w-350 mx-auto flex flex-wrap  gap-10 py-20 md:px-0 px-10 justify-between">
        <div className="flex-1 basis-60">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cery
          </a>
          <p className="text-zinc-500 font-semibold my-5 max-w-87.5">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <span className="text-zinc-500 font-semibold hover:text-orange-500">
            2025 &copy; All Right Reserved
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-zinc-800 font-bold">Company</h3>
          <ul className="text-zinc-600 py-5 font-semibold ">
            <li className="cursor-pointer mb-3">
              <a className="hover:text-orange-500" href="">
                About
              </a>
            </li>
            <li className="cursor-pointer mb-3">
              <a className="hover:text-orange-500" href="">
                FAQ'S
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-zinc-800 font-bold">Support</h3>
          <ul className="text-zinc-600 py-5 font-semibold">
            <li className="cursor-pointer mb-3">
              <a className="hover:text-orange-500" href="">
                Support Center
              </a>
            </li>
            <li className="cursor-pointer  mb-3">
              <a className="hover:text-orange-500" href="">
                Feedback
              </a>
            </li>
            <li className="cursor-pointer mb-3 ">
              <a className="hover:text-orange-500" href="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-zinc-800 font-bold">Stay Connected</h3>
          <p className="text-zinc-500 font-semibold my-5">
            Questions Or Feedback? <br /> We'd Love To Hear From You
          </p>
          <div className="bg-white  p-1 flex justify-between items-center  pl-2 rounded-lg ">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email Address"
              className="focus:outline-none  text-zinc-500  h-[5vh]  "
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-600 p-2 rounded-xl text-white cursor-pointer ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
