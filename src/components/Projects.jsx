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
    title: "PROJECT 01",
    location: "LAGOS STATE",
    images: [
      "/images/projects/project-01.jpg",
      "/images/projects/project-01-2.jpg",
      "/images/projects/project-01-3.jpg",
      "/images/projects/project-01-4.jpg",
    ],
  },
  {
    title: "PROJECT 02",
    location: "ABUJA",
    images: [
      "/images/projects/project-02.jpg",
      "/images/projects/project-02-2.jpg",
      "/images/projects/project-02-3.jpg",
    ],
  },
  {
    title: "PROJECT 03",
    location: "PORT HARCOURT",
    images: [
      "/images/projects/project-03.jpg",
      "/images/projects/project-03-2.jpg",
      "/images/projects/project-03-3.jpg",
    ],
  },
  {
    title: "PROJECT 04",
    location: "LAGOS STATE",
    images: [
      "/images/projects/project-04.jpg",
      "/images/projects/project-04-2.jpg",
      "/images/projects/project-04-3.jpg",
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