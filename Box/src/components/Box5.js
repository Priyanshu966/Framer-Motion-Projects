import {motion} from "framer-motion";

const Box5 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.5, 1.5, 1.3, 1],
          borderRadius: ["20%", "30%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
          transition: {duration: 0.8},
        }}
      ></motion.div>
    </div>
  );
};
export default Box5;
