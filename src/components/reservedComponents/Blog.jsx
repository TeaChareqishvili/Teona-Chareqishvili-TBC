const Blog = ({ imageUrl, blogTitle, more, blogDate }) => {
  return (
    <div className="blog-img">
      <img src={imageUrl} alt="blog-img" />
      <div className="blog-content">
        <h2> {blogTitle}</h2>
        <p>{more}</p>
        <span>{blogDate}</span>
      </div>
    </div>
  );
};

export { Blog };
