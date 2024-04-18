import {motion} from "framer-motion";

const Box3 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag
        dragConstraints={{left: 0, right: 600, top: -40, bottom: 40}}
        whileHover={{cursor: "grab"}}
        whileTap={{cursor: "grabbing"}}
      ></motion.div>
    </div>
  );
};
export default Box3;
