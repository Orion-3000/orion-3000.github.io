import "../css/Blog.css";
import BlogCard from "./BlogCard";

const Blog = () => {
  var blogs = [
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
    {
      title: "Winter in Toronto",
      date: "2021-01-14T05:00:00.000Z",
      description:
        "From Cancelled Exchanges to Moving to Another City Last Minute",
      imgurl:
        "https://i.pinimg.com/564x/82/14/5a/82145a31801326d33c2957f680908a7d.jpg",
    },
  ];
  return (
    <div className="blog">
      {blogs.map((blog) => (
        <BlogCard
          title={blog.title}
          imgsrc={blog.imgurl}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Blog;
