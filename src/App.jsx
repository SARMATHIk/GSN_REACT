import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import Benefits from "./components/benefits";
import About from "./components/about";
import Services from "./components/services";
import Experience from "./components/experience";
import JoinGSN from "./components/JoinGSN";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Chapters from "./components/Chapters";
import Contact from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Benefits data={landingPageData.Benefits} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Experience data={landingPageData.Experience} />
      <JoinGSN data={landingPageData.JoinGSN} />
      <Testimonials data={landingPageData.Testimonials} />
      <Blog data={landingPageData.blog} /> {/* Updated to use Blog component */}
      <Chapters data={landingPageData.Chapters} />
      <Contact data={landingPageData.Contact} />
      <ScrollToTop /> {/* Scroll to top button */}
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import Benefits from "./components/benefits";
// import About from "./components/about";
// import Services from "./components/services";
// import Experience from "./components/experience";
// import JoinGSN from "./components/JoinGSN";
// import Testimonials from "./components/testimonials";
// import BlogCard from './components/blogCard';
// import AllBlogs from "./pages/AllBlogs";
// import BlogPage from "./pages/BlogPage";
// import { Contact } from "./components/contact";

// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <Router>
//       <Navigation />
//       <Routes>
//   <Route
//     path="/"
//     element={
//       <>
//         <Header data={landingPageData.Header} />
//         <Benefits data={landingPageData.Benefits} />
//         <About data={landingPageData.About} />
//         <Services data={landingPageData.Services} />
//         <Experience data={landingPageData.Experience} />
//         <JoinGSN data={landingPageData.JoinGSN} />
//         <Testimonials data={landingPageData.Testimonials} />
//         {landingPageData.blogs?.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//         <Contact data={landingPageData.Contact} />
//       </>
//     }
//   />
//   <Route path="/blog" element={<AllBlogs />} />
//   <Route path="/blog/:slug" element={<BlogPage />} />
// </Routes>
//     </Router>
//   );
// };

// export default App;
