import React, { useState } from "react";
import { MicBtn, PauseBtn, PlayBtn } from "../icons/icons";
import Getstarted from "./Getstarted";

const Testimonals = () => {
  const [showplay, setShowplay] = useState(false);
  return (
    <>
      <div className="pt-28 md:px-10 p-3">
        <div className="md:w-[80%]  flex flex-col gap-3 border-2 border-gray-400 rounded-md w-fit mx-auto bg-[#F7F5F9] p-4">
          <p className="text-center font-semibold text-xl">Testimonials</p>
          <p>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="flex gap-4 items-center">
              <span
                className="p-3 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-200"
                onClick={() => setShowplay(!showplay)}
              >
                {showplay ? <PauseBtn /> : <PlayBtn />}
              </span>
              <div className='relative'>
              <p className="w-40 border-b-4 border-r-4 sm:w-56 md:w-72 lg:w-96 "></p>
              <span className='w-3 h-3 rounded-full bg-gray-400 absolute top-[-3px]'></span>
              </div>
              <div className="relative">
              <img
                src="https://th.bing.com/th/id/OIP.jH5vzchWuXlRkUt2ndZlXgHaE8?rs=1&pid=ImgDetMain"
                className="w-10 h-10 rounded-full relative"
              ></img>
              <div className="absolute left-0 bottom-0">
                <MicBtn/>
              </div>
              </div>
            </div>
            <div className="flex gap-2 item">
              <img
                src="https://th.bing.com/th/id/OIP.jH5vzchWuXlRkUt2ndZlXgHaE8?rs=1&pid=ImgDetMain"
                className="w-10 h-10 rounded-full"
              ></img>
              <div className="flex flex-col">
                <p className="text-[#8064A2]">Shubha Nagarajan</p>
                <span className="text-[#8BCFE6]">Classical dancer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Getstarted />
    </>
  );
};

export default Testimonals;
