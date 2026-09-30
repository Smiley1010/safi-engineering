import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="safi-experience" id="experience">
      <div className="experience-container">

        {/* TOP LABEL */}
        <div className="experience-label">
          <span>EXPERIENCE & TECHNOLOGY</span>
          <div></div>
          <span>04</span>
        </div>

        {/* MAIN HEADING */}
      {/* MAIN HEADING */}
<div className="experience-heading">

  {/* LEFT — BIG HEADING */}
  <div className="experience-heading-main">
    <h2>
      Competitive
      <br />
      <em>global advantages.</em>
    </h2>
  </div>

  {/* RIGHT — LABEL + INTRO */}
  <div className="experience-heading-side">

    <p>OUR ADVANTAGE</p>

    <div className="experience-intro">
      <p>
        At SAFI Engineering & Construction Limited, decades of experience
        and cutting-edge technology form the foundation of our competitive
        edge. With a proven track record in delivering complex projects
        across diverse sectors, we bring unparalleled expertise to every
        endeavor.
      </p>
    </div>

  </div>

</div>

        {/* FEATURE GRID */}
        <div className="experience-grid">

          <div className="experience-card experience-card-large">
            <span className="experience-card-number">01</span>

            <h3>
              Experience
              <br />
              that delivers.
            </h3>

            <p>
              Our team of highly skilled professionals, combined with
              state-of-the-art equipment and advanced construction methods,
              ensures efficiency, precision, and innovation in every project.
            </p>
          </div>

          <div className="experience-card">
            <span className="experience-card-number">02</span>

            <h3>
              Advanced
              <br />
              technology.
            </h3>

            <p>
              From EPC contracts to sustainable infrastructure development,
              we leverage global best practices to deliver results that exceed
              expectations.
            </p>
          </div>

          <div className="experience-card">
            <span className="experience-card-number">03</span>

            <h3>
              Quality.
              <br />
              Safety.
              <br />
              Sustainability.
            </h3>

            <p>
              By integrating the latest technologies and maintaining a
              commitment to quality, safety, and sustainability, SAFI stands
              out as a trusted partner in the global construction industry.
            </p>
          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="experience-bottom">

          <div className="experience-bottom-line"></div>

          <p>
            From small-scale private projects to large-scale commercial
            developments, SAFI Engineering & Construction Limited delivers
            unmatched quality and precision.
          </p>

          <div className="experience-bottom-accent">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;