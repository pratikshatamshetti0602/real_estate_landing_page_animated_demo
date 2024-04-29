import React from "react";

const MenuCard = (props) => {
  return (
    <div className="flex items-center justify-center">
      <img src={props.img} alt="House" className="w-16 h-auto mr-2" /> {/* Adjust width and height as needed */}
      <p className="text-sm">{props.paragraph}</p>
    </div>
  );
};


export default MenuCard;


{/* 

<div className="  font-regular bottom-10 text-xs ">
          {props.paragraph}
        </div>

<div className="flex justify-center mt-3">
          <p className="text-center">{props.paragraph}</p>
        </div>

        <div>
        <img className="rounded-small" src={props.img} alt="house" style={{ width: '70px', center: 'auto', alignContent: 'left', height: 'auto' }} />
      </div>


      */}