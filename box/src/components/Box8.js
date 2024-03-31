import {motion, useAnimationControls} from "framer-motion";

const Box8 = () => {
  const controls = useAnimationControls();
  const btnVariant = {
    initial: {rotate: "0deg"},
    flip: {rotate: "360deg", transition: {duration: 0.5}},
  };
  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div className="box-container2">
      <button className="btn" onClick={() => handleClick()}>
        flip
      </button>
      <motion.div
        className="box"
        variants={btnVariant}
        initial="initial"
        animate={controls}
        style={{margin: "0px"}}
      ></motion.div>
    </div>
  );
};
export default Box8;
