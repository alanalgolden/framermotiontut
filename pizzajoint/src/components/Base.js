import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//This is a "Variant" of a motion div, used in the motion.div below
const containerVariants = {
  hidden: {
    //this could be init, or any other name
    opacity: 0,
    x: "100vw", //
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      //since we are only animating the visible version, this is embedded inside visible and now this does not need to be applied to the div itself
      type: "spring",
      delay: 0.5,
    },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const buttonVariants = {
  hover: {
    //this doesn't need to be hover, just a lookup string name
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden" //uses the hidden tag from containerVariants
      animate="visible" //uses the visible tag from containerVariants
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextVariants}
          //initial="hidden" -> As this is a child of <motion.div> which already has initial + hidden, this is not needed as it pulls down the same string
          //animate="visible"
          className="next"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
