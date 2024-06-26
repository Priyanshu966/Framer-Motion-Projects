import {motion} from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";
import Price from "./Price";
import RectBackground from "./RectBackground";

const RectCard = () => {
  const cardVariants = {
    initial: {scale: 1},
    hover: {
      scale: 1.1,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.5,
      }}
      className="mx-5 w-[240px] h-[300px] border-2 border-black rounded-lg bg-blue-600 px-3 py-4 grid relative z-10 overflow-hidden"
    >
      <Price />
      <PrimaryBtn />
      <RectBackground />
    </motion.div>
  );
};
export default RectCard;
