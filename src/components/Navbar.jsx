import React, { useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { HiLocationMarker } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className="fixed w-full z-10">
      
      <div className="flex flex-row justify-between p-5 lg:px-32 px-5  bg-[#ff8d8d]">
        <div className="flex flex-row absolute-right text-sm font-thin  gap-6 ">
          <div className="box bg-[rgba(67,55,55,0.53)] text-white px-4 py-1.5 rounded-full flex items-center">
            <HiLocationMarker style={{ marginRight: '8px' }} /> <span>Delhi</span>
          </div>
        </div>

        <div className="flex items-center flex-row absolute-left text-sm font-medium justify-end">
          <div className="box bg-[rgba(108,108,108,0.5)] text-white px-4 py-1.5 flex items-center absolute-left rounded-full">List-Property</div>
          <HiMiniUserCircle size={32} />
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;

{/* 
<div className="flex justify-center " >
          <div className="flex flex-row  absolute-right text-sm font-thin gap-6 mr-4">
              <Button title="Delhi"  />
          </div>
          <div className="flex flex-row text-bold ">
              <Button title="ListProperty"  />
          </div>
        </div>
      */}
