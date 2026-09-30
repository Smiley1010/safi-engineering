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
      "CONSTRUCTION OF OFFICE COMPLEX FOR CONOIL AT APAPA, LAGOS STATE",
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

  const nextProject = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goToProject = (index) => {
    setActiveProject(index);
  };

  const project = projects[activeProject];

  return (
    <section className="safi-projects" id="projects">
      <div className="projects-container">

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

        <div className="projects-label">
          <span>PROJECTS</span>

          <div></div>

          <span>03</span>
        </div>


        {/* =====================================================
            HEADING
        ===================================================== */}

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
            SAFI Engineering & Construction Limited has successfully
            delivered a diverse portfolio of projects, ranging from
            high-rise buildings and luxury residences to industrial
            facilities and civil infrastructure.
          </p>

        </div>


        {/* =====================================================
            PROJECT SLIDESHOW
        ===================================================== */}

        <div className="projects-slideshow">

          {/* IMAGE */}

          <div className="project-slide-image">

            <img
              key={project.image}
              src={project.image}
              alt={project.title}
            />

            <div className="project-image-overlay"></div>

            <div className="project-image-number">
              {project.number}
            </div>

          </div>


          {/* PROJECT INFORMATION */}

          <div className="project-slide-info">

            <div className="project-slide-location">
              {project.location}
            </div>

            <h3>
              {project.title}
            </h3>

          </div>


          {/* NAVIGATION */}

          <div className="project-navigation">

            <button
              className="project-nav-arrow"
              onClick={previousProject}
              aria-label="Previous project"
            >
              ←
            </button>


            {/* 8 DOTS */}

            <div className="project-dots">

              {projects.map((item, index) => (

                <button
                  key={item.number}
                  className={`project-dot ${
                    activeProject === index ? "active" : ""
                  }`}
                  onClick={() => goToProject(index)}
                  aria-label={`Go to project ${item.number}`}
                />

              ))}

            </div>


            <button
              className="project-nav-arrow"
              onClick={nextProject}
              aria-label="Next project"
            >
              →
            </button>

          </div>

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

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