import React from "react";
import shopify from "../assets/spLogo/shopify.png";
import Rating from "./UI/Rating";
import sarah from "../assets/Sarah.png";
import textImg from "../assets/testImg.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="bg-grey py-8 w-full">
    <div className="container flex flex-col justify-between items-center md:flex-row">
      <div className="text-start w-full md:w-1/2">
        <img src={shopify} alt="logo" className="w-[100px]" />
        <div className="py-8">
          <Rating />
        </div>
        <h2 className="text-2xl mb-8">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h2>
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <img src={sarah} alt="img" className="w-[30px]" />
            <span className="ml-3">
              <h4 className="text-sm font-semibold">Sarah Thompson</h4>
              <p className="text-xs text-darkgrey">Project Manager, Shopify</p>
            </span>
          </span>
          <div className="flex text-primary justify-between w-1/5">
            <FaArrowLeft className="rounded-full bg-white text-4xl p-3 border-[1px] border-lightgrey"/>
            <FaArrowRight className="rounded-full bg-white text-4xl p-3 border-[1px] border-lightgrey"/>
          </div>
        </div>
      </div>
      <img src={textImg} alt="img" className="w-full my-6 md:my-0 md:w-[400px]"/>
    </div>
    </div>
  );
};

export default Testimonial;
