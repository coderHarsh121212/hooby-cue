import React, { useState } from "react";
import Services from "../components/Services";
import {
  BlueFacebookLogo,
  FacebookLogo,
  GoogleLogo,
  LockIcon,
} from "../icons/icons";

const HomePage = () => {
  const [showlogin, setshowlogin] = useState(true);
  const [showjoinin, setshowjoinin] = useState(false);
  function handlejoinin() {
    setshowjoinin(!showjoinin);
    setshowlogin(!showlogin);
  }
  function handleSignin() {
    setshowlogin(!showlogin);
    setshowjoinin(!showjoinin);
  }
  return (
    <div>
      <div className="w-full h-fit bg-[#F7F5F9] flex flex-col md:flex-row md:p-4  gap-8 lg:pt-10 lg:px-6  max-w-fit">
        {/* //right */}
        <div className="flex flex-col gap-5 py-5 px-3 items-center italic md:items-start lg:w-[90%] h-fit">
          <h1 className=" font-semibold text-xl">
            Explore your <span className="text-[#0096C8]">Hobby</span> or{" "}
            <span className="text-[#8064A2]">Passion</span>
          </h1>
          <p className="md:pr-4 md:text:xs text-center md:text-left lg:pr-4 md:px-0 ">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
            <span className="hidden sm:block text-center md:text-left">
              Your hobby may be about visual or performing arts, sports, games,
              gardening, model making, cooking, indoor or outdoor activities…
            </span>
          </p>
          <p className="md:text:xs text-center md:text-left lg:pr-4 md:pr-4 ">
            <span className="hidden sm:block">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride
            </span>
          </p>
          <div className="w-full  md:hidden">
            <div className="flex  w-full px-10 items-center justify-around">
              <p
                onClick={handleSignin}
                className={`${
                  showlogin &&
                  "border-b-2 border-red-400 text-[#8064A2] font-semibold "
                } text-[#8064A2] cursor-pointer transition-all`}
              >
                Sign in
              </p>
              <p
                onClick={handlejoinin}
                className={`${
                  showjoinin &&
                  "border-b-2 border-red-400 text-[#8064A2] font-semibold"
                } cursor-pointer transition-all`}
              >
                Log in
              </p>
            </div>

            {/* sign in */}
            {showlogin && (
              <form className="w-full flex flex-col gap-4 my-3">
                <input
                  className="w-full p-2 border-2 rounded-md"
                  placeholder="Email"
                  type="email"
                ></input>
                <input
                  className="w-full p-2 border-2 rounded-md"
                  placeholder="Password"
                  type="Password"
                ></input>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      className="accent-purple-500"
                    ></input>
                    <label className="font-sans">Remember Me</label>
                  </div>
                  <p className="flex justify-between items-center gap-1">
                    <LockIcon />
                    Forgot Password?
                  </p>
                </div>
                <button className="w-full p-2 border-2 border-black bg-[#8064A2] rounded-md font-semibold text-white hover:bg-white hover:text-[#8064A2] hover:border-[#8064A2] transition-all">
                  Continue
                </button>
                <div className="flex flex-col gap-5">
                  <p className="text-center border-b-2 border-black p-1 font-semibold">
                    or Connect With
                  </p>
                  <div className="flex flex-col gap-3">
                    <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-5 font-semibold">
                      <GoogleLogo />
                      Continue with Goggle
                    </button>
                    <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-4 font-semibold">
                      <BlueFacebookLogo /> Continue with Facebook
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* join in */}
            {showjoinin && (
              <form className="w-full flex flex-col gap-4 my-3">
                <input
                  className="w-full p-2 border-2 rounded-md"
                  placeholder="Email"
                  type="email"
                ></input>
                <input
                  className="w-full p-2 border-2 rounded-md"
                  placeholder="Password"
                  type="Password"
                ></input>
                <div className="flex justify-between">
                  <p className="text-xs">
                    By continuing ,you agree all terms of <span className="font-bold">service</span> and <span className="font-bold">privacy policy</span>
                    
                  </p>
                </div>
                <button className="w-full p-2 border-2 border-black bg-[#8064A2] rounded-md font-semibold text-white hover:bg-white hover:text-[#8064A2] hover:border-[#8064A2] transition-all">
                  Continue
                </button>
                <div className="flex flex-col gap-5">
                  <p className="text-center border-b-2 border-black p-1 font-semibold">
                    or Connect With
                  </p>
                  <div className="flex flex-col gap-3">
                    <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-5 font-semibold">
                      <GoogleLogo />
                      Continue with Goggle
                    </button>
                    <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-4 font-semibold">
                      <BlueFacebookLogo /> Continue with Facebook
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
          <div className="w-full">
            <img
              src="https://th.bing.com/th/id/OIP.jH5vzchWuXlRkUt2ndZlXgHaE8?rs=1&pid=ImgDetMain"
              className="rounded w-full md:w-full "
            ></img>
          </div>
        </div>
        {/* left */}
        <div className="w-full hidden md:block lg:w-[60%] mt-5 mr-5">
          <div className="flex justify-between w-full px-10">
            <p
              onClick={handleSignin}
              className={`${
                showlogin &&
                "border-b-2 border-red-400 text-[#8064A2] font-semibold"
              } text-[#8064A2] cursor-pointer transition-all`}
            >
              Sign in
            </p>
            <p
              onClick={handleSignin}
              className={`${
                showjoinin &&
                "border-b-2 border-red-400 text-[#8064A2] font-semibold"
              } text-[#8064A2] cursor-pointer transition-all`}
            >
              Join in
            </p>
          </div>

          {/* sign in */}
          {showlogin && (
            <form className="w-full flex flex-col gap-4 my-3">
              <input
                className="w-full p-2 border-2 rounded-md"
                placeholder="Email"
                type="email"
              ></input>
              <input
                className="w-full p-2 border-2 rounded-md"
                placeholder="Password"
                type="Password"
              ></input>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <input type="checkbox" className="accent-purple-500"></input>
                  <label className="font-sans">Remember Me</label>
                </div>
                <p className="flex justify-between items-center gap-1">
                  <LockIcon />
                  Forgot Password?
                </p>
              </div>
              <button className="w-full p-2 border-2 border-black bg-[#8064A2] rounded-md font-semibold text-white hover:bg-white hover:text-[#8064A2] hover:border-[#8064A2] transition-all">
                Continue
              </button>
              <div className="flex flex-col gap-5">
                <p className="text-center border-b-2 border-black p-1 font-semibold">
                  or Connect With
                </p>
                <div className="flex flex-col gap-3">
                  <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-5 font-semibold">
                    <GoogleLogo />
                    Continue with Goggle
                  </button>
                  <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-4 font-semibold">
                    <BlueFacebookLogo /> Continue with Facebook
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* join in */}
          {showjoinin && (
            <form className="w-full flex flex-col gap-4 my-3">
              <input
                className="w-full p-2 border-2 rounded-md"
                placeholder="Email"
                type="email"
              ></input>
              <input
                className="w-full p-2 border-2 rounded-md"
                placeholder="Password"
                type="Password"
              ></input>
              <div className="flex justify-between">
              <p className="text-xs">
                    By continuing ,you agree all terms of <span className="font-bold">service</span> and <span className="font-bold">privacy policy</span>
                    
                  </p>
              </div>
              <button className="w-full p-2 border-2 border-black bg-[#8064A2] rounded-md font-semibold text-white hover:bg-white hover:text-[#8064A2] hover:border-[#8064A2] transition-all">
                Continue
              </button>
              <div className="flex flex-col gap-5">
                <p className="text-center border-b-2 border-black p-1 font-semibold">
                  or Connect With
                </p>
                <div className="flex flex-col gap-3">
                  <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-5 font-semibold">
                    <GoogleLogo />
                    Continue with Goggle
                  </button>
                  <button className="w-full p-2 border-2 border-black rounded-md flex justify-center items-center gap-4 font-semibold">
                    <BlueFacebookLogo /> Continue with Facebook
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <Services />
    </div>
  );
};

export default HomePage;
