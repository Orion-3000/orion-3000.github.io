import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import sunglass from "../img/sunglass.jpg";
import float1 from "../img/1.png";
import float2 from "../img/2.png";
import float3 from "../img/3.png";
import float4 from "../img/4.png";
import float5 from "../img/5.png";
import float6 from "../img/6.png";
import float7 from "../img/7.png";
import float8 from "../img/8.png";
import Navbar from "./Navbar";

const Landing = ({ executeScroll }) => {
  const titleRef = useRef();
  const [view, setView] = useState("");
  const handlePullNav = (e) => {
    executeScroll();
  };

  //shift view, change colours
  const handleSliceClick = (targetid) => {
    var landingpage = document.getElementById("landingpage");
    var greeting = document.getElementById("greeting");
    var wheel = document.getElementById("wheel");
    var spinarm = document.getElementById("spinarm");
    var pullnav = document.getElementById("pulltonav");
    var sub = document.querySelector("#opensubtitle");
    var q1ti = document.querySelector('#q1ti');
    var q1bi = document.querySelector('#q1bi');
    var q2ti = document.querySelector('#q2ti');
    var q2bi = document.querySelector('#q2bi');
    var q3ti = document.querySelector('#q3ti');
    var q3bi = document.querySelector('#q3bi');
    var q4ti = document.querySelector('#q4ti');
    var q4bi = document.querySelector('#q4bi');

    sub.classList = "linearwipe";
    if (targetid === "q2") {
      wheel.style.transform = "rotate(315deg)";
      landingpage.style.backgroundColor = "var(--color2l)";
      pullnav.style.backgroundColor = "var(--color2l)";
      spinarm.style.backgroundColor = "var(--color2)";
      q1bi.style.display = "none";
      q3bi.style.display = "none";
      q4bi.style.display = "none";
      q1ti.style.display = "none";
      q3ti.style.display = "none";
      q4ti.style.display = "none";
      setTimeout(() => {
        q2ti.style.display = "block";
      }, 200);
      setTimeout(() => {
        q2bi.style.display = "block";
      }, 500);
      setView("PROJECTS");
    } else if (targetid === "q3") {
      wheel.style.transform = "rotate(135deg)";
      landingpage.style.backgroundColor = "var(--color3l)";
      pullnav.style.backgroundColor = "var(--color3l)";
      spinarm.style.backgroundColor = "var(--color3)";
      q2bi.style.display = "none";
      q1bi.style.display = "none";
      q4bi.style.display = "none";
      q2ti.style.display = "none";
      q1ti.style.display = "none";
      q4ti.style.display = "none";
      setTimeout(() => {
        q3ti.style.display = "block";
      }, 200);
      setTimeout(() => {
        q3bi.style.display = "block";
      }, 500);
      setView("ABOUT");
    } else if (targetid === "q4") {
      wheel.style.transform = "rotate(225deg)";
      landingpage.style.backgroundColor = "var(--color4l)";
      pullnav.style.backgroundColor = "var(--color4l)";
      spinarm.style.backgroundColor = "var(--color4)";
      q2bi.style.display = "none";
      q3bi.style.display = "none";
      q1bi.style.display = "none";
      q2ti.style.display = "none";
      q3ti.style.display = "none";
      q1ti.style.display = "none";
      setTimeout(() => {
        q4ti.style.display = "block";
      }, 200);
      setTimeout(() => {
        q4bi.style.display = "block";
      }, 500);
      setView("BLOG");
    } else {
      // landingpage.style.backgroundImage = `url(${b1})`;
      wheel.style.transform = "rotate(45deg)";
      landingpage.style.backgroundColor = "var(--color1l)";
      pullnav.style.backgroundColor = "var(--color1l)";
      spinarm.style.backgroundColor = "var(--color1)";
      q2bi.style.display = "none";
      q3bi.style.display = "none";
      q4bi.style.display = "none";
      q2ti.style.display = "none";
      q3ti.style.display = "none";
      q4ti.style.display = "none";
      // setTimeout(() => {
      //   q1ti.style.display = "block";
      // }, 200);
      setTimeout(() => {
        q1bi.style.display = "block";
      }, 500);
      setView("CURRENT");
    }
    wheel.classList = "selected";
    spinarm.classList = "selected";
    greeting.classList = "selected";
    pullnav.style.display = "flex";
  };

  return (
    <div className="landing">
      <Navbar onClick={(myview) => handleSliceClick(myview)} />
      <div id="landingpage" styles={{ backgroundImage: `url(${sunglass})` }}>
        <div className="openimgtop">
          <img id="q1ti" src={float5} alt="" />
          <img id="q2ti" src={float1} alt="" />
          <img id="q3ti" src={float7} alt="" />
          <img id="q4ti" src={float4} alt="" />
        </div>
        <div className="openimgbtm">
          <img id="q1bi" src={float6} alt="" />
          <img id="q2bi" src={float2} alt="" />
          <img id="q3bi" src={float8} alt="" />
          <img id="q4bi" src={float3} alt="" />
        </div>

        <div id="greeting">
          <h1>Hi! I'm Huayin.</h1>
          <h2
            id="opensubtitle"
            onTransitionEnd={(e) => (e.target.classList = "")}
          >
            Welcome to my <i>{view.toLowerCase()}</i>
          </h2>
        </div>
        <div id="spinarm"></div>
        <div id="wheel" style={{ transform: "rotate(45deg)" }}>
          <Link to="/current">
            <span
              id="q1"
              className="quarter selectedslice"
              onClick={(e) => handleSliceClick(e.target.id)}
            ></span>
          </Link>
          <Link to="/projects">
            <span
              id="q2"
              className="quarter"
              onClick={(e) => handleSliceClick(e.target.id)}
            ></span>
          </Link>
          <Link to="/about">
            <span
              id="q3"
              className="quarter"
              onClick={(e) => handleSliceClick(e.target.id)}
            ></span>
          </Link>
          <Link to="/blog">
            <span
              id="q4"
              className="quarter"
              onClick={(e) => handleSliceClick(e.target.id)}
            ></span>
          </Link>
        </div>
      </div>
      <div id="pulltonav">
        <hr />
        <hr />
      </div>
      <div ref={titleRef}></div>
    </div>
  );
};

export default Landing;
