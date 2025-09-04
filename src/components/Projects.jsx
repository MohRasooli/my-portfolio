export default function Projects() {
  const projects = [
    {
      name: "Weather App",
      description:
        "A React app that provides weather information based on user input.",
      link: "https://mohrasooli.github.io/weather-app/",
      github: "https://github.com/MohRasooli/weather-app",
      image: "https://placehold.co/265x165/EEE/31343C",
    },
    {
      name: "Trivia App",
      description:
        "A quiz application built with React, featuring multiple categories and difficulty levels.",
      link: "https://mohrasooli.github.io/trivia-app/",
      github: "https://github.com/MohRasooli/trivia-app",
      image: "https://placehold.co/265x165/EEE/31343C",
    },
  ];

  return (
    <div className="projects-wrapper">
      <section id="projects" className="projects">
        <span className="projects-header">
          <h2>Projects</h2>
          <p>Some of my projects include:</p>
        </span>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
              )}
              <div className="prejects-description">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="links">
                  <a href={project.link} target="_blank">
                    Live Demo
                  </a>{" "}
                  |
                  <a href={project.github} target="_blank">
                    {" "}
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
