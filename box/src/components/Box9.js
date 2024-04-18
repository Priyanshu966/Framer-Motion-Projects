import {motion, useInView} from "framer-motion";
import {useRef, useEffect} from "react";

const Box9 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        ref={ref}
        style={{
          backgroundColor: isInView ? "black" : "red",
          transition: "5s background",
        }}
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1}}}
        viewport={{amount: 1}}
      ></motion.div>
    </div>
  );
};
export default Box9;
