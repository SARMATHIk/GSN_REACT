import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/data.json";

const BlogPage = () => {
    const { slug } = useParams();
    const blog = blogs?.find((b) => b.slug === slug); // Add optional chaining
  
    if (!blog) {
      return <h2>Blog not found</h2>;
    }
  
    return (
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    );
  };

export default BlogPage;
