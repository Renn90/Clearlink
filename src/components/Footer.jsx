import React from "react";
import logo from "../assets/logo.png";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const links = "mb-2 cursor-pointer hover:text-[lightgrey]"
  return (
    <footer className="pt-[96px]">
      <div className="container flex flex-col justify-between md:flex-row">
      <div className="w-full md:w-1/4">
        <img src={logo} alt="logo" className="w-[100px]" />
        <p className="text-sm text-darkgrey mt-4">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className="flex flex-col my-4 justify-between w-full md:flex-row md:w-2/4 nis">
        <div className="flex justify-between w-full md:justify-around md:w-2/4">
        <ul className="text-sm text-darkgrey font-semibold p-5 pl-0 md:p-0">
          <li className="mb-2 font-medium">Product</li>
          <li className={links}>Overview</li>
          <li className={links}>Features</li>
          <li className={links}>Solutions</li>
          <li className={links}>Tutorials</li>
          <li className={links}>Pricing</li>
        </ul>
        <ul className="text-sm text-darkgrey font-semibold p-5 pl-0 md:p-0">
          <li className="mb-2 font-medium">Company</li> 
          <li className={links}>About us</li>
          <li className={links}>Careers</li>
          <li className={links}>Press</li>
          <li className={links}>News</li>
          <li className={links}>Contact</li>
        </ul>
        </div>
        <div className="flex justify-between w-full md:justify-around md:w-2/4">
        <ul className="text-sm text-darkgrey font-semibold p-5 pl-0 md:p-0">
          <li className="mb-2 font-medium">Resources</li>
          <li className={links}>Blog</li>
          <li className={links}>Events</li>
          <li className={links}>Help center</li>
          <li className={links}>Tutorials</li>
          <li className={links}>Support</li>
        </ul>
        <ul className="text-sm text-darkgrey font-semibold p-5 pl-0 md:p-0">
          <li className="mb-2 font-medium">Legal</li>
          <li className={links}>Terms</li>
          <li className={links}>Privacy</li>
          <li className={links}>Cookies</li>
          <li className={links}>Licenses</li>
          <li className={links}>Contact</li>
        </ul>
        </div>
      </div>
      <div className="flex flex-col items-start">
      <h4 className="text-xs text-primary font-medium">Get the app</h4>
        <div className="bg-black cursor-pointer rounded-lg flex items-center my-2 p-2 px-4 text-white hover:opacity-60">
          <FaApple className="text-2xl mr-1"/>
          <p className="text-[10px] flex flex-col">
            Dawnload on the
          <span className="text-sm">App Store</span>
          </p>
        </div>
        <div className="bg-black cursor-pointer rounded-lg flex items-center my-2 p-2 px-4 text-white hover:opacity-60">
          <IoLogoGooglePlaystore className="text-2xl mr-1"/>
          <p className="text-[10px] flex flex-col">
            Get it on <span className="text text-sm">Google play</span>
          </p>
        </div>
      </div>
      </div>
      <div className="items-center bg-grey py-4 mt-2 text-darkgrey">
        <div className="container flex flex-col justify-between sm:flex-row">
        <p className="text-sm font-medium">© 2023 ClearLink. All rights reserved.</p>
        <div className="flex items-center my-3 sm:my-0">
          <FaLinkedin className="ml-1"/>
          <FaTwitter className="ml-2"/>
          <FaFacebook className="ml-2"/>
          <FaInstagram className="ml-2"/>
          <FaGithub className="ml-2"/>
          <FaYoutube className="ml-2"/>
        </div>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
