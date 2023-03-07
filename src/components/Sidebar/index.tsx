import "./index.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <i className="fa fa-fw fa-home" /> Dashboard
        </Link>
        <Link to="/team">
          <i className="fa fa-fw fa-wrench" /> Team Manager
        </Link>
        <Link to="/roles">
          <i className="fa fa-fw fa-user" /> Roles & Permissions
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
