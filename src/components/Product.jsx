import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../layouts/ProductCard";
import img1 from "../assets/img/product1.png";
import img2 from "../assets/img/product2.png";
import img3 from "../assets/img/product3.png";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Product = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      setIsAnimationVisible(true);
    }
  }, [inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <div ref={ref} className="min-h-[70vh] lg:min-h-[800px] xl:min-h-[900px] flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-r bg-red-500 to-red-100 transparent-all">
      <h1 className="font-semibold text-white text-2xl mt-0">
        Home Related Services
      </h1>
      <p className="font-regular rounded-md text-sm text-white mt-0 mb-0">
        Win up-to 3% in Reward
      </p>

      <motion.div
        className="mt-4"
        variants={cardVariants}
        initial="hidden"
        animate={isAnimationVisible ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.95 }}
      >
        <ProductCard
          title="Pay on Credit"
          paragraph="Pay your rent with Credit Card"
        />
      </motion.div>

      <motion.div
        className="mt-4"
        variants={cardVariants}
        initial="hidden"
        animate={isAnimationVisible ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.95 }}
      >
        <ProductCard
          title="Personal Loan"
          paragraph="Get instant loans upto 20 Lakhs"
        />
      </motion.div>

      <div className="flex mb-4 justify-between bg-white"></div>

      <motion.div
        className="flex justify-between gap-4 bg-white"
        variants={cardVariants}
        initial="hidden"
        animate={isAnimationVisible ? "visible" : "hidden"}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.95 }}
      >
        <ProductCard
          title="Line of Credit"
          paragraph=""
          borderClass="border-gray-300 border-solid border-2 rounded-md ml-2"
          image={img1}
        />
        <ProductCard
          title="Milestone Premium"
          paragraph=""
          borderClass="border-gray-300 border-solid border-2 rounded-md"
          image={img2}
        />
        <ProductCard
          title="Home Interiors"
          paragraph=""
          borderClass="border-gray-400 border-solid border-2 rounded-full mr-2"
          image={img3}
        />
      </motion.div>
      <div className="flex items-center mt-4 underline">
        <h2 className="font-semibold text-lg">Explore All Services ( +7 More )</h2>
        <FaArrowRight className="text-xl ml-2" />
      </div>
    </div>
  );
};

export default Product;
