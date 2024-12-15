import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const GenerateBtn = () => {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(AppContext);

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="pb-16 text-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl md:text-3xl lg:text-4xl mt-4 text-neutral-800 py-6 md:py-16 font-semibold">
        See the Magic.<span className="text-purple-600">Try Now</span>
      </h1>
      <button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-2 mx-12 px-12 py-2.5 inline-flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-300 mb-3"
      >
        Generate Images
        <img src={assets.star_group} alt="starimg" className="h-6" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
