import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/Cloversclassics.css";

var imageMap = {
  qdfitness:
    "https://images.unsplash.com/photo-1611077543693-a0194a16b034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80",
  newsinanothertongue:
    "https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  cloversclassics:
    "https://images.unsplash.com/photo-1529473814998-077b4fec6770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};
const CloversClassics = () => {
  const project_name = useParams().project_name;
  return (
    <div className="cloversclassics">
      <div
        className="heading"
        style={{ backgroundImage: `url(${imageMap[project_name]})` }}
      >
        <h1>{project_name}</h1>
        <h2>Visit Website</h2>
        <Link to="/projects">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ fontSize: "60px", color: "white", padding: "20px" }}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default CloversClassics;
