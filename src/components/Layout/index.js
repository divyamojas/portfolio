import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-doctype"> &lt;!doctype portfolio&gt;</span>
          <br />
          {/* <br />
          <span className="top-tag-html"> &lt;html&gt;</span> */}
          <br />
          &lt;body&gt;
        </span>
        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          {/* <span className="bottom-tag-html"> &lt;/html&gt;</span>
          <br /> */}
          <br />
          <span className="bottom-tag-html"> Thanks for visiting my page!</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
