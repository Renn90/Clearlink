import React from "react";
import { TbBrandZoom } from "react-icons/tb";
import why from '../assets/whyimg.png'
import arrow from '../assets/arrow.png'

const WhySection = () => {
  const icon = ' bg-grey rounded-full p-2 text-4xl text-primary border-[1px] border-lightgrey'
  return (
    <div className="container text-start">
      <div className="py-[96px]">
      <div>
        <h4 className="text-xs text-primary font-medium">The ClearLink Advantage</h4>
        <h2 className="text-2xl font-semibold my-2">Why choose ClearLink?</h2>
        <p className="text-md text-darkgrey w-2/3">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-full md:flex-row">
        <div className="w-full mt-[30px] md:w-1/2">
          <span className="flex flex-col sm:flex-row">
          <div className="m-3 ml-0">
            <TbBrandZoom className={icon}/>
            <h3 className="text-lg my-2 font-semibold">Crystal-clear HD video</h3>
            <p className="text-xs text-darkgrey">No more pixelation or blurriness just stunning, lifelike clarity that brings your team closer in meetings.</p>
          </div>
          <div className="m-3 ml-0">
            <TbBrandZoom className={icon}/>
            <h3 className="text-lg my-2 font-semibold">Noise-canceling audio</h3>
            <p className="text-xs text-darkgrey">Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
          </div>
          </span>
          <span className="flex flex-col sm:flex-row">
          <div className="m-3 ml-0">
            <TbBrandZoom className={icon}/>
            <h3 className="text-lg my-2 font-semibold">Scheduling made easy</h3>
            <p className="text-xs text-darkgrey">Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
          </div>
          <div className="m-3 ml-0">
            <TbBrandZoom className={icon}/>
            <h3 className="text-lg my-2 font-semibold">Bank-grade security</h3>
            <p className="text-xs text-darkgrey">Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
          </div>
          </span>
        </div>
        <div className="relative my-4 md:my-0">
        <img src={arrow} alt="img" className="absolute right-[40%] w-[150px] top-[-100px] hidden md:flex"/>
        <img src={why} alt="img" className="w-[100%] md:w-[350px]"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WhySection;
