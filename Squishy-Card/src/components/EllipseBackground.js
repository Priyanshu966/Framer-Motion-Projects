import {motion} from "framer-motion";

const EllipseBackground = () => {

  return (
    <motion.svg
      width="210"
      height="241"
      viewBox="0 0 210 241"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{
        hover: {scale: 1.4},
      }}
      transition={{duration: 1, ease: "backInOut"}}
      className="z-0 absolute w-full inset-0 overflow-visible"
    >
      <motion.path
        variants={{hover: {scaleY: 0.54, scaleX: 0.75, y: -25}}}
        transition={{duration: 1, ease: "backInOut"}}
        d="M203 88C203 129.421 159.124 163 105 163C50.8761 163 7 129.421 7 88C7 46.5786 50.8761 13 105 13C159.124 13 203 46.5786 203 88Z"
        fill="black"
      />
      <motion.path
        variants={{hover: {scaleY: 2.2, y: -20}}}
        transition={{duration: 1, ease: "backInOut"}}
        d="M183 202.5C183 219.897 148.078 234 105 234C61.9218 234 27 219.897 27 202.5C27 185.103 61.9218 171 105 171C148.078 171 183 185.103 183 202.5Z"
        fill="black"
      />
    </motion.svg>
  );
};
export default EllipseBackground;
