import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="safi-about" id="about-company">
      <div className="about-container">

        {/* TOP LABEL */}
        <div className="about-top">
          <span className="about-label">ABOUT SAFI</span>

          <div className="about-line"></div>

          <span className="about-number">01</span>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-main">

          {/* LEFT */}
          <div className="about-heading">
            <p className="about-kicker">WHO WE ARE</p>

            <h2>
              Building
              <br />
              Excellence
              <br />
              <em>with Integrity.</em>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="about-content">

            <p>
              SAFI Engineering & Construction Limited is a trusted leader in
              engineering and construction, delivering innovative and
              sustainable infrastructure solutions. Specializing in building
              construction, civil infrastructure, heavy industrial systems,
              and engineering design, SAFI ensures quality, durability, and
              timely project delivery.
            </p>

            <p>
              With a team of skilled professionals, state-of-the-art
              equipment, and a commitment to excellence, SAFI is dedicated to
              exceeding client expectations and driving sustainable
              development.
            </p>

            <button className="about-button">
              DISCOVER SAFI
              <span>↗</span>
            </button>

          </div>
        </div>

        {/* IMAGE */}
        <div className="about-image-wrapper">
          <img
            src="/images/aboutSafi.png"
            alt="SAFI Engineering and Construction project"
          />

          <div className="about-image-caption">
            <span>ENGINEERING & CONSTRUCTION</span>
            <span>SAFI</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;