import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = ({onClick}) => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <a href="#a">Huayin Luo</a>
        </li>

        <li>
          <Link to="/current" onClick={()=>onClick("q1")}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={()=>onClick("q2")}>Projects</Link>
        </li>
        <li>
          <Link to="/blog" onClick={()=>onClick("q4")}>Blog</Link>
        </li>
        <li>
          <Link to="/about" onClick={()=>onClick("q3")}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
