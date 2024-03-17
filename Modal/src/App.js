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
        transition: {duration: 5,delay:5 },
      };
    }
  };
  return (
    <div className="h-screen w-screen bg-gray-900 text-white pt-24 font-sans">
      <form>
        <select
          value={isAnimation}
          onChange={(e) => setIsAnimation(e.target.value)}
          className="bg-gray-900 border-yellow-400 border-2 text-yellow-400 capitalize w-52 py-1 px-4"
        >
          <option value="drop-in">drop in</option>
          <option value="flip">flip</option>
          <option value="fade">fade</option>
        </select>
      </form>
      <button
        onClick={() => open()}
        className="bg-yellow-600 rounded-sm text-gray-900 px-4 py-1 my-6 capitalize"
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
