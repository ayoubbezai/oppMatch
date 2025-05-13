import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";
import { motion } from "framer-motion";
import { slideInPar, fadeIn } from "../../utils/Animation";
const Features = () => {
  return (
    <section className=" text-primary-300 w-full pb-40 px-4 text-center font-display flex flex-col items-center gap-10">
      <motion.h1 {...slideInPar(0.6)} className="text-4xl sm:text-5xl font-bold text-primary-300 leading-tight">
        Features that work for <br /> your future.
      </motion.h1>
      <motion.p  {...slideInPar(0.9)} className="text-primary-400 text-sm sm:text-base font-light max-w-md">
        Check out our amazing features and experience the power of Vaultflow for
        yourself.
      </motion.p>
      <div className="flex lg:flex-row flex-col gap-8">
        <FeatureCard />
        <FeatureCard2 />
      </div>

    </section>
  );
};

export default Features;