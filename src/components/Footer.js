import React from "react";
import {
  FacebookLogo,
  InstaLogo,
  LinkedINLogo,
  TwitterLogo,
  UtubeLogo,
} from "../icons/icons";

const Footer = () => {
  return (
    <div className="bg-[#ffffff] text-[#000000] flex flex-col">
      <div className=" flex flex-col p-5 gap-4 md:flex-row w-full md:justify-between lg:px-10 ">
        <div>
          <h1 className="border-b-2 border-gray-400 py-2 font-bold">HobbyCue</h1>
          <p className=" text-sm mt-1">About Us</p>
          <p className=" text-sm">Our Services</p>
          <p className=" text-sm">Work with Us</p>
          <p className=" text-sm">FAQ</p>
          <p className=" text-sm">Contact Us</p>
        </div>
        <div>
          <h1 className="border-b-2 border-gray-400 py-2 font-bold">How Do I</h1>
          <p className=" text-sm mt-1">Sign Up</p>
          <p className=" text-sm">Add a listing</p>
          <p className=" text-sm">Claim listing</p>
          <p className=" text-sm">Post a Query</p>
          <p className=" text-sm">Add a Blog Post</p>
        </div>
        <div>
          <h1 className="border-b-2 border-gray-400 py-2 font-bold">Quick Links</h1>
          <p className=" text-sm mt-1F">Listings</p>
          <p className=" text-sm">Blogs Posts</p>
          <p className=" text-sm">Shop / Store</p>
          <p className=" text-sm">Community</p>
         
        </div>
        <div className="md:flex md:items-center md:flex-col justify-center">
          <input
            type="email"
            placeholder="Email"
            className="p-2 w-full border-2 rounded-md"
          ></input>
          <button className="w-full bg-black text-white  rounded-md p-1 hover:bg-slate-800 transition-all">Subscribe</button>
          <div className=" gap-5 items-center justify-center md:flex hidden mt-5">
            <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
              <FacebookLogo />
            </p>
            <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
              <TwitterLogo />
            </p>
            <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
              <UtubeLogo />
            </p>
            <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
              <InstaLogo />
            </p>
            <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
              <LinkedINLogo />
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center md:hidden">
          <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
            <FacebookLogo />
          </p>
          <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
            <TwitterLogo />
          </p>
          <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
            <UtubeLogo />
          </p>
          <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
            <InstaLogo />
          </p>
          <p className="p-1 bg-gray-500 rounded hover:bg-gray-400 transition-all cursor-pointer">
            <LinkedINLogo />
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center flex-col bg-[#F7F5F9] p-2">
        <p>© Purple Cues Private Limited</p>
      </div>
    </div>
  );
};

export default Footer;
