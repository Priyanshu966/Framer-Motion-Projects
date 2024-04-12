import {motion} from "framer-motion";

const Card = ({image, label, des}) => {
  const cardVariant = {
    initial: {opacity: 0, x: -100},
    animate: {
      x: 0,
      opacity: 1,
      transition: {duration: 3, type: "spring"},
    },
  };
  const imageVariant = {
    initial: {opacity: 0, x: -100,rotate:0},
    animate: {
      opacity: 1,
      x: 0,
      rotate:[90,-90,90,0],
      transition: {duration: 3, type: "spring", bounce: 0.4},
    },
  };
  const textVariant = {
    initial: {opacity: 0, y: 200},
    animate: {opacity: 1, y: 0, transition: {duration: 3, type: "spring"}},
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="initial"
      whileInView="animate"
      viewport={{once: true, amount: 0.8}}
      transition={{staggerChildren: 0.5}}
      className="bg-cyan-500 px-6 py-6 pb-8 max-w-[18rem] rounded-xl shadow-xl shadow-black overflow-hidden"
    >
      <motion.div
        variants={imageVariant}
        className="text-[6rem] grid place-items-center bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl shadow-lg shadow-gray-700"
      >
        {image}
      </motion.div>
      <motion.div variants={textVariant}>
        <h2 className="text-4xl font-bold capitalize text-white mt-6 mb-4 tracking-wide">
          {label}
        </h2>
        <p className="text-white text-lg font-semibold tracking-wide">{des}</p>
      </motion.div>
    </motion.div>
  );
};
export default Card;
