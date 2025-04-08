// import React from "react";

// export const About = (props) => {
//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-12 col-md-6">
//             {" "}
//             <img src="img/about.png" className="img-responsive" alt="" />{" "}
//           </div>
//           <div className="col-xs-12 col-md-6">
//             <div className="about-text">
//               <h2>About GSN</h2>
//               <p>{props.data ? props.data.paragraph : "loading..."}</p>
//               <h3>Why Choose Us?</h3>
//               <div className="list-style">
//                 <div className="col-lg-6 col-sm-6 col-xs-12">
//                   <ul>
//                     {props.data
//                       ? props.data.Why.map((d, i) => (
//                           <li key={`${d}-${i}`}>{d}</li>
//                         ))
//                       : "loading"}
//                   </ul>
//                 </div>
//                 <div className="col-lg-6 col-sm-6 col-xs-12">
//                   <ul>
//                     {props.data
//                       ? props.data.Why2.map((d, i) => (
//                           <li key={`${d}-${i}`}> {d}</li>
//                         ))
//                       : "loading"}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// import React from "react";

// const About = ({ data }) => {
//   return (
//     <section id="about">
//       <div className="container">
//         {/* Centered Title */}
//         <h2 className="about-title">About Us</h2>

//         <div className="about-content">
//           {/* Left Column - Image */}
//           <div className="about-image">
//             <img src="img/about.png" alt="About GSN" />
//           </div>

//           {/* Right Column - Text */}
//           <div className="about-text">
//             <h2>Welcome to <span>GSN</span></h2>
//             <p className="about-description">
//               {data ? data.paragraph : "Loading..."}
//             </p>

//             <h3>Our Vision</h3>
//             <p>{data ? data.vision : "Loading..."}</p>

//             <h3>Our Mission</h3>
//             <p>{data ? data.mission : "Loading..."}</p>

            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React, { useEffect, useState } from "react";

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-image img");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about">
      <div className="container">
        {/* Centered Title */}
        <h2 className="about-title">About Us</h2>

        <div className="about-content">
          {/* Left Column - Image */}
          <div className="about-image">
            <img
              src="img/about.png"
              alt="About GSN"
              className={isVisible ? "show" : ""}
            />
          </div>

          {/* Right Column - Text */}
          <div className="about-text">
            <h2>Welcome to <span>GSN</span></h2>
            <p className="about-description">
              {data ? data.paragraph : "Loading..."}
            </p>

            <h3>Our Vision</h3>
            <p>{data ? data.vision : "Loading..."}</p>

            <h3>Our Mission</h3>
            <p>{data ? data.mission : "Loading..."}</p>

            {/* <a href="/contact" className="btn-gold">Get in Touch</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
