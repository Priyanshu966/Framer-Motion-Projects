import {createElement} from "react";
import boxes from "./components";

function App() {
  return (
    <div className="main">
      {boxes.map((item, index) => {
        return <div key={index}>{createElement(item, null)}</div>;
      })}
    </div>
  );
}

export default App;
