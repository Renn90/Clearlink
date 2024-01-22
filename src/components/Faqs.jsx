import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faqs = () => {
  const [display, setDisplay] = useState(null);

  const changeDisplay = (index) => {
    setDisplay(index === display ? null : index);
  };

  const heading = "font-semibold text-sm";
  const parag = "text-[grey] text-sm py-1 my-2  slide-down";
  const arrow =
    "border-[1px] rounded-full text-darkgrey border-grey p-2 text-3xl";
  const arrowDiv = "flex items-start justify-between my-2";

  return (
    <div className="container flex justify-between py-[96px]">
      <div className="w-1/2">
        <h4 className="text-xs text-primary font-medium">Support</h4>
        <h2 className="text-3xl font-semibold my-2">FAQs</h2>
        <p className="text-sm text-darkgrey w-2/3">
          Everything you need to know about the product and billing. Can't find
          the answer you're looking for? Please
          <span className="underline">chat to our friendly team.</span>
        </p>
      </div>
      <div className="w-1/2">
        <div className={`${display === 1 && "bg-grey rounded"} p-2 pb-0 `}>
          <div className={arrowDiv}>
            <h1 className={heading}>
              How many participants can join a ClearLink video conference?
            </h1>
            <span onClick={() => changeDisplay(1)}>
              {display === 1 ? (
                <FaMinus className={arrow} />
              ) : (
                <FaPlus className={arrow} />
              )}
            </span>
          </div>
          <p
            className={`${parag} ${display === 1 ? "slide-down" : "slide-up"}`}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
          <hr />
        </div>
        <div className={`${display === 2 && "bg-grey rounded"} p-2 pb-0 `}>
          <div className={arrowDiv}>
            <h1 className={heading}>
              Can I use ClearLink on multiple devices?
            </h1>
            <span onClick={() => changeDisplay(2)}>
              {display === 2 ? (
                <FaMinus className={arrow} />
              ) : (
                <FaPlus className={arrow} />
              )}
            </span>
          </div>
          <p
            className={`${parag} ${display === 2 ? "slide-down" : "slide-up"}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            ratione odio! Labore nemo quisquam, culpa dicta incidunt sit,
            facere, id reprehenderit quasi illum libero! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corporis, quam atque. Debitis!
          </p>
          <hr />
        </div>
        <div className={`${display === 3 && "bg-grey rounded"} p-2 pb-0 `}>
          <div className={arrowDiv}>
            <h1 className={heading}>
              Is ClearLink compatible with other video conferencing platforms?
            </h1>
            <span onClick={() => changeDisplay(3)}>
              {display === 3 ? (
                <FaMinus className={arrow} />
              ) : (
                <FaPlus className={arrow} />
              )}
            </span>
          </div>
          <p
            className={`${parag} ${display === 3 ? "slide-down" : "slide-up"}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            suscipit quae, numquam neque consequatur expedita! Expedita
            voluptate nulla culpa voluptatibus, consectetur quod quis porro
            labore doloremque ea eveniet obcaecati mollitia.
          </p>
          <hr />
        </div>
        <div className={`${display === 4 && "bg-grey rounded"} p-2 pb-0 `}>
          <div className={arrowDiv}>
            <h1 className={heading}>
            How does ClearLink ensure the security of my video conferences? 
            </h1>
            <span onClick={() => changeDisplay(4)}>
              {display === 4 ? (
                <FaMinus className={arrow} />
              ) : (
                <FaPlus className={arrow} />
              )}
            </span>
          </div>
          <p
            className={`${parag} ${display === 4 ? "slide-down" : "slide-up"}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            suscipit quae, numquam neque consequatur expedita! Expedita
            voluptate nulla culpa voluptatibus, consectetur quod quis porro
            labore doloremque ea eveniet obcaecati mollitia.
          </p>
          <hr />
        </div>
        <div className={`${display === 5 && "bg-grey rounded"} p-2 pb-0 `}>
          <div className={arrowDiv}>
            <h1 className={heading}>
         Do I need to download any software to use ClearLink?
            </h1>
            <span onClick={() => changeDisplay(5)}>
              {display === 5 ? (
                <FaMinus className={arrow} />
              ) : (
                <FaPlus className={arrow} />
              )}
            </span>
          </div>
          <p
            className={`${parag} ${display === 5 ? "slide-down" : "slide-up"}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            suscipit quae, numquam neque consequatur expedita! Expedita
            voluptate nulla culpa voluptatibus, consectetur quod quis porro
            labore doloremque ea eveniet obcaecati mollitia.
          </p>
          <hr />
        </div>
        <div className={`${display === 6 && "bg-grey rounded"} p-2 pb-0 `}>
          <div className={arrowDiv}>
            <h1 className={heading}>
             What kind of customer support does ClearLink provide?
            </h1>
            <span onClick={() => changeDisplay(6)}>
              {display === 6 ? (
                <FaMinus className={arrow} />
              ) : (
                <FaPlus className={arrow} />
              )}
            </span>
          </div>
          <p
            className={`${parag} ${display === 6 ? "slide-down" : "slide-up"}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            suscipit quae, numquam neque consequatur expedita! Expedita
            voluptate nulla culpa voluptatibus, consectetur quod quis porro
            labore doloremque ea eveniet obcaecati mollitia.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
