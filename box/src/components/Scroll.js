import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useEffect} from "react";

const Scroll = () => {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );

  return (
    <motion.div
      style={{
        scaleX: scaleX,
        transformOrigin: "left",
        background,
        width: "100%",
        height: "20px",
        position: "fixed",
        top: 0,
        zIndex: 50,
      }}
    ></motion.div>
  );
};
export default Scroll;
