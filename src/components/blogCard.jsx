// import React from 'react';

// const BlogCard = ({ post }) => {
//   return (
//     <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
//       <img src={"img/image.png"} alt={post.title} className="rounded-md h-40 w-full object-cover" />
//       <h3 className="text-xl font-semibold mt-3">{post.title}</h3>
//       <p className="text-sm text-gray-500">{post.date} • {post.author}</p>
//       <p className="mt-2 text-gray-600">{post.excerpt}</p>
//       <button className="text-blue-600 mt-3">Read More</button>
//     </div>
//   );
// };

// export default BlogCard;

import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  if (!blog) {
    return <div className="text-red-500">Blog data is unavailable</div>;
  }

  return (
    <div className="blog-card shadow-md rounded-xl p-4 bg-white">
      <img src={blog.image} alt={blog.title} className="rounded-xl w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold mt-3">
        <Link to={`/blog/${blog.slug}`} className="text-black hover:text-blue-500">
          {blog.title}
        </Link>
      </h3>
      <p className="text-gray-500 text-sm">By {blog.author} · {blog.date}</p>
      <p className="text-gray-700 my-2">{blog.excerpt}</p>
      <Link to={`/blog/${blog.slug}`} className="text-blue-600 underline">Read More</Link>
    </div>
  );
};

export default BlogCard;
