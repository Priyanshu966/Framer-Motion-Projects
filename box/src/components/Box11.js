import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Template from "./Template";

const Box11 = () => {
  const x = useMotionValue(0);
  const color1 = useTransform(x, [-200, 200], ["#199f6d", "#115199"]);
  const color2 = useTransform(x, [-200, 200], ["#ee7910", "#911199"]);

  const backgroundImage = useMotionTemplate`linear-gradient(to right , ${color1}, ${color2})`;

  return (
    <div
      className="box-container"
      style={{display: "grid", placeItems: "center"}}
    >
      <motion.div
        className="box"
        drag
        dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
        whileHover={{cursor: "grab"}}
        whileTap={{cursor: "grabbing"}}
        style={{x, backgroundImage}}
      >
        <Template msg="drag me left and right" />
      </motion.div>
    </div>
  );
};
export default Box11;
