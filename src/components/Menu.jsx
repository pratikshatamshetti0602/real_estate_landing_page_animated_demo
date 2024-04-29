import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import house from "../assets/img/house.png";
import MenuCard from "../layouts/MenuCard";
import Property from "../layouts/Property";
import { FaFlag } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Menu = () => {
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

  return (
    <div className="min-h-0 lg:min-h-screen flex flex-col justify-start px-5 bg-white">
      <div className="flex items-center justify-center w-full py-5">
        <FaFlag className="text-2xl md:text-3xl lg:text-4xl mr-2" />
        <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl">
          Popular Landmarks
        </h1>
      </div>
      <div className="w-full flex justify-center overflow-x-auto">
        <div className="flex flex-nowrap justify-start w-full max-w-screen-xl">
          <Property title="Red Fort" animate={isAnimationVisible} />
          <Property title="India Gate" animate={isAnimationVisible} />
          <Property title="TajMahal" animate={isAnimationVisible} />
          <Property title="India Gate" animate={isAnimationVisible} />
          <Property title="Lotus Temple" animate={isAnimationVisible} />
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-slate-100 p-3 mt-4 mx-auto">
        <motion.div
          ref={ref}
          className="bg-blue-200 pb-2 mt-2 mx-2"
          initial={{ opacity: 0, x: -50 }}
          animate={isAnimationVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl text-center font-bold">
            Zero Brokerage Properties
          </h2>
          <MenuCard
            img={house}
            paragraph="Upgrade to Premium and get access to Zero Brokerage Properties"
          />
        </motion.div>
        <br />
        <motion.div
          ref={ref}
          className="bg-blue-200 pb-2 mt-4 mx-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isAnimationVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-medium text-center font-semibold mb-0">
            Post Your Property
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
