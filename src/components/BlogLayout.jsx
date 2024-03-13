import { Blog } from "./Blog";
import blogImg from "../assets/image/blog1.webp";
import blogImg2 from "../assets/image/blog2.webp";
import blogImg3 from "../assets/image/blog3.webp";
import blogImg4 from "../assets/image/blog4.webp";

const BlogLayout = () => {
  return (
    <section className="blog-section">
      <div className="blog-wrapper">
        <Blog
          blogTitle="WHAT'S INCLUDED IN CONGRESS' $13 TRILLION SPENDING BILL"
          blogDate="25 jan, 2024"
          more="View More"
          imageUrl={blogImg}
        />
        <Blog
          blogTitle="Five places under the falls and above the clouds"
          blogDate="29 jan, 2024"
          more="View More"
          imageUrl={blogImg2}
        />
        <Blog
          blogTitle="hFive places under the falls and above the clouds"
          blogDate="04 feb, 2024"
          more="View More"
          imageUrl={blogImg3}
        />
        <Blog
          blogTitle="Five places under the falls and above the clouds"
          blogDate="07 feb, 2024"
          more="View More"
          imageUrl={blogImg4}
        />
      </div>
    </section>
  );
};

export { BlogLayout };
