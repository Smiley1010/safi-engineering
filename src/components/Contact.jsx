import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="safi-contact" id="contact">
      <div className="contact-container">

        {/* TOP LABEL */}
        <div className="contact-label">
          <span>CONTACT</span>
          <div></div>
          <span>05</span>
        </div>

        {/* BIG HEADING */}
        <div className="contact-heading">
          <p>LET'S WORK TOGETHER</p>

          <h2>
            Let's build
            <br />
            something
            <br />
            <em>exceptional.</em>
          </h2>
        </div>

        {/* CONTACT DETAILS */}
        <div className="contact-content">

          {/* LEFT */}
          <div className="contact-message">
            <p>
              From small-scale private projects to large-scale commercial
              developments, SAFI Engineering & Construction Limited delivers
              unmatched quality and precision.
            </p>

            <a
              href="mailto:info@safi-engineering.com"
              className="contact-email"
            >
              info@safi-engineering.com
              <span>↗</span>
            </a>

            <a
              href="tel:+2348128911478"
              className="contact-phone"
            >
              +234 812 891 1478
            </a>
          </div>

          {/* RIGHT */}
          <div className="contact-locations">

            <div className="contact-location">
              <span className="location-number">01</span>

              <div>
                <h3>LAGOS</h3>

                <p>
                  1B, Pascal Offiah Close, off Platinum Way,
                  Jakande Lekki Eti-Osa Local Government Area,
                  Lagos State.
                </p>
              </div>
            </div>

            <div className="contact-location">
              <span className="location-number">02</span>

              <div>
                <h3>ABUJA</h3>

                <p>
                  House 20 612 Road, 7th Avenue,
                  Gwarinpa, FCT Abuja.
                </p>
              </div>
            </div>

            <div className="contact-location">
              <span className="location-number">03</span>

              <div>
                <h3>PORT HARCOURT</h3>

                <p>
                  Plot 2 Tony Chukwu Street, Off Alcon Road
                  Woji, Port Harcourt, Rivers State.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="contact-cta">
          <a href="mailto:info@safi-engineering.com">
            CONTACT US
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;