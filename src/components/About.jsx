import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaDownload, FaStar } from "react-icons/fa";

const About = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 120
        }
      });
      setTimeout(() => {
        controls.start({
          x: "100%",
          opacity: 0,
          transition: {
            duration: 0
          }
        });
      }, 1000); // Adjust the duration of the animation loop as needed
    }, 2000); // Adjust the interval between each animation loop as needed

    return () => clearInterval(interval);
  }, []); // Run this effect only once when the component mounts

  return (
    <div ref={containerRef} className="max-w-screen w-full absolute min-h-60vh flex items-center justify-center lg:px-10 px-5 bg-white">
      <h1 className="font-semibold text-left text-sm lg:mt-14 mt-6 mb-4 lg:mb-8">
        Use Milestono App
        <div className="flex items-center">
          <p className="ml-1 text-center flex-row text-xs text-gray-500 mb-0 lg:mb-0">1Cr+ Downloads</p>
          <FaDownload className="ml-2" />
        </div>
        <div className="flex items-center">
          <p className="ml-1 text-center flex-row text-xs text-gray-500 mb-0 lg:mb-0">4.1+ rating</p>
          <FaStar className="text-yellow-500 ml-2" />
        </div>
      </h1>
      <br/>

      <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-5">
        <div className="w-full lg:w-3/4 p-1 ml-6 space-y-2">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={controls}
            className="bg-red-300 border border-gray rounded-md p-3 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Use The App
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
