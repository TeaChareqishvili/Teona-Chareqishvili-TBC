import { blogData } from "../../components/projectData";
import Image from "next/image";
const Blog = () => {
  return (
    <div className="blog-wrapper">
      {blogData.map((item) => (
        <div key={item.id} className="blog-item">
          <div className="blog-image">
            {" "}
            <Image src={item.image} alt={item.title} />
          </div>
          <div className="blog-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span>{item.date}</span>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
