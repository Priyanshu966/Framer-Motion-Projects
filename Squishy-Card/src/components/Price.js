import {motion} from "framer-motion";

const Price = () => {
  const textVariants = {
    initial: {scale: 0.85},
    hover: {scale: 1},
  };

  return (
    <motion.div className="px-4 py-2 z-10 relative grid">
      <span className="text-white text-[10px] font-semibold capitalize rounded-full bg-black/50 px-3.5 py-[3px] w-fit">
        individual
      </span>
      <motion.h2
        layout
        variants={textVariants}
        transition={{duration: 1, ease: "backInOut"}}
        className="text-white font-bold text-[30px] leading-snug origin-top-left"
      >
        $299/
        <br />
        Month
      </motion.h2>
      <p className="text-white text-[16px]">
        For individuals who want to understand why their landing pages arent't
        working
      </p>
    </motion.div>
  );
};
export default Price;
