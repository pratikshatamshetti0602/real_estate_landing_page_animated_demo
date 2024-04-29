import React from "react";
import { motion } from "framer-motion";

const UseApp = () => {
  return (
    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
      <motion.h1
        className="w-full text-xl text-center text-white mb-10 font-semibold bg-red-400 py-2 rounded-lg"
        whileHover={{ scale: 1.05, backgroundColor: "#ff6347" }} // Scale up and change background color on hover
        transition={{ duration: 0.2 }} // Duration of the hover transition
      >
        Use The App
      </motion.h1>
    </div>
  );
};

export default UseApp;
