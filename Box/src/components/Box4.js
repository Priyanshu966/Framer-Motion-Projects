import {motion} from "framer-motion";

const Box4 = () => {
  const boxVariant = {
    hidden: {x: -100, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 0.4, when: "beforeChildren", staggerChildren: 0.2},
    },
  };

  const listVariant = {
    hidden: {x: -10, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.ul
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map(() => {
          return (
            <motion.li className="list-item" variants={listVariant}></motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};
export default Box4;
