import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {RxTriangleRight} from "react-icons/rx";
import {RxTriangleLeft} from "react-icons/rx";
import {images} from "../assets/image";

const Carousel = () => {
  const [{index, direction}, setIsImage] = useState({index: 0, direction: 0});

  const handleNext = (dir) => {
    let newIndex = index + dir;
    if (newIndex >= images.length) {
      newIndex = 0;
    }

    setIsImage({index: newIndex, direction: dir});
  };
  const handlePrev = (dir) => {
    let newIndex = index + dir;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }

    setIsImage({index: newIndex, direction: dir});
  };

  // const variants = {
  //   initial: (direction) => {
  //     return {x: direction > 0 ? 1000 : -1000, opacity: 0};
  //   },
  //   animate: () => {
  //     return {x: 0, opacity: 1, zIndex: 1};
  //   },
  //   exit: (direction) => {
  //     return {x: direction > 0 ? -1000 : 1000, opacity: 0, zIndex: 0};
  //   },
  //   transition: {
  //     type: "spring",
  //     damping: 30,
  //     stiffness: 300,
  //     opacity: {duration: 0.2},
  //     x: {duration: 0.3},
  //   },
  // };

  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    animate: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="w-[500px] h-[300px] relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            x: {type: "spring", stiffness: 300, damping: 30},
            opacity: {duration: 0.2},
          }}
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
          onDragEnd={(e, {offset, velocity}) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              handleNext(1);
            } else if (swipe > swipeConfidenceThreshold) {
              handlePrev(-1);
            }
          }}
          className="w-full h-[100%] absolute left-0 top-0"
        />
      </AnimatePresence>

      <button
        onClick={() => handleNext(1)}
        className="rounded-full bg-white w-10 h-10 grid place-items-center absolute top-1/2 right-2 -translate-y-1/2 z-20"
      >
        <RxTriangleRight />
      </button>
      <button
        onClick={() => handlePrev(-1)}
        className="rounded-full bg-white w-10 h-10 grid place-items-center absolute top-1/2 left-2 -translate-y-1/2 z-20"
      >
        <RxTriangleLeft />
      </button>
    </div>
  );
};
export default Carousel;
