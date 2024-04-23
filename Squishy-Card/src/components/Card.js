import {motion} from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";
import Price from "./Price";
import Ellipse from "./Ellipse";
import {easeInOut} from "framer-motion/dom";

const Card = () => {
  const cardVariants = {
    initial: {scale: 1},
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="w-[240px] h-[300px] border-2 border-black rounded-lg bg-blue-600 px-3 py-4 grid relative z-10 overflow-hidden"
    >
      <Price />
      <PrimaryBtn />
      <Ellipse />
    </motion.div>
  );
};
export default Card;
