import { useEffect, useState } from "react";
import "./NavbarHero.css";

export default function NavbarHero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  const openContactModal = () => {
    window.dispatchEvent(new Event("open-safi-contact"));
    setMobileOpen(false);
  };

  return (
    <section className="safi-hero" id="home">

      {/* =====================================================
          HERO VIDEO
      ===================================================== */}

      <video
        className="safi-hero-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/safiHero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="safi-hero-overlay"></div>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`safi-navbar ${
          scrolled ? "safi-navbar-scrolled" : ""
        }`}
      >

        {/* LOGO */}

        <button
          className="safi-logo"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/images/safi logo.png"
            alt="SAFI Engineering & Construction Limited"
          />
        </button>


        {/* NAVIGATION */}

        <nav className="safi-navigation">

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

        </nav>


        {/* NAVBAR CTA */}

        <button
          className="safi-navbar-button"
          onClick={openContactModal}
        >
          Contact Us
          <span></span>
        </button>


        {/* MOBILE BUTTON */}

        <button
          className={`safi-mobile-menu ${
            mobileOpen ? "open" : ""
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>

      </header>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`safi-mobile-navigation ${
          mobileOpen ? "show" : ""
        }`}
      >

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

      </div>


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="safi-hero-content">

        <div className="safi-hero-text">

          <h1>
            Excellence In Every Build.
          </h1>

          <p>
            Transforming visions into sustainable realities...
          </p>


          <div className="safi-hero-actions">

            <button
              onClick={openContactModal}
              className="safi-hero-button safi-orange-button"
            >
              CONTACT US
              <span></span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="safi-hero-button safi-transparent-button"
            >
              VIEW ALL PROJECTS
              <span></span>
            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="safi-scroll-indicator">

        <span className="safi-scroll-line"></span>

        <span>Scroll</span>

        <span className="safi-scroll-arrow">↓</span>

      </div>

    </section>
  );
}