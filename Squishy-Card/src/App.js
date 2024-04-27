import Card from "./components/Card";
import RectCard from "./components/RectCard";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-950 flex justify-center items-center flex-col space-y-10 ">
      <Card />
      <RectCard />
    </div>
  );
}

export default App;
