import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" flex flex-col w-full  lg:w-2/6 bg-white p-1 rounded-md gap-0">
      <div className=" flex flex-row items-center lg:justify-start justify-center">
      <div className="w-1/2">
        <img className="" src={props.img} alt="img" style={{ width: '100%', height: '100%' }} />
      </div>

        <div className=" text-left gap-2">
          <h2 className=" ml-2 font-semibold text-medium">{props.title}</h2>
          <p className="text-xs ml-2">
            By Pankaj Kharade 
            1900 sq.ft plot area 
            Delhi 
            40Lakhs
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default ReviewCard;
