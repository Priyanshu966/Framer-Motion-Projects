import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Main from "./pages/Main";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter="">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Main />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
