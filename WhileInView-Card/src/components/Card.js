import {motion} from "framer-motion";

const Card = ({image, label, des}) => {
  const cardVariant = {
    initial: {opacity: 0, x: -100},
    animate: {
      x: 0,
      opacity: 1,
      transition: {duration: 3, type: "spring", staggerChildren: 0.2},
    },
  };
  const imageVariant = {
    initial: {opacity: 0, y: 100, x: -100},
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: [0, 90, -90, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        rotate: {duration: 2},
      },
    },
  };
  const textVariant = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0, transition: {duration: 3, type: "spring"}},
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="initial"
      whileInView="animate"
      viewport={{amount: 0.8, once: true}}
      className="bg-cyan-500 px-6 pt-6 max-w-[18rem] rounded-xl shadow-xl shadow-black  relative"
    >
      <motion.div
        variants={imageVariant}
        className="text-[6rem] grid place-items-center bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl shadow-lg shadow-gray-700 z-10 relative"
      >
        {image}
      </motion.div>
      <div className="overflow-hidden pb-8">
        <motion.h2
          variants={textVariant}
          className="text-4xl font-bold capitalize text-white mt-6 mb-4 tracking-wide relative"
        >
          {label}
        </motion.h2>
        <motion.p
          variants={textVariant}
          className="text-white text-lg font-semibold tracking-wide relative"
        >
          {des}
        </motion.p>
      </div>
    </motion.div>
  );
};
export default Card;
