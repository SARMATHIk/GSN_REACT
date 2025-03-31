import React, { useEffect, useState } from "react";

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    fetch("/data.json") // ✅ Correct path (File must be inside public/)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); // ✅ Debugging log
        if (Array.isArray(data)) {
          setBenefits(data); // ✅ Ensure it's an array
        } else {
          console.error("Unexpected JSON format:", data);
        }
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  

  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Why Choose GSN?</h2>
      <div className="benefits-container">
        {benefits.length > 0 ? (
          benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
                            <h3 className="benefit-heading">{benefits.title}</h3>
              <p className="benefit-description">{benefits.description}</p>
              <span className="benefit-icon">{benefits.icon}</span>
            </div>
          ))
        ) : (
          <p>Loading benefits...</p>
        )}
      </div>
    </section>
  );
};

export default Benefits;
