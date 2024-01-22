import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <span className="flex items-center text-[#FDB022]">
      <FaStar className="mx-[1px]" />
      <FaStar className="mx-[1px]" />
      <FaStar className="mx-[1px]" />
      <FaStar className="mx-[1px]" />
      <FaStar className="mx-[1px]" />
    </span>
  );
};

export default Rating;
