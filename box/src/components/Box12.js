import {motion, useMotionValue, animate} from "framer-motion";
import {useEffect, useRef} from "react";

const Box12 = () => {
  const rotate = useMotionValue(0);
  const controlsRef = useRef(null);

  useEffect(() => {
    const controls = animate(rotate, 360, {
      repeat: Infinity,
      duration: 3,
      ease: "linear",
    });
    controlsRef.current = controls;
  }, []);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        style={{rotate}}
        onMouseOver={() => controlsRef.current?.pause()}
        onMouseOut={() => controlsRef.current?.play()}
      ></motion.div>
    </div>
  );
};
export default Box12;
