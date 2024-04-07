import { blogData } from "../../components/projectData";
import Image from "next/image";
const Blog = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row md:flex-wrap p-4">
      {blogData.map((item) => (
        <div
          key={item.id}
          className="mx-auto my-8 w-full self-center md:w-auto"
        >
          <div className="w-full max-w-500 mx-auto object-cover cursor-pointer overflow-hidden md:p-10">
            {" "}
            <Image
              className="w-full h-auto object-cover transition duration-400 transform hover:scale-125"
              src={item.image}
              alt={item.title}
            />
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
