import React from 'react';
import { IoMdSync } from "react-icons/io";
import { VscKebabVertical } from "react-icons/vsc";
import { GoClockFill } from "react-icons/go";

const Tools = () => {

  return (
    <div className='ml-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg'><b>CNAPP Dashboard</b></h1>

        <div className='flex items-center gap-4 mr-10'>
          <button className='border-2 border-gray-300 px-4 py-1 rounded-md'>
            Add Widget +
          </button>
          <IoMdSync size={32} className='border-2 border-gray-300 p-1 rounded-md' />
          <VscKebabVertical size={32} className='border-2 border-gray-300 p-1.5 rounded-md' />


          <div className="flex items-center border-2 border-gray-300 p-1 rounded-md">
            <GoClockFill size={20} className="mr-1 ml-1" />
            <select className="border-none outline-none bg-transparent cursor-pointer">
              <option value="last2days">Last 2 Days</option>
              <option value="han">Last 1 week</option>
              <option value="greedo">Last 1 Month</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tools;
