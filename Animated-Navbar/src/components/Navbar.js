import {useState} from "react";
import {motion} from "framer-motion";

const tabs = [
  {id: "home", label: "home"},
  {id: "blog", label: "blog"},
  {id: "services", label: "services"},
  {id: "featured", label: "featured"},
];

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  return (
    <nav>
      <div className="max-w-[600px] mx-auto flex justify-evenly py-4 px-2">
        {tabs.map((item) => {
          const {id, label} = item;
          return (
            <button
              key={id}
              onClick={() => setIsActive(id)}
              className={`${
                isActive == id ? "" : "hover:text-white/50"
              } py-1 px-4 rounded-full relative text-white capitalize ease-linear duration-150`}
            >
              {isActive === id && (
                <motion.div
                  layoutId="active"
                  transition={{duration: 1, type: "spring"}}
                  style={{borderRadius: "9999px"}}
                  className={`bg-white absolute top-0 left-0  w-[100%] h-[100%]`}
                ></motion.div>
              )}
              <span className="relative z-10 mix-blend-exclusion">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
