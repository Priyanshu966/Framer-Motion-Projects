import {motion} from "framer-motion";

const AnimatedPage = ({children}) => {
  const pageVariant = {
    initial: {opacity: 0, x: -100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 100},
  };
  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: 1}}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedPage;