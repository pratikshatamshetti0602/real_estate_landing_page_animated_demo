import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import { useInView } from "react-intersection-observer";

const Review = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="min-h-400vh flex flex-col justify-center lg:px-32 px-2 mt-0  gap-2 bg-gradient-to-r from-[#812c2c] to-[#985050]"
    >
      <h1 className="font-semibold text-white text-xl mt-5 ml-2">
        App Exclusive Properties
      </h1>
      <p className="font-regular text-sm text-white mt-0 mb-4 ml-2">
        New Properties Available only on the App
      </p>

      <div className="flex flex-row absolute-right mb-4 mt-4 gap-5 mr-0" ref={ref}>
        <ReviewCard img={img1} title="Residential Plots" />
        <ReviewCard img={img2} title="Residential Plots" />
        {/* Add more ReviewCard components as needed */}
      </div>
    </motion.div>
  );
};

export default Review;
