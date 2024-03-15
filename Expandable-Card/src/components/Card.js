import {motion} from "framer-motion";
import {useState} from "react";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{layout: {duration: 0.5, type: "spring"}}}
      className="card"
      style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0 0 0 0.5)"}}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h2 layout="position">Framer Motion 🚀</motion.h2>

      {isOpen && (
        <motion.div
          layout="position"
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 0.5}}}
        >
          <motion.p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};
export default Card;
