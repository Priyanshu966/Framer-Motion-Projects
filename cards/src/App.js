import Card from "./components/Card";
import {motion} from "framer-motion";

function App() {
  const data = [
    {id: 1, title: "great times", info: "awaits you"},
    {id: 2, title: "great times", info: "awaits you"},
    {id: 3, title: "great times", info: "awaits you"},
    {id: 4, title: "great times", info: "awaits you"},
    {id: 5, title: "great times", info: "awaits you"},
    {id: 6, title: "great times", info: "awaits you"},
  ];
  return (
    <div className="card-cont">
      {data.map((item, i) => {
        return (
          <motion.div
            key={item.id}
            initial={{opacity: 0, x: -20, y: -20}}
            animate={{opacity: 1, x: 0, y: 0, transition: {delay: i * 0.5}}}
          >
            <Card {...item} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default App;
