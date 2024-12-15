import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center my-24 p-6 md:px-28"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create <span className="text-purple-600">AI</span> Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into a reality</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          className="w-80 xl:w-96 rounded-lg "
          alt="sampleimg"
        />
        <div>
          <h2 className="text-3xl font-medium  max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Introducing the AI-Powered Text to Image Generator, a tool that
            turns your written descriptions into stunning visuals.
          </p>
          <p className="text-gray-600">
            Using advanced AI technology, it creates unique images from detailed
            text prompts. Unlock limitless creative possibilities with just a
            few words!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
