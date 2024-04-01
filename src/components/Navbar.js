import React, { useState } from "react";
import {
  Bookmark,
  CaretDown,
  Cart,
  CloseLogo,
  Hamburger,
  Notification,
  PurpleSearchLogo,
  Search,
  SearchLogo,
} from "../icons/icons";

const Navbar = () => {
  const [shownav, setShowNav] = useState(false);
  const [showhobbies, setshowhobbies] = useState(false);
  const [showExplore, setshowExplore] = useState(false);
  return (
    <div className="">
      <div className="md-navbar min-h-20">
        <div className="flex items-center lg:ml-12 gap-3">
          <span className="lg:w-10 lg:h-10 italic lg:p-1 text-center border-2 border-[#8064A2] w-8 h-8 text-[#8BCFE6] font-bold text-2xl">
            h
          </span>
          <div className="lg:text-xl font-semibold flex flex-col text-lg">
            <p className="italic text-[#8BCFE6]">
              hobby<span className="text-[#8064A2]">cue</span>
            </p>
            <p className="lg:text-sm italic font-normal text-xs">
              Your Hobby, Your Community
            </p>
          </div>
        </div>
        <div className="relative">
          <input
            placeholder="Search here..."
            className="lg:p-2 rounded-lg lg:w-64 min-w-52 p-1 border-2 border-[#8064A2] placeholder:text-[#8064A2]"
          />
          <button className="bg-[#8064A2] lg:p-3 rounded-lg absolute right-0  h-full w-10 p-1">
            <SearchLogo />
          </button>
        </div>
        <div className=" lg:mr-12">
          <div className="flex gap-3 lg:gap-5 lg:text-xl font-sans text-lg items-center ">
            <div className="relative">
              <a
                href="#"
                className="navlinks relative"
                onMouseEnter={() => setshowExplore(!showExplore)}
                onMouseLeave={() => setshowExplore(!showExplore)}
              >
                Explore
                <CaretDown />
              </a>
              {showExplore && (
                <div className="flex flex-col text-xl absolute top-10 bg-white shadow-2xl w-52 rounded">
                  <a className="border-b-2 px-3 p-1  ">People- Community</a>
                  <a className="border-b-2 px-3 p-1">Places -Venues</a>
                  <a className="border-b-2 px-3 p-1">Program - Events</a>
                  <a className="border-b-2 px-3 p-1">Product- Store</a>
                  <a className="border-b-2 px-3 p-1">Blogs</a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                href="#"
                className="navlinks"
                onMouseEnter={() => setshowhobbies(!showhobbies)}
                onMouseLeave={() => setshowhobbies(!showhobbies)}
              >
                Hobbies
                <CaretDown />
              </a>
              {showhobbies && (
                <div className="flex flex-col  text-xl absolute top-10 bg-white shadow-2xl w-52 rounded">
                  <a className="border-b-2 px-3 p-1">People- Community</a>
                  <a className="border-b-2 px-3 p-1">Places -Venues</a>
                  <a className="border-b-2 px-3 p-1">Program - Events</a>
                  <a className="border-b-2 px-3 p-1">Product- Store</a>
                  <a className="border-b-2 px-3 p-1">Blogs</a>
                </div>
              )}
            </div>
            <i>
              <Bookmark />
            </i>
            <i>
              <Notification />
            </i>
            <i>
              <Cart />
            </i>
            <button className="login-btn ">Sign in</button>
          </div>
        </div>
      </div>
      {/* //inital */}
      <div className="init-navbar">
        <div className="flex items-center  gap-3">
          <span className=" italic lg:p-1 text-center border-4 border-purple-400 w-8 h-8">
            h
          </span>
          <div className="font-semibold flex flex-col text-md">
            <p className="italic">
              {" "}
              hobby<span className="text-purple-500">cue</span>
            </p>
            <p className=" italic  text-xs">Your Hobby, Your Community</p>
          </div>
        </div>
        <div className="flex justify-between  items-center">
          <div
            onClick={() => setShowNav(!shownav)}
            className="flex gap-5 items-center"
          >
            <PurpleSearchLogo />
            <Notification />
            {shownav ? (
              <p>
                <CloseLogo />
              </p>
            ) : (
              <p>
                <Hamburger />
              </p>
            )}
          </div>
        </div>
        {shownav && (
          <div className="absolute top-20 left-0 bg-white text-black w-full  shadow-2xl transition-all">
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="navlinks text-xl border-b-2 p-1 items-center relative"
                onClick={() => setshowExplore(!showExplore)}
              >
                Explore
                <CaretDown />
              </a>
              {showExplore && (
                <div className="flex flex-col text-xl  top-10 bg-white  w-full rounded">
                  <a className="border-b-2 px-3 p-1  ">People- Community</a>
                  <a className="border-b-2 px-3 p-1">Places -Venues</a>
                  <a className="border-b-2 px-3 p-1">Program - Events</a>
                  <a className="border-b-2 px-3 p-1">Product- Store</a>
                  <a className="border-b-2 px-3 p-1">Blogs</a>
                </div>
              )}
              <a
                href="#"
                className="navlinks text-xl border-b-2 p-1 items-center relative"
                onClick={() => setshowhobbies(!showhobbies)}
              >
                Hobbies
                <CaretDown />
              </a>
              {showhobbies && (
                <div className="flex flex-col text-xl  top-10 bg-white  w-full rounded">
                  <a className="border-b-2 px-3 p-1  ">People- Community</a>
                  <a className="border-b-2 px-3 p-1">Places -Venues</a>
                  <a className="border-b-2 px-3 p-1">Program - Events</a>
                  <a className="border-b-2 px-3 p-1">Product- Store</a>
                  <a className="border-b-2 px-3 p-1">Blogs</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
