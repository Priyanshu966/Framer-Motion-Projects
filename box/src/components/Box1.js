import {motion} from "framer-motion";
import {useState} from "react";

const Box1 = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        onClick={() => setIsAnimate(!isAnimate)}
        initial={{opacity: 0.5}}
        animate={
          isAnimate
            ? {x: 800, rotate: 270, opacity: 1, transition: {duration: 0.5}}
            : {}
        }
      ></motion.div>
    </div>
  );
};
export default Box1;
