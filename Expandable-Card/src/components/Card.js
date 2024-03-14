import {motion} from "framer-motion";
import { useState } from "react";

const Card = () => {

  return (
    <motion.div className="card" variants={cardVariant}>
      <h2>Framer Motion 🚀</h2>
      <motion.div variants={textVariant} initial="shrink" animate="expand">
        <motion.p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
export default Card;
