import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";


const Box10 = () => {
  const x = useMotionValue(0);

  const background = useTransform(
    x,
    [-200, 0, 200],
    ["#199f6d", "#115199", "#911199"]
  );

  const scale = useTransform(x, [-200, 0, 200], [1.5, 1, 1.5]);

  const linearGradient = useMotionTemplate`linear-gradient(90deg, rgba(25,124,159,1) 17%, rgba(9,43,121,1) 75%);`;


  return (
    <div
      className="box-container"
      style={{display: "grid", placeItems: "center"}}
    >
      <motion.div
        className="box"
        drag
        dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
        dragElastic={0.2}
        whileHover={{cursor: "grab"}}
        whileTap={{cursor: "grabbing"}}
        style={{x, background, scale}}
      ></motion.div>
    </div>
  );
};
export default Box10;
