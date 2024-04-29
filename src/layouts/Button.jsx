import React, { useState } from "react";

const Button = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const buttonClass = hovered ? "transform scale-105" : "";

  // Declare buttonClass and initialize it based on the condition
  let buttonClassCondition = "";
  if (props.title === "Delhi , ListProperty") {
    buttonClassCondition = "rounded-full";
  }

  return (
    <div className="mb-2 gap-2"> {/* Add margin bottom for gap */}
      <button
        className={`px-5 py-3 text-black text-xl ml-0 mr-1 bg-[rgb(255,255,255)] transition-transform duration-300 ${buttonClass} ${buttonClassCondition}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{ width: "100%", maxWidth: "200px" }} // Adjust button width
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
