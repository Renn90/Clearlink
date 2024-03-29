import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import Button from "./UI/Button";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [toggleBar, setToggleBar] = useState(false)
  const [screenSize, setScreenSize] = useState(null)

  // dropdown state
  const [showProducts, setShowProducts] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)

  const toggleHandler =()=> {
    setToggleBar(!toggleBar)
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
  
    // Initial check
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggleBar(false);
      }
    };
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const li = "flex items-center text-xs mx-4 my-4 md:my-0 cursor-pointer hover:opacity-80";
  return (
    <nav className="container fixed inset-x-0 top-5 border-[1px] border-lightgrey z-[999] bg-grey rounded-full">
      <div className="p-4 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-[100px]" />
          <div className={`flex items-center md:justify-between w-3/4 ${!toggleBar && !screenSize && 'hidden'} ${!screenSize && 'fixed top-[0px] w-[60%] left-0 bg-white p-4 flex-col justify-start h-[100vh]'}`}>
            <ul className="flex flex-col text-darkgrey md:flex-row">
              <li className={li} onMouseEnter={()=> setShowProducts(true)} onMouseLeave={()=> setShowProducts(false)}>
                Products <FaAngleDown className="mx-1 text-xs" />
               {showProducts && <div className="bg-white p-2 absolute top-10 flex flex-col shadow-md rounded items-start">
                  <a href="#" className="m-1 hover:opacity-55 ">Ai assistant</a>
                  <a href="#" className="m-1 hover:opacity-55">video Call</a>
                  <a href="#" className="m-1 hover:opacity-55">Overview</a>
                </div>}
              </li>
              <li className={li} onMouseEnter={()=> setShowSolutions(true)} onMouseLeave={()=> setShowSolutions(false)}>
                Solutions <FaAngleDown className="mx-1 text-xs" />
                {showSolutions && <div className="bg-white p-2 absolute top-10 flex flex-col shadow-md rounded items-start">
                  <a href="#" className="m-1 hover:opacity-55 ">Schedule</a>
                  <a href="#" className="m-1 hover:opacity-55">Meeting</a>
                  <a href="#" className="m-1 hover:opacity-55">Product</a>
                </div>}
              </li>
              <li className={li}>
                Resourses
              </li>
              <li className={li}>Pricing</li>
            </ul>
            <div className="flex flex-col text-xs md:flex-row">
              <button className="rounded-full text-xs px-4 py-2 bg-white border-[1px] border-lightgrey mx-1 my-4 md:my-0 hover:opacity-75">
                Talk to Sales
              </button>
              <Button cta={"Sign up for free"} />
            </div>
          </div>
        
        <IoMenu className="text-xl cursor-pointer flex hover:opacity-70 md:hidden" onClick={toggleHandler}/>
      </div>
    </nav>
  );
};

export default NavBar;
