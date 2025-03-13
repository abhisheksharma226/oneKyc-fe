import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animate";

const OneKYCNewsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        Subscribe to OneKYC Updates
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[300px] mx-auto text-gray-500 text-sm text-center"
      >
        Stay up-to-date with the latest features, improvements, and security updates
        from OneKYC. 
      </motion.p>
      {/* form here */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="!mt-10 flex justify-center space-x-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300 rounded-md w-full max-w-[350px]"
        />
        <button className="bg-black text-white px-6 py-4 uppercase rounded-md hover:bg-gray-800 transition duration-300">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default OneKYCNewsletter;
