

// import React from "react";


// const JoinGSN = () => {
//   return (
//     <section className="join-modern-section">
//       <div className="join-hero">
//         <h2>Join GSN</h2>
//         <p>Step into a Network like No Other</p>
//         <span className="hero-tagline">
//           Where smarter tech meets real relationships and your journey begins.
//         </span>
//       </div>

//       <div className="join-grid">
//         <div className="info-box">
//           <h3>Why Join GSN?</h3>
//           <ul>
//             <li>🚀 Business growth like no other network.</li>
//             <li>🤝 Genuine connections beyond business cards.</li>
//             <li>🧠 Personal evolution guided weekly.</li>
//           </ul>

//           <h3>Who Can Join?</h3>
//           <ul>
//             <li>✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals</li>
//             <li>✔ One member per category per chapter</li>
//           </ul>

//           <h3>How to Join?</h3>
//           <ol>
//             <li>Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)</li>
//             <li>Fill the interest form</li>
//             <li>Pay ₹15,000/year and become a member</li>
//           </ol>
//         </div>

//         <div className="form-box">
//           <h3>Apply to Join</h3>
//           <form className="gsn-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="text" placeholder="Business Name" required />
//             <input type="text" placeholder="Type of Business" required />
//             <input type="text" placeholder="Location" required />
//             <input type="tel" placeholder="Phone" required />
//             <input type="email" placeholder="Email" required />
//             <textarea placeholder="Why do you want to join GSN?" required />
//             <input type="text" placeholder="How did you hear about us?" required />
//             <textarea placeholder="Tell us your goals…" required />
//             <button type="submit">Submit Application</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinGSN;

// import React, { useState, useEffect } from "react";

// const infoSlides = [
//   {
//     title: "Why Join GSN?",
//     content: [
//       "🚀 Business growth like no other network.",
//       "🤝 Genuine connections beyond business cards.",
//       "🧠 Personal evolution guided weekly."
//     ]
//   },
//   {
//     title: "Who Can Join?",
//     content: [
//       "✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals",
//       "✔ One member per category per chapter"
//     ]
//   },
//   {
//     title: "How to Join?",
//     content: [
//       "1. Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)",
//       "2. Fill the interest form",
//       "3. Pay ₹15,000/year and become a member"
//     ]
//   }
// ];

// const JoinGSN = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
//     }, 4000); // change every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const current = infoSlides[currentSlide];

//   return (
//     <section className="join-modern-section">
//       <div className="join-hero">
//         <h2>Join GSN</h2>
//         <p>Step into a Network like No Other</p>
//         <span className="hero-tagline">
//           Where smarter tech meets real relationships and your journey begins.
//         </span>
//       </div>

//       <div className="join-grid">
//         <div className="info-box fade-slide">
//           <h3>{current.title}</h3>
//           <ul>
//             {current.content.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="form-box">
//           <h3>Apply to Join</h3>
//           <form className="gsn-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="text" placeholder="Business Name" required />
//             <input type="text" placeholder="Type of Business" required />
//             <input type="text" placeholder="Location" required />
//             <input type="tel" placeholder="Phone" required />
//             <input type="email" placeholder="Email" required />
//             <textarea placeholder="Why do you want to join GSN?" required />
//             <input type="text" placeholder="How did you hear about us?" required />
//             <textarea placeholder="Tell us your goals…" required />
//             <button type="submit">Submit Application</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinGSN;
// third design
import React, { useState, useEffect } from "react";

const infoSlides = [
  {
    title: "Why Join GSN?",
    points: [
      "🚀 Business growth like no other network.",
      "🤝 Genuine connections beyond business cards.",
      "🧠 Personal evolution guided weekly.",
    ],
  },
  {
    title: "Who Can Join?",
    points: [
      "✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals",
      "✔ One member per category per chapter",
    ],
  },
  {
    title: "How to Join?",
    points: [
      "1️⃣ Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)",
      "📝 Fill the interest form",
      "💳 Pay ₹15,000/year and become a member",
    ],
  },
];

const JoinGSN = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
    }, 4500); // 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="join-modern-section">
      <div className="join-hero">
        <h2>Join GSN</h2>
        <p>Step into a Network like No Other</p>
        <span className="hero-tagline">
          Where smarter tech meets real relationships and your journey begins.
        </span>
      </div>

      <div className="join-grid">
        {/* Left animated info section */}
        <div className="animated-info-box">
          <div className="overlay-card">
            <h3>{infoSlides[currentSlide].title}</h3>
            <ul>
              {infoSlides[currentSlide].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right form section (unchanged) */}
        <div className="form-box">
          <h3>Apply to Join</h3>
          <form className="gsn-form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Business Name" required />
            <input type="text" placeholder="Type of Business" required />
            <input type="text" placeholder="Location" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Why do you want to join GSN?" required />
            <input type="text" placeholder="How did you hear about us?" required />
            <textarea placeholder="Tell us your goals…" required />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinGSN;

// final one

