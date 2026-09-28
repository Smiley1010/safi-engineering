import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title:
      "RE-CONSTRUCTION AND FURNISHING OF 4 BEDROOM FLAT AT ROAD 6 WOJI ESTATE, PORT HARCOURT, RIVERS STATE.",
    location: "Port Harcourt, Rivers State",
    image: "/images/project-01.jpg",
  },
  {
    number: "02",
    title:
      "CONSTRUCTION OF OFFICCE COMPLEX FOR CONOIL AT APAPA, LAGOS STATE",
    location: "Apapa, Lagos State",
    image: "/images/project-02.jpg",
  },
  {
    number: "03",
    title:
      "CONTRACT FOR THE RENOVATION OF THE EXECUTIVE SECRETARY’S OUTSTATION RESIDENCE IN YENAGOA, BAYELSA STATE.",
    location: "Yenagoa, Bayelsa State",
    image: "/images/project-03.jpg",
  },
  {
    number: "04",
    title:
      "RE-CONSTRUCTION OF ST COSI RETAIL OUTLET AT OWEERI IMO STATE",
    location: "Owerri, Imo State",
    image: "/images/project-04.jpg",
  },
  {
    number: "05",
    title:
      "ASPHALTIC ROAD AT OGUNLABALE, TRAN-AMADI SHOPPING MALL AND POLICE STATION, PORT HARCOURT",
    location: "Port Harcourt, Rivers State",
    image: "/images/project-05.jpg",
  },
  {
    number: "06",
    title:
      "RENOVATION AND FURNISHING OF DATI CEO RESIDENCE AT VICTORY PARK ESTATE LEKKI LAGOS",
    location: "Lekki, Lagos State",
    image: "/images/project-06.jpg",
  },
  {
    number: "07",
    title:
      "ASPHALTIC ROAD REPAIR AT MARYLAND AND ONIPANU IN LAGOS STATE",
    location: "Lagos State",
    image: "/images/project-07.jpg",
  },
  {
    number: "08",
    title:
      "RE-CONSTRUCTION OF LG/HISENSE FOUANI SHOW ROOM AT TRANS-AMADI INDUSTRIAL LAYOUT – PORT HARCOURT, RIVERS STATE",
    location: "Port Harcourt, Rivers State",
    image: "/images/project-08.jpg",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="safi-projects" id="projects">
      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-top">
          <div className="projects-label">
            <span>PROJECTS</span>
            <div></div>
            <span>03</span>
          </div>
        </div>

        <div className="projects-heading">
          <div>
            <p>OUR WORK</p>

            <h2>
              Selected
              <br />
              <em>projects.</em>
            </h2>
          </div>

          <p className="projects-intro">
            SAFI Engineering & Construction Limited has successfully delivered
            a diverse portfolio of projects, ranging from high-rise buildings
            and luxury residences to industrial facilities and civil
            infrastructure.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <div className="featured-project">

          <div className="featured-image">
            <img
              key={projects[activeProject].image}
              src={projects[activeProject].image}
              alt={projects[activeProject].title}
            />

            <div className="featured-overlay"></div>

            <div className="featured-project-number">
              {projects[activeProject].number}
            </div>

            <div className="featured-project-info">
              <span>{projects[activeProject].location}</span>

              <h3>{projects[activeProject].title}</h3>
            </div>
          </div>

        </div>

        {/* PROJECT LIST */}
        <div className="projects-list">

          {projects.map((project, index) => (
            <div
              key={project.number}
              className={`project-row ${
                activeProject === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <span className="project-row-number">
                {project.number}
              </span>

              <h3>{project.title}</h3>

              <span className="project-row-location">
                {project.location}
              </span>

              <span className="project-row-arrow">
                ↗
              </span>
            </div>
          ))}

        </div>

        {/* FOOTER TEXT */}
        <div className="projects-footer">
          <p>
            Explore our gallery to see how we transform visions into reality.
          </p>

          <button>
            ALL PROJECTS
            <span>↗</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;