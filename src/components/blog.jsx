import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import blogImage from "./img/image.png"; // replace with your actual image path

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="blog-section py-5" id="blog">
      <div className="container">
        <h2 className="text-uppercase text-center mb-4 blog-title" data-aos="fade-up">
          Blog
        </h2>
        <p className="text-center blog-subtitle" data-aos="fade-up">
          Insights for Smarter Success
        </p>
        <p className="text-center blog-description mb-5" data-aos="fade-up">
          Stay ahead with GSN’s latest thoughts and stories:
        </p>

        <div className="row">
          <div className="col-md-3" data-aos="fade-right">
            <h5 className="category-title">Categories</h5>
            <ul className="list-group">
              <li className="list-group-item">Referral Strategies</li>
              <li className="list-group-item">Member Success Stories</li>
              <li className="list-group-item">Leadership & Mind-set</li>
              <li className="list-group-item">AI Revolution in Networking</li>
              <li className="list-group-item">GSN Culture & Values</li>
            </ul>
          </div>

          <div className="col-md-9" data-aos="fade-left">
            <div className="card blog-card">
              <img src="img/image.png" alt="Blog" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Networking’s Next Frontier—Are You Ready?</h4>
                <p className="text-muted">Posted: March 26, 2025</p>
                <p className="card-text">
                  Networking as we know it—stuffy meetings, forced handshakes, and scattered leads—is fading fast.
                  At Global Success Network (GSN), we’re rewriting the rules with a bold, forward-thinking approach.
                </p>
                <a href="#!" className="btn btn-outline-primary me-2">Join GSN Today</a>
                <a href="#!" className="btn btn-outline-secondary">Book a Discovery Call</a>
              </div>
            </div>

            <div className="mt-4" data-aos="fade-up">
              <h5>More Posts</h5>
              <ul className="list-unstyled">
                <li className="mb-2">- <strong>How GSN Unlocked My Next Big Win</strong> - A member shares their journey.</li>
                <li className="mb-2">- <strong>The Secret to Smarter Success</strong> - What’s the key to turning connections into cash?</li>
              </ul>
              <a href="#!" className="btn btn-primary mt-2">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
