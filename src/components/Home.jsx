import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../layouts/Button";
import Shapes from "../layouts/Shapes";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textContent = "Are You Property Owner? then post it";
    const delay = 100; // Adjust the delay between each character

    const interval = setInterval(() => {
      if (index < textContent.length) {
        setText((prevText) => prevText + textContent[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Clear the interval once text is fully typed
      }
    }, delay);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="min-h-screen flex justify-center items-center px-10 bg-[#ff8d8d]">
      <div className="w-full max-w-screen-lg space-y-8" style={{ maxWidth: "100%" }}>
        <motion.h1
          className="font-semibold text-white text-4xl lg:text-3xl text-center leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          MILESTONO.COM
        </motion.h1>
        <motion.p
          className="text-center font-medium text-white text-1xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        >
          Properties to Buy in your City
        </motion.p>
        <motion.div
          className="flex justify-center py-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        >
          <Button title="Real-Estate" />
          <Button title="Services" />
        </motion.div>
        {/* Boxes with horizontal scrolling */}
        
        <div className="ml-2 flex justify-center gap-2 ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
          >
            <Shapes title="Buy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
          >
            <Shapes title="Rent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeOut" }}
          >
            <Shapes title="Commercial" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, duration: 0.5, ease: "easeOut" }}
          >
            <Shapes title="Plots" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8, duration: 0.5, ease: "easeOut" }}
          >
            <Shapes title="Pg" />
          </motion.div>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Here.."
              className="border border-gray-300 rounded-full py-2 px-6 md:px-16 focus:outline-none w-full"
            />
            <motion.button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5, ease: "easeOut" }}
            >
              <AiOutlineSearch />
            </motion.button>
          </div>
        </div>
        <motion.div
          className="w-full flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-sm text-center text-white font-medium bg-[rgba(108,108,108,0.5)] p-3 rounded">
            {text}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
