import {motion} from "framer-motion";

const Template = ({msg}) => {
  return (
    <motion.div
      className="temp-cont"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 1, ease: "linear"}}}
      transition={{duration: 1}}
    >
      {msg}
    </motion.div>
  );
};
export default Template;
