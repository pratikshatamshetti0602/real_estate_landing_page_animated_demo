import React from "react";

const Property = (props) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-full md:w-auto px-2 p-3 mr-2 rounded-lg text-center font-sm text-gray bg-[#dad8d8] whitespace-nowrap">
        <p className="m-0">{props.title}</p>
      </div>
    </div>
  );
};

export default Property;
