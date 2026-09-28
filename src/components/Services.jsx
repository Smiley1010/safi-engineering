import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "CIVIL INFRASTRUCTURE DEVELOPMENT",
    description:
      "We specialize in constructing robust civil infrastructure, including roads, bridges, and harbor works. Our projects are designed to enhance connectivity, support economic growth, and withstand the test of time.",
    image: "/images/service-civil.jpg",
  },
  {
    number: "02",
    title: "BUILDING CONSTRUCTION",
    description:
      "From high-rise commercial towers to luxurious residential estates, we deliver exceptional building construction services tailored to your vision. Our expertise ensures quality, durability, and timely delivery, making your dream spaces a reality.",
    image: "/images/service-building.jpg",
  },
  {
    number: "03",
    title: "ENGINEERING DESIGN (FEED & DED)",
    description:
      "Our engineering design services, including Front-End Engineering Design (FEED) and Detailed Engineering Design (DED), provide innovative and precise solutions for architectural, structural, mechanical, and electrical systems. We turn concepts into actionable plans.",
    image: "/images/service-engineering.jpg",
  },
  {
    number: "04",
    title: "HEAVY INDUSTRIAL SYSTEM",
    description:
      "From refineries to water treatment plants, we provide cutting-edge solutions for heavy industrial systems. Our focus on innovation and sustainability ensures efficient and eco-friendly operations for your industrial needs.",
    image: "/images/service-industrial.jpg",
  },
  {
    number: "05",
    title: "FACILITY MANAGEMENT AND PROCUREMENT",
    description:
      "We offer comprehensive facility management and procurement services, ensuring seamless operations and maintenance of your spaces. From space furnishing to operational support, we keep your facilities running smoothly.",
    image: "/images/service-facility.jpg",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="safi-services" id="services">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">

          <div className="services-label">
            <span>SERVICES</span>
            <div></div>
            <span>02</span>
          </div>

          <div className="services-heading">
            <p>WHAT WE DO</p>

            <h2>
              Built for
              <br />
              <em>what's next.</em>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              Engineering and construction solutions delivered with precision,
              quality, and a commitment to excellence.
            </p>
          </div>

        </div>

        {/* SERVICES */}
        <div className="services-layout">

          {/* SERVICE LIST */}
          <div className="services-list">

            {services.map((service, index) => (
              <div
                className={`service-item ${
                  activeService === index ? "active" : ""
                }`}
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="service-number">
                  {service.number}
                </div>

                <div className="service-info">
                  <h3>{service.title}</h3>

                  <div className="service-description">
                    <p>{service.description}</p>
                  </div>
                </div>

                <div className="service-arrow">
                  ↗
                </div>
              </div>
            ))}

          </div>

          {/* IMAGE PANEL */}
          <div className="services-image-panel">

            <img
              key={services[activeService].image}
              src={services[activeService].image}
              alt={services[activeService].title}
            />

            <div className="services-image-overlay"></div>

            <div className="services-image-content">
              <span>{services[activeService].number}</span>

              <h3>
                {services[activeService].title}
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;