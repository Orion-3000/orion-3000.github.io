import b4 from "../img/camper.jpg";

const About = ({ myRef }) => {
  return (
    <div className="about" ref={myRef}>
            <div style={{ display: "flex" }}>
            <img
        style={{
          maxWidth: "40%",
          objectFit: "cover",
          display: "block",
        }}
        src={b4}
        alt=""
      />
      <div
        className="projectsdescription"
        style={{ backgroundColor: "#c95e4e" }}
      >
        <h1>Exploring</h1>
        I'm a second year student studying data science and molecular genetics at
            the University of Toronto. I'm interested in data science, front end development, and research.
            
            </div>

      </div>
      <div
        className="projectsdescription"
        style={{ backgroundColor: "#802F23" }}
      >
        <h1>Learning</h1>
        I've worked as a swim instructor, piano teacher, programming instructor, audiobook narrator, and English tutor. I am always open to new opportunities to learn and grow.
        <br />
        <br />
        Life Sci Courses: Adaptation & Biodiversity (BIO120), Molecular & Cell Biology(BIO130), Physical Chemistry(CHM135), Organic Chemistry(CHM136)
        <br />
        <br />
        CS, Math, Stats: Intro to CS(CSC148), Mathematical Expression & Reasoning for CS(CSC165), Intro to Calculus(MAT137), Intro to Statistical Reasoning & Data Science(STA130)
        <br />
        <br />
        Other: Literary Traditions(ENG150)
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="projectsdescription"
          style={{ backgroundColor: "#D19086" }}
        >
          <h1>Creating</h1>
          In my spare time, I like to write, hike, practice kungfu, and learn new songs on the piano. I also like to record audiobooks and make videos sharing books and poems I like, teaching English in an engaging way. Finally, I love coming up with ideas for apps and websites, designing them, and trying to make them come to life :)
        </div>
        <img
          style={{
            objectFit: "cover",
            maxWidth: "50%",
          }}
          src="https://i.pinimg.com/564x/4d/3e/f9/4d3ef908f4fa0e88e67d6f90c341201a.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
