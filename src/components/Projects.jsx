import "../css/Projects.css";
import ProjectCard from "./ProjectCard";
import logo1 from "../img/1logo.png";
import logo2 from "../img/2logo.png";
import logo3 from "../img/3logo.png";
import logo4 from "../img/4logo.png";
import logoc from "../img/logoc.png";
import bookwallpaper from "../img/bookwallpaper.jpg";
import qdfitness from "../img/projectcard/qdfitness.jpg";
import instawriter from "../img/projectcard/instawriter.png";
import pludose from "../img/projectcard/pludose.jpg";

const Projects = ({ myRef }) => {
  return (
    <div className="projects">
      <ProjectCard
        imgsrc={bookwallpaper}
        logosrc={logoc}
        title="Clovers Classics"
        projectid="cloversclassics"
        date="February 2021"
        body="A blog"
        mode="dark"
        tags="web,react,django"
      />
      <ProjectCard
        imgsrc={pludose}
        logosrc={logo1}
        title="Pludose"
        date="June 2021"
        body="A blog"
        myref={myRef}
        mode="dark"
        tags="web,react,firebase"
      />{" "}
      <ProjectCard
        imgsrc={qdfitness}
        logosrc={logo2}
        projectid="qdfitness"
        title="QD Food Diary"
        date="September 2021"
        body="A blog"
        mode="dark"
        tags="mobile,flutter,firebase"
      />
      <ProjectCard
        imgsrc="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        logosrc={logo4}
        title="News in Another Tongue"
        projectid="newsinanothertongue"
        date="Work In Progress"
        body="A blog"
        mode="light"
        tags="web,datasci"
      />{" "}
      <ProjectCard
        imgsrc={instawriter}
        logosrc={logo3}
        title="InstaWriter"
        date="Work In Progress"
        body="A blog"
        tags="mobile,flutter"
      />{" "}
    </div>
  );
};

export default Projects;
