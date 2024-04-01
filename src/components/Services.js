import React from "react";
import Testimonals from "./Testimonals";

const Services = () => {
  return (
    <div className="w-full h-fit ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 p-3 ">
        <div className="service-box border-[#8064A2]  hover:bg-[#8064A2] ">
          <p className="text-center font-semibold text-xl">People</p>
          <p>
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator
          </p>
          <button className="service-btn hover:text-[#8064A2] ">
            Connect
          </button>
        </div>
        <div className=" border-[#77933C] service-box hover:bg-[#77933C] ">
          <p className="text-center font-semibold text-xl">Place</p>
          <p>
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <button className="service-btn  hover:text-[#77933C] ">
            Meet Up
          </button>
        </div>

        <div className="service-box border-[#C0504D]  hover:bg-[#C0504D] ">
          <p className="text-center font-semibold text-xl">Product</p>
          <p>
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <button className="service-btn  hover:text-[#C0504D] ">
            Get it
          </button>
        </div>
        <div className="service-box border-[#0096C8] hover:bg-[#0096C8] ">
          <p className="text-center font-semibold text-xl">Program</p>
          <p>
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button className="service-btn hover:text-[#0096C8] ">
            Attend
          </button>
        </div>
      </div>
      <div className="service-box border-[#0096C8] rounded-md w-fit  shadow-2xl  mt-5  lg:mx-20 mx-3 lg:mt-28">
        <p className="text-center font-semibold text-xl">Add your Own</p>
        <p>
          Are you a teacher or expert? DO you sellor rent out equipment,venue or
          event tickets? Or,you know someonewho should be on hobbycue? Go ahead
          and Add your Own Page
        </p>
        <button className="service-btn hover:bg-purple-400 ">
          Add new
        </button>
      </div>
      <Testimonals />
    </div>
  );
};

export default Services;
