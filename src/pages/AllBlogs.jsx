// import React from "react";
// import { Link } from "react-router-dom";
// import blogs from "../data/data.json";

// const AllBlogs = () => {
//   return (
//     <div>
//       <h1>All Blogs</h1>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>{blog.excerpt}</p>
//           <Link to={`/blog/${blog.slug}`}>Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllBlogs;
import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";


const AllBlogs = () => {
    const blogs = data.blogs || []; // Fallback to an empty array
  
    if (blogs.length === 0) {
      return <p>No blogs available.</p>;
    }
  
    return (
      <div className="container py-5">
        <h1 className="mb-4">All Blogs</h1>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card h-100">
                <img src={blog.image} className="card-img-top" alt={blog.title} />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.slug}`} className="btn btn-outline-dark">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default AllBlogs;
