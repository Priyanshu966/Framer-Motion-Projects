import {motion} from "framer-motion";

const Rect = () => {
  return (
    <motion.svg
      width="240"
      height="300"
      viewBox="0 0 240 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
    >
      <motion.rect
        x="14"
        y="14"
        width="116"
        height="108"
        rx="15"
        fill="black"
        variants={{
          initial: {y: 0, x: 0},
          hover: {
            scaleX: 2,
            scaleY: 1.1,
            translateY: 164,
            translateX: 0,
          },
        }}
        transition={{duration: 1.3, ease: "backInOut", type: "spring"}}
        className="origin-left"
      />
      <motion.rect
        x="114"
        y="180"
        width="110"
        height="106"
        rx="15"
        fill="black"
        variants={{
          initial: {translateY: 0, translateX: 0},
          hover: {
            scaleX: 2,
            scaleY: 1.1,
            translateY: -170,
            translateX: 0,
          },
        }}
        transition={{duration: 1.3, ease: "easeInOut", type: "spring"}}
        className="origin-right"
      />
    </motion.svg>
  );
};
export default Rect;
