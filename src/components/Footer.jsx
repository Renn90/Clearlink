import React from "react";
import logo from "../assets/logo.png";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="container flex justify-between py-[96px]">
      <div className="w-1/4">
        <img src={logo} alt="logo" className="w-[100px]" />
        <p className="text-sm text-darkgrey mt-4">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className="flex justify-between w-2/4">
        <ul className="text-sm text-darkgrey font-semibold">
          <li className="mb-2 font-medium">Product</li>
          <li className="mb-2">Overview</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Solutions</li>
          <li className="mb-2">Tutorials</li>
          <li className="mb-2">Pricing</li>
        </ul>
        <ul className="text-sm text-darkgrey font-semibold">
          <li className="mb-2 font-medium">Product</li>
          <li className="mb-2">Overview</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Solutions</li>
          <li className="mb-2">Tutorials</li>
          <li className="mb-2">Pricing</li>
        </ul>
        <ul className="text-sm text-darkgrey font-semibold">
          <li className="mb-2 font-medium">Product</li>
          <li className="mb-2">Overview</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Solutions</li>
          <li className="mb-2">Tutorials</li>
          <li className="mb-2">Pricing</li>
        </ul>
        <ul className="text-sm text-darkgrey font-semibold">
          <li className="mb-2 font-medium">Product</li>
          <li className="mb-2">Overview</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Solutions</li>
          <li className="mb-2">Tutorials</li>
          <li className="mb-2">Pricing</li>
        </ul>
      </div>
      <div>
      <h4 className="text-xs text-primary font-medium">Get the app</h4>
        <div className="bg-black rounded-lg flex items-center my-2 p-2 px-4 text-white">
          <AiFillApple className="text-2xl mr-1"/>
          <p className="text-[10px] flex flex-col">
            Dawnload on the
            <span className="text-sm">App Store</span>
          </p>
        </div>
        <div className="bg-black rounded-lg flex items-center my-2 p-2 px-4 text-white">
          <IoLogoGooglePlaystore className="text-2xl mr-1"/>
          <p className="text-[10px] flex flex-col">
            Get it on <span className="text text-sm">Google play</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
