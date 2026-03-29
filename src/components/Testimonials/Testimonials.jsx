import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation ,Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-350 mx-auto py-20">
        <Heading Highlight="Customers" Heading="Saying" />

        <div className="flex justify-end gap-x-3 my-7  mx-10">
          <button className="custom-prev bg-zinc-100 text-2xl p-2 rounded-lg hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <IoIosArrowBack />
          </button>
          <button className="custom-next bg-zinc-100 text-2xl p-2 rounded-lg hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          className="mySwiper "
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation ,Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <div className="bg-zinc-200 p-5 rounded-lg md:mx-0 mx-10">
                  <div className="flex  gap-x-5 items-center ">
                    <div className="h-16 w-16 rounded-full bg-red-300 outline-2 outline-offset-2 outline-orange-500 overflow-hidden object-center">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-zinc-800 text-2xl font-bold">
                        {review.name}
                      </h4>
                      <div className="text-zinc-500 font-semibold">
                        {review.profession}
                      </div>
                      <span className="text-yellow-500 flex gap-1 text-xl ">
                        {Array.from({ length: review.stars }, (_, index) => (
                          <FaStar key={index} />
                        ))}
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-500 mt-5 min-h-[15vh] font-semibold">
                    {review.para}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const reviews = [
  {
    id: 1,
    name: "Shad Saber",
    profession: "Food Blogger",
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    stars: 4,
    img: Customer1,
  },
  {
    id: 2,
    name: "Amr Elmadawy",
    profession: "Chef",
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    stars: 5,
    img: Customer2,
  },
  {
    id: 3,
    name: "Aya Yasser",
    profession: "Model",
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    stars: 2,
    img: Customer3,
  },
  {
    id: 4,
    name: "Hossam Adel",
    profession: "Fitness Coach",
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    stars: 4,
    img: Customer4,
  },
  {
    id: 5,
    name: "Heba Ahmed",
    profession: "Nutritionist",
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    stars: 1,
    img: Customer5,
  },
];
