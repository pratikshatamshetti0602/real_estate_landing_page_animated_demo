import React from "react";
import { motion } from "framer-motion";

const ProductCard = (props) => {
  const cardStyle = {
    border: "2px solid #CBD5E0", // Default border color
    borderRadius: "0.3rem", // Rounded corners
    padding: "0.2rem", 
    marginTop: "0.8rem",// Padding inside the card
    marginBottom: "0.8rem",
     // Margin between cards
    ...props.borderStyle, // Additional border styles from props
  };

  const imageContainerStyle = {
    display: "flex", // Use flexbox
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  };

  const imageStyle = {
    maxWidth: "40%", // Ensure image doesn't exceed container width
    maxHeight: "auto", // Ensure image doesn't exceed container height
    borderRadius: "0.375rem", // Rounded corners for the image
  };

  return (
    <motion.div
      className={`w-small  justify-center lg:w-1/3 max-w-sm bg-white p-3 rounded-xl ${props.borderClass}`}
      style={cardStyle}
      variants={{
        initial: {
          opacity: 0,
          y: 20
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2
          }
        }
      }}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.95 }}
    >
      {props.image && (
        <div style={imageContainerStyle}>
          <img src={props.image} alt="Product" style={imageStyle} />
        </div>
      )}

      <h2 className="w-full justify-center text-center font-semibold text-sm ">{props.title}</h2>
      <p className="text-center text-sm">{props.paragraph}</p>
    </motion.div>
  );
};

export default ProductCard;
