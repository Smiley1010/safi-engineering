import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="safi-footer">
      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          <div className="footer-brand">
            <img
              src="/images/safi logo.png"
              alt="SAFI Engineering & Construction Limited"
            />

            <p>
              SAFI Engineering & Construction Limited
            </p>
          </div>
        </div>

       {/* WORDMARK + SIDE INFORMATION */}
<div className="footer-wordmark-area">

  <div className="footer-wordmark">
    SAFI<span>.</span>
  </div>

  <div className="footer-side">

    <div className="footer-navigation">
      <span>NAVIGATION</span>

      <button onClick={() => scrollToSection("home")}>
        Home
      </button>

      <button onClick={() => scrollToSection("about")}>
        About Us
      </button>

      <button onClick={() => scrollToSection("services")}>
        Services
      </button>

      <button onClick={() => scrollToSection("projects")}>
        Projects
      </button>

      <button onClick={() => scrollToSection("experience")}>
        Experience
      </button>

      <button onClick={() => scrollToSection("contact")}>
        Contact Us
      </button>
    </div>

    <div className="footer-contact">
      <span>CONTACT</span>

      <a href="mailto:info@safi-engineering.com">
        info@safi-engineering.com
      </a>

      <a href="tel:+2348128911478">
        +234 812 891 1478
      </a>
    </div>

  </div>

</div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} SAFI Engineering & Construction
            Limited
          </span>

          <span>
            All rights reserved.
          </span>

          <button onClick={() => scrollToSection("home")}>
            BACK TO TOP ↑
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;