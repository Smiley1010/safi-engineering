import React, { useEffect, useState } from "react";
import "./ContactModal.css";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openContact = () => setIsOpen(true);

    window.addEventListener("open-safi-contact", openContact);

    return () => {
      window.removeEventListener("open-safi-contact", openContact);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal-overlay"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE */}
        <button
          className="contact-modal-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close contact"
        >
          ×
        </button>

        {/* HEADER */}
       <div className="contact-modal-header">
  <span className="contact-modal-label">GET IN TOUCH</span>

  <h2>
    Start a<br />
    <em>conversation.</em>
  </h2>

  <p>
    Tell us about your project, and our team will get back to you
    to discuss how SAFI can help bring it to life.
  </p>
</div>
        {/* CONTACT DETAILS */}
        <div className="contact-modal-details">

          <a
            href="mailto:info@safi-engineering.com"
            className="contact-modal-email"
          >
            info@safi-engineering.com
            <span>↗</span>
          </a>

          <a
            href="tel:+2348128911478"
            className="contact-modal-phone"
          >
            +234 812 891 1478
          </a>

        </div>

        {/* LOCATIONS */}
        <div className="contact-modal-locations">

          <div className="contact-modal-location">
            <span>01</span>

            <div>
              <h3>LAGOS</h3>
              <p>
                1B, Pascal Offiah Close, off Platinum Way,
                Jakande Lekki Eti-Osa Local Government Area,
                Lagos State.
              </p>
            </div>
          </div>

          <div className="contact-modal-location">
            <span>02</span>

            <div>
              <h3>ABUJA</h3>
              <p>
                House 20 612 Road, 7th Avenue,
                Gwarinpa, FCT Abuja.
              </p>
            </div>
          </div>

          <div className="contact-modal-location">
            <span>03</span>

            <div>
              <h3>PORT HARCOURT</h3>
              <p>
                Plot 2 Tony Chukwu Street, Off Alcon Road
                Woji, Port Harcourt, Rivers State.
              </p>
            </div>
          </div>

        </div>

        {/* EMAIL CTA */}
        <a
          href="mailto:info@safi-engineering.com?subject=Project%20Enquiry"
          className="contact-modal-button"
        >
          SEND AN ENQUIRY
          <span>↗</span>
        </a>

      </div>
    </div>
  );
}