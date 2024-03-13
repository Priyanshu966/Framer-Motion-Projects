import {sliderImage} from "../assets/image";
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";

const Carousel = () => {
  const [dragWidth, setDragWidth] = useState(0);
  const innerCarousel = useRef();

  useEffect(() => {
    const current = innerCarousel.current;
    setDragWidth(current.scrollWidth - current.offsetWidth);
  }, []);
  return (
    <div className="carousel">
      <motion.div
        ref={innerCarousel}
        className="inner-carousel"
        drag="x"
        dragConstraints={{left: -dragWidth, right: 0}}
        whileTap={{cursor: "grabbing"}}
      >
        {sliderImage.map((item, index) => {
          return (
            <motion.div className="img-cont" key={index}>
              <img src={item} className="img" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Carousel;
