import React from "react";
import { motion } from "framer-motion";

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
};

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  );
};

export default Loader;
