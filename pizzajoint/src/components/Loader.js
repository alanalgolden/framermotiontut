import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      //you can set different transitions for different props
      x: { yoyo: Infinity, duration: 0.5 }, //transition properties for x
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" }, //transition properties for x
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      />
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;
