import { useState } from "react";
import "./MissionVision.css";

const principles = [
  {
    number: "01",
    title: "MISSION",
    text:
      "To deliver high-quality construction services at competitive prices, ensuring customer satisfaction through timeliness, attention to detail, and service excellence",
  },
  {
    number: "02",
    title: "VISION",
    text:
      "To become the leading EPC contractor in sustainable infrastructure development and building projects",
  },
  {
    number: "03",
    title: "CORE VALUES",
    text:
      "Professionalism, integrity, honesty, and fairness in all relationships with suppliers, subcontractors, associates, and customers.",
  },
];

export default function MissionVision() {
  const [active, setActive] = useState(0);

  return (
    <section className="safi-principles" id="about">

      {/* =====================================================
          SECTION INTRO
      ===================================================== */}

      <div className="safi-principles-intro">

        <div className="safi-section-label">
          <span className="safi-section-line"></span>
          <span>SAFI</span>
        </div>

        <h2>
          Precision.
          <br />
          Integrity.
          <br />
          <em>Excellence.</em>
        </h2>

      </div>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <div className="safi-principles-list">

        {principles.map((item, index) => (

          <article
            key={item.number}
            className={`safi-principle ${
              active === index ? "active" : ""
            }`}
            onMouseEnter={() => setActive(index)}
          >

            <div className="safi-principle-number">
              {item.number}
            </div>

            <div className="safi-principle-title">
              <h3>{item.title}</h3>
            </div>

            <div className="safi-principle-content">

              <p>
                {item.text}
              </p>

              <span className="safi-principle-arrow">
                ↗
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}