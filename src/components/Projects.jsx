import { useEffect, useState } from "react";
import "./Projects.css";

/*
  PROJECT DATA
  ------------------------------------
  Keep your actual SAFI project images
  inside /public/images/projects/

  Each project can have multiple images.
*/

const completedProjects = [
  {
    title: "PROJEATLANTIS II ESTATE",
    location: " LEKKI, LAGOS-CARTER TECH LIMITED",
    images: [
      "/images/project1a.png",
      "/images/project1b.png",
      "/images/project1c.png",
      "/images/project1d.png",
       "/images/safiHeroBg.png",
    ],
  },
  {
    title: "OFFICE BUILDING - HQ SAFI ENGINEERING",
    location: "LEKKI - LAGOS",
    images: [
      "/images/project2a.jpg",
      "/images/project2b.jpg",
      "/images/project2c.jpg",
      "/images/project2d.jpg",
      "/images/project2e.jpg",
      "/images/project2f.jpg",
    ],
  },
  {
    title: "OFFICE BUILDING - ALITA STRIDE LTD",
    location: "LEKKI - LAGOS STATE",
    images: [
      "/images/project3a.png",
      "/images/project3b.jpg",
      "/images/project3c.jpg",
      "/images/project3d.jpg",
      "/images/project3e.png",
    ],
  },
  {
    title: "RESIDENTIAL BUILDING - DEXTEROUS TRAINING INSTITUTE",
    location: "LEKKI - LAGOS STATE",
    images: [
      "/images/project4a.png",
      "/images/project4b.png",
      "/images/project4c.png",
      "/images/project4d.png",
      "/images/project4e.png",
      "/images/project4f.jpg",
    ],
  },
   {
    title: "COCONUT JETTY - INTEGRATED OIL AND GAS",
    location: "APAPA - LAGOS STATE",
    images: [
      "/images/project5a.jpg",
      "/images/project5b.jpg",
      "/images/project5c.jpg",
      "/images/project5d.jpg",
      "/images/project5e.jpg",
      "/images/project5f.jpg",
    ],
  },
  {
    title: "ADMIN BUILDING AND TOWNHALL - NLNG",
    location: "IKURU TOWN - RIVERS STATE",
    images: [
      "/images/project6a.jpg",
      "/images/project6b.jpg",
      "/images/project6c.jpg",
      "/images/project6d.jpg",
      "/images/project6e.jpg",
      "/images/project6f.jpg",
    ],
  },
  {
    title: "FOUANI TRANSAMADI WHAREHOUSE RIGID PAVEMENT",
    location: "PORT HARCOURT - RIVERS STATE",
    images: [
      "/images/project7a.jpg",
      "/images/project7b.jpg",
      "/images/project7c.jpg",
      "/images/project7d.jpg",
      "/images/project7e.jpg",
      "/images/project7f.jpg",
    ],
  },
  {
    title: "FOUANI TRANSAMADI SHOW ROOM",
    location: "PORT HARCOURT - RIVERS STATE",
    images: [
      "/images/project8a.jpg",
      "/images/project8b.jpg",
      "/images/project8c.jpg",
      "/images/project8d.jpg",
      "/images/project8e.jpg",
      "/images/project8f.jpg",
    ],
  },
  {
    title: "FOUANI NTA ROAD SHOW ROOM RIGID PAVEMENT",
    location: "PORT HARCOURT - RIVERS STATE",
    images: [
      "/images/project9a.jpg",
      "/images/project9b.jpg",
      "/images/project9c.jpg",
      "/images/project9d.jpg",
      "/images/project9e.jpg",
      "/images/project9f.jpg",
    ],
  },
  {
    title: "RESIDENTIAL BUILDING - 4 BEDROOM APARTMENT ",
    location: "PORT HARCOURT - RIVERS STATE",
    images: [
      "/images/project10a.png",
      "/images/project10b.png",
      "/images/project10c.jpg",
      "/images/project10d.jpg",
      "/images/project10e.jpg",
      "/images/project10f.png",
    ],
  },
  {
    title: "OFFICE BUILDING - CODE OF CONDUCT",
    location: "YENAGOA - BAYELSA STATE",
    images: [
      "/images/project11a.png",
      "/images/project11b.png",
      "/images/project11c.png",
      "/images/project11d.png",
      "/images/project11e.png",
      "/images/project11f.jpg",
    ],
  },
{
    title: "RESDIENTIAL BUILDING EXECUTIVE SECRETARY RESIDENTIAL HOUSE",
    location: "YENAGOA - BAYELSA STATE",
    images: [
      "/images/project12a.jpg",
      "/images/project12b.jpg",
      "/images/project12c.jpg",
      "/images/project12d.png",
      "/images/project12e.png",
      "/images/project12f.jpg",
    ],
  },
  {
    title: "TRAINING INSTITUTE - SEPLAT",
    location: "YENAGOA - BAYELSA STATE",
    images: [
      "/images/project13a.jpg",
      "/images/project13b.jpg",
      "/images/project13c.jpg",
      "/images/project13d.jpg",
      "/images/project13e.jpg",
      "/images/project13f.jpg",
    ],
  },
  {
    title: "LUXURY RESIDENTIAL BUILDING - 5 BEDROOM DUPLEX",
    location: "ILORIN- KWARA STATE",
    images: [
      "/images/project14a.jpg",
      "/images/project14b.jpg",
      "/images/project14c.jpg",
      "/images/project14d.jpg",
      "/images/project14e.jpg",
      "/images/project14f.jpg",
    ],
  },
];

const ongoingProjects = [
  {
    title: "PROJECT 05",
    location: "LAGOS STATE",
    images: [
      "/images/projects/project-05.jpg",
      "/images/projects/project-05-2.jpg",
      "/images/projects/project-05-3.jpg",
    ],
  },
  {
    title: "PROJECT 06",
    location: "ABUJA",
    images: [
      "/images/projects/project-06.jpg",
      "/images/projects/project-06-2.jpg",
      "/images/projects/project-06-3.jpg",
    ],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const projects =
    activeTab === "completed"
      ? completedProjects
      : ongoingProjects;

  const currentProject = projects[activeProject];

  /*
    Change category
  */
  const changeTab = (tab) => {
    setActiveTab(tab);
    setActiveProject(0);
    setActiveImage(0);
  };

  /*
    Change project
  */
  const changeProject = (index) => {
    if (index === activeProject) return;

    setIsChanging(true);

    setTimeout(() => {
      setActiveProject(index);
      setActiveImage(0);

      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 180);
  };

  /*
    Change image
  */
  const changeImage = (index) => {
    if (index === activeImage) return;

    setIsChanging(true);

    setTimeout(() => {
      setActiveImage(index);

      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 180);
  };

  /*
    Reset image when project changes
  */
  useEffect(() => {
    setActiveImage(0);
  }, [activeProject]);

  return (
    <section className="safi-projects" id="projects">
      <div className="projects-container">

        {/* SECTION LABEL */}
        <div className="projects-label">
          <span>PROJECTS</span>
          <div></div>
          <span>03</span>
        </div>

        {/* HEADING */}
        <div className="projects-heading">
          <div>
            <h2>
              Built with
              <br />
              <em>precision.</em>
            </h2>
          </div>

          <div className="projects-intro">
            <p>
              From residential developments to complex infrastructure,
              every SAFI project reflects our commitment to quality,
              precision, and excellence.
            </p>
          </div>
        </div>

        {/* COMPLETED / ON-GOING */}
        <div className="projects-filter">
          <button
            className={activeTab === "completed" ? "active" : ""}
            onClick={() => changeTab("completed")}
          >
            COMPLETED
          </button>

          <button
            className={activeTab === "ongoing" ? "active" : ""}
            onClick={() => changeTab("ongoing")}
          >
            ON-GOING
          </button>
        </div>

        {/* PROJECT SHOWCASE */}
        {currentProject && (
          <div className="projects-showcase">

            {/* MAIN IMAGE */}
            <div className="projects-main-image">

              <button
  className="projects-arrow projects-arrow-left"
  onClick={() =>
    changeProject(
      activeProject === 0
        ? projects.length - 1
        : activeProject - 1
    )
  }
  aria-label="Previous project"
>
  ←
</button>

<button
  className="projects-arrow projects-arrow-right"
  onClick={() =>
    changeProject(
      activeProject === projects.length - 1
        ? 0
        : activeProject + 1
    )
  }
  aria-label="Next project"
>
  →
</button>

              <img
                src={currentProject.images[activeImage]}
                alt={currentProject.title}
                className={isChanging ? "image-changing" : ""}
              />

              <div className="projects-image-overlay"></div>

              <div className="projects-image-number">
                <span>
                  {String(activeProject + 1).padStart(2, "0")}
                </span>

                <span className="projects-image-total">
                  /
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

            </div>

            {/* PROJECT INFORMATION */}
            <div className="projects-project-info">

              <div className="projects-project-number">
                {String(activeProject + 1).padStart(2, "0")}
              </div>

              <div className="projects-project-details">
                <h3>{currentProject.title}</h3>

                <p>{currentProject.location}</p>
              </div>

            </div>

            {/* IMAGE THUMBNAILS */}
            <div className="projects-thumbnails">

              {currentProject.images.map((image, index) => (
                <button
                  key={image}
                  className={
                    activeImage === index
                      ? "project-thumbnail active"
                      : "project-thumbnail"
                  }
                  onClick={() => changeImage(index)}
                >
                  <img
                    src={image}
                    alt={`${currentProject.title} ${index + 1}`}
                  />
                </button>
              ))}

            </div>

            {/* PROJECT DOTS */}
            <div className="projects-navigation">

              <div className="projects-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`View project ${index + 1}`}
                    className={
                      activeProject === index
                        ? "project-dot active"
                        : "project-dot"
                    }
                    onClick={() => changeProject(index)}
                  />
                ))}
              </div>

              <span className="projects-navigation-text">
                {String(activeProject + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;