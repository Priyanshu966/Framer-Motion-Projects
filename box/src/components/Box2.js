import {motion} from "framer-motion";

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileTap={{scale: 0.8}}
        whileHover={{scale: 1.2}}
      ></motion.div>
    </div>
  );
};
export default Box2;
