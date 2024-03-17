import {motion} from "framer-motion";
import Backdrop from "./Backdrop";

const Modal = ({handleClose, text, variant}) => {
  const modalVariant = variant;
  return (
    <Backdrop>
      <motion.div
        variants={modalVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-yellow-600 rounded-md px-5 py-4 grid place-items-center gap-2 max-w-lg"
      >
        <h2 className="text-center text-gray-950 capitalize text-lg font-semibold">
          {text}
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure.
        </p>
        <button
          onClick={() => handleClose()}
          className="mx-auto bg-gray-950 rounded-sm px-10 py-1 mt-2 hover:bg-gray-800"
        >
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
