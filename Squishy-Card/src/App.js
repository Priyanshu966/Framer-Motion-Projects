import EllipseCard from "./components/EllipseCard";
import RectCard from "./components/RectCard";
import DiamondCard from "./components/DiamondCard";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-950 flex justify-center items-center flex-col space-y-10 ">
      <EllipseCard />
      <RectCard />
      <DiamondCard />
    </div>
  );
}

export default App;
