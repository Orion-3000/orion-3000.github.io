import "../css/Blog.css";
const BlogCard = ({
  imgsrc,
  title,
  date,
  description,
  color,
  mode = "light",
}) => {
  return (
    <div
      className="blogcard"
      style={{
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <div className="blogcardinner">
        <div className="blogcardfront">
          <h1 className="blogcardtitle">{title}</h1>
          <h2 className="blogcardsubtitle">{description}</h2>
        </div>
        <div className="blogcardback" style={{
          objectFit: "cover",
          backgroundImage: "https://images.unsplash.com/photo-1652110770901-e4a4f279951c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" }} ></div>
      </div>
    </div>
  );
};

export default BlogCard;
