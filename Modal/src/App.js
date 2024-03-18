import Modal from "./components/Modal";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimation, setIsAnimation] = useState("drop-in");

  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  const getVariant = () => {
    if (isAnimation == "drop-in") {
      return {
        initial: {y: -500},
        animate: {y: 0},
        exit: {y: 500},
        transition: {duration: 0.75, type: "spring"},
      };
    }
    if (isAnimation == "fade") {
      return {
        initial: {opacity: 0},
        animate: {opacity: 1},
        exit: {opacity: 0},
        transition: {duration: 0.5},
      };
    }
    if (isAnimation == "drag") {
      return {
        initial: {},
        animate: {},
        drag: true,
      };
    }

    if (isAnimation == "flip") {
      return {
        initial: {opacity: 0},
        animate: {opacity: 1, rotateX: 360},
        exit: {opacity: 0, rotateX: -360, transition: {duration: 1}},
        transition: {duration: 0.6},
      };
    }

    if (isAnimation == "zoom-in") {
      return {
        initial: {opacity: 0, scale: 0},
        animate: {opacity: 1, scale: 1},
        exit: {opacity: 0, scale: 0},
        transition: {duration: 0.5},
      };
    }

    return {
      initial: {},
      animate: {},
      exit: {},
    };
  };
  return (
    <div className="w-screen h-screen px-6 pt-24 font-sans text-white bg-gray-900">
      <form>
        <select
          value={isAnimation}
          onChange={(e) => setIsAnimation(e.target.value)}
          className="px-4 py-1 text-yellow-400 capitalize bg-gray-900 border-2 border-yellow-400 w-52"
        >
          <option value="drop-in">drop in</option>
          <option value="flip">flip</option>
          <option value="fade">fade</option>
          <option value="drag">drag</option>
          <option value="zoom-in">zoom in</option>
        </select>
      </form>
      <button
        onClick={() => open()}
        className="px-4 py-1 my-6 text-gray-900 capitalize bg-yellow-600 rounded-sm"
      >
        launch modal
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            handleClose={close}
            text={isAnimation}
            variant={getVariant()}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
