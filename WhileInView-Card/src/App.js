import Card from "./components/Card";
import {lists} from "./utils/lists";

function App() {
  return (
    <div className="w-screen bg-sky-600 grid place-items-center font-sans bg-gradient-to-r from-cyan-600 to-blue-600">
      {lists.map((list, index) => {
        return (
          <div
            key={index}
            className="min-h-screen w-[90%] mx-auto grid place-items-center"
          >
            <Card {...list} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
