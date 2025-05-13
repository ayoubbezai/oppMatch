import React from "react";
import background from "../../assets/background.jpg";
import { motion } from "framer-motion";
import { slideInPar, fadeIn } from "../../utils/Animation";
const HeroSection = () => {
  return (
    <div
      className="w-full bg-cover bg-top flex items-center justify-center px-4 pt-25 "
      style={{ backgroundImage: `url(${background})` }}
      id = "home"
    >
      <div className="flex flex-col text-center items-center justify-center lg:gap-6 gap-6 mb-10">
        <motion.h3
          {...fadeIn}
          className="text-primary-300 lg:text-base text-[20px] font-light px-2 lg:px-16 backdrop-blur-base py-2 rounded-3xl border border-primary-600 font-Montserrat"
        >
          Get matched before everyone else
        </motion.h3>
        <motion.h1
          {...slideInPar(0.6)}
          className="lg:text-6xl md:text-xl text-4xl font-bold leading-tight text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0.3))",
          }}
        >
          Find Internships & <br /> Grants That Actually Fit <br /> You —
          Instantly.
        </motion.h1>
        <motion.h3 {...slideInPar(0.9)} className="text-primary-400  text-[15px] font-normal px-4 py-2 rounded-3xl">
          Powered by AI, we match your skills and goals to real
          <br /> opportunities worldwide — no more endless
        </motion.h3>
      </div>
    </div>
  );
};

export default HeroSection;