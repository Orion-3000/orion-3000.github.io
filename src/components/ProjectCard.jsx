import { Link } from "react-router-dom";

const ProjectCard = ({
  logosrc,
  imgsrc,
  title,
  date,
  projectid,
  body,
  myref,
  mode = "light",
}) => {
  return (
    <div
      className="projectcard"
      style={{
        backgroundImage: `url(${imgsrc})`,
        color: mode === "dark" ? "white" : "black",
      }}
      ref={myref}
    >
      <h1 className="projectcardtitle">{title}</h1>
      <h2 className="projectcardsubtitle">{date}</h2>
      <Link to={`/projects/${projectid}`}>
        <div
          className="projectcardlogo"
          style={{ backgroundImage: `url(${logosrc})` }}
        ></div>
      </Link>
    </div>
  );
};

export default ProjectCard;
