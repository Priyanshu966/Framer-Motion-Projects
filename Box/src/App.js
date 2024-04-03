import { createElement } from "react";
import boxes from "./components";

function App() {
  return (
    <div className="main">
      {boxes.map((item) => {
        return createElement(item,null);
      })}
    </div>
  );
}

export default App;
