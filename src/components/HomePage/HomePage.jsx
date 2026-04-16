import React from "react";
import { FaPlus } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="max-w-[70%] mx-auto">
      <div className="text-center space-y-5 mt-15">
        <h1 className="lg:text-5xl text-3xl font-bold">Friends to keep close in your life</h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <div>
            <button className="btn bg-[#244D3F] text-white font-bold"><FaPlus/> Add a Friend</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        <div className="text-center p-10 shadow bg-[#FFFFFF]">
            <h1 className="text-3xl font-bold text-black">10</h1>
            <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="text-center p-10 shadow bg-[#FFFFFF]">
            <h1 className="text-3xl font-bold text-black">03</h1>
            <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="text-center p-10 shadow bg-[#FFFFFF]">
            <h1 className="text-3xl font-bold text-black">06</h1>
            <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="text-center p-10 shadow bg-[#FFFFFF]">
            <h1 className="text-3xl font-bold text-black">12</h1>
            <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
