import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const Box7 = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="box-container2">
      <motion.button layout layout className="btn" onClick={() => setIsVisible(!isVisible)}>
        hide
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{scale: 0, y: 0, rotate: "0deg"}}
            animate={{scale: 1, rotate: "180deg", y: [0, 150, -150, 150, 0]}}
            exit={{scale: 0, rotate: "0deg"}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="box"
            style={{margin: "0px"}}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Box7;
