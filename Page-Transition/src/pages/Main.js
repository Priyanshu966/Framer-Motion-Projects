import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {MdKeyboardDoubleArrowLeft} from "react-icons/md";
import {IoMdArrowDown} from "react-icons/io";
import {Link, Outlet} from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div>
        <div className="center">
          <Link className="center btn" to="page1">
            <MdKeyboardDoubleArrowLeft />
            Page 1
          </Link>
          <Link className="center btn" to="page2">
            Page 2 <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
        <h2 className="center">
          Page <IoMdArrowDown />
        </h2>
      </div>
      <Outlet />
    </div>
  );
};
export default Main;
