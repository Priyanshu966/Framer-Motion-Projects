import {motion} from "framer-motion";

const DiamondBackground = () => {
  return (
    <motion.svg
      width="240"
      height="300"
      viewBox="0 0 240 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-0 z-0"
      variants={{hover: {scale: 1.1, y: -20}}}
    >
      <g clip-path="url(#clip0_2_5)">
        <motion.rect
          x="17"
          y="102.53"
          width="145"
          height="145"
          rx="21"
          transform="rotate(-45 17 102.53)"
          fill="black"
          variants={{hover: {scale: 1.15, translateY: -20}}}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.4,
            ease: "backInOut",
          }}
        />
        <motion.rect
          x="17"
          y="190.53"
          width="145"
          height="145"
          rx="18"
          transform="rotate(-45 17 190.53)"
          fill="black"
          variants={{hover: {scale: 1.15, translateY: -20}}}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.4,
            ease: "backInOut",
          }}
        />
        <motion.rect
          x="17"
          y="149.53"
          width="145"
          height="145"
          rx="14"
          transform="rotate(-45 17 149.53)"
          fill="black"
          variants={{hover: {scale: 1.15,}}}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.4,
            ease: "backInOut",
          }}
        />
      </g>
    </motion.svg>
  );
};
export default DiamondBackground;
