import {motion, useAnimation} from "framer-motion";

const Box6 = () => {
  const control = useAnimation();

  return (
    <div className="box-container">
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => control.start({x: 600, transition: {duration: 1}})}
        >
          move right
        </button>
        <button
          className="btn"
          onClick={() => control.start({x: -20, transition: {duration: 1}})}
        >
          move left
        </button>
        <button
          className="btn"
          onClick={() =>
            control.start({borderRadius: "50%", transition: {duration: 1}})
          }
        >
          circle
        </button>
        <button
          className="btn"
          onClick={() =>
            control.start({borderRadius: "20%", transition: {duration: 1}})
          }
        >
          move square
        </button>
        <button className="btn" onClick={() => control.stop()}>
          stop
        </button>
      </div>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};
export default Box6;
