import React from "react";
import Button from "./UI/Button";
import { FaRobot } from "react-icons/fa6";
import avater from "../assets/Avatar group.png";
import hero from "../assets/heroImg.png";
import shopify from '../assets/spLogo/shopify.png'
import coinbase from '../assets/spLogo/Coinbase svg.png'
import dropbox from '../assets/spLogo/Dropbox svg.png'
import intercom from '../assets/spLogo/Intercom svg.png'
import marvel from  '../assets/spLogo/Marvel svg.png'
import Automattic from  '../assets/spLogo/Automattic svg.png'
import Rating from "./UI/Rating";

const Hero = () => {
  return (
    <section className="bg-img mt-[-50px]">
        <div className="container">
      <div className="pt-[200px] relative z-[99] flex justify-between items-center h-full">
        <div className="flex flex-col justify-between items-start h-full text-start w-1/2">
          <h1 className="text-4xl font-bold my-2">
            Uniting the world, one video call at a time
          </h1>
          <p className="text-darkgrey my-2">
            Experience the future of communication with ClearLink where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <span className="flex my-2">
            <Button cta={"Start your free trial"} />
            <p className="flex items-center text-primary mx-3">
              <FaRobot className="mr-1" /> Discover ai assistant
            </p>
          </span>
          <div className="flex items-center my-2">
            <img src={avater} alt="avater" className="w-[100px]" />
            <span className="mx-3">
             <Rating />
              <p className="text-xs text-darkgrey">from 3,000+ reviews</p>
            </span>
          </div>
        </div>
        <img src={hero} alt="hero" className="w-[38%] shd" />
      </div>
      <div className="mt-3">
       <p className="my-2 text-darkgrey">Join 1,500+ companies already video conferencing the ClearLink way</p>
       <div className="flex justify-between items-center">
        <img src={shopify} alt="logo" className="w-[100px]"/>
        <img src={coinbase} alt="logo" className="w-[100px]"/>
        <img src={dropbox} alt="logo" className="w-[100px]"/>
        <img src={intercom} alt="logo" className="w-[100px]"/>
        <img src={marvel} alt="logo" className="w-[100px]"/>
        <img src={Automattic} alt="logo" className="w-[100px]"/>
       </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
