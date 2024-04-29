import React from "react";

const Shapes = (props) => {
  return (
    <div>
      <div
        className="px-3 py-1 font-bold text-white bg-[rgba(108,108,108,0.5)] transition-all duration-300 ease-in-out hover:text-[#fafafa] hover:scale-105 hover:bg-gray-700 rounded-lg cursor-pointer"
        style={{
          animationName: "fadeIn",
          animationDuration: "1s",
          animationFillMode: "forwards",
        }}
      >
        {props.title}
      </div>
    </div>
  );
};

export default Shapes;
