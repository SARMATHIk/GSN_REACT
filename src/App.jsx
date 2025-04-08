import React, { useState, useEffect } from "react";


import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import Benefits from "./components/benefits";
// import { Features } from "./components/features";
import About from "./components/about";
import Services from "./components/services";
import Experience from "./components/experience"
import JoinGSN from "./components/JoinGSN";
// import { Gallery } from "./components/gallery";
import  Testimonials  from "./components/testimonials";
import Blog from "./components/blog";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
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
      {/* <Features data={landingPageData.Features} />  */}
       <About data={landingPageData.About} /> 
      <Services data={landingPageData.Services} />
      <Experience data={landingPageData.Experience} />
      <JoinGSN data={landingPageData.JoinGSN} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Blog data={landingPageData.Blog} />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
