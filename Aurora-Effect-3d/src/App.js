import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import {Canvas,useFrame} from "@react-three/fiber";
import {Points,PointMaterial} from "@react-three/drei";
import {IoArrowForwardOutline} from "react-icons/io5";
import {useEffect,useState,useRef} from "react";
import * as random from "maath/random/dist/maath-random.esm";

function App() {
  const colors = ["#00d4ff", "#e81cff", "#5e2404", "#033614"];
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% ,#020024 50%,${color})`;
  const border = useMotionTemplate`solid 1px ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  console.log(backgroundImage);
  return (
    <motion.div
      style={{backgroundImage}}
      className="w-screen min-h-screen bg-gray-950 grid place-content-center text-white relative px-6 font-sans"
    >
      <div className="grid place-items-center max-w-[550px] gap-y-2 relative bottom-6 z-20">
        <button className="capitalize bg-gray-800 w-fit mx-auto px-3 py-1.5 rounded-full text-[10px]">
          beta now live !
        </button>
        <h1 className="text-6xl text-center font-medium">
          Build whatever u want
        </h1>
        <p className="text-center my-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <motion.button
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          transition={{type: "spring"}}
          style={{border, boxShadow}}
          className="flex justify-center items-center w-fit mx-auto rounded-full px-4 py-1 text-[12px] font-semibold group"
        >
          Start free trial{" "}
          <IoArrowForwardOutline className="ml-1 group-hover:-rotate-45 group-active:rotate-0 transition-all ease-linear duration-300" />
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas camera={{position: [0, 0, 1]}}>
          <Stars />
        </Canvas>
      </div>
    </motion.div>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), {radius: 1.5})
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default App;
