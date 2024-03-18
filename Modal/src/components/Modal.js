import {motion} from "framer-motion";
import Backdrop from "./Backdrop";
import {useRef} from "react";

const Modal = ({handleClose, text, variant}) => {
  const dragLimit = useRef(null);
  console.log(dragLimit);
  return (
    <Backdrop passRef={dragLimit}>
      <motion.div
        layout="position"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        drag={variant.drag}
        dragConstraints={dragLimit}
        transition={variant.transition}
        className="grid max-w-lg gap-2 px-5 py-4 bg-yellow-600 rounded-md place-items-center"
      >
        <h2
          layout="position"
          className="text-lg font-semibold text-center capitalize text-gray-950"
        >
          {text}
        </h2>
        <p layout="position" className="text-center w-fit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure.
        </p>
        <button
          layout="position"
          onClick={() => handleClose()}
          className="px-10 py-1 mx-auto mt-2 rounded-sm bg-gray-950 hover:bg-gray-800"
        >
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
