import WorkProgressImg from "../assets/images/work-in-progress.jpg";
import ComingSoonImg from "../assets/images/coming-soon.jpg";

import "../assets/css/project-page.css";

function ProjectPage() {
  const projects = [
    {
      id: "filwa",
      title: "FILWA | Filipino Digital Writing Assistant",
      summary:
        "A web-based Filipino writing assistant that helps users compose clearer Filipino text with ML-assisted suggestions.",
      tech: ["Python", "Pandas", "Machine Learning", "Flask"],
      image: "/projects/project-1.png",
      demoUrl: "https://drive.google.com/file/d/13VQmBYPZUsT1zMSBkQBy6sbS5PBO0ZSM/view?usp=sharing",
      repoUrl: "https://github.com/Ken-ctrl10/filwa",
      featured: true,
    },
    {
      id: "next-project",
      title: "Next Project (Coming Soon)",
      summary:
        "A new full-stack project currently in progress as part of my React and Node.js upskilling journey.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: ComingSoonImg,
      demoUrl: "",
      repoUrl: "",
      featured: false,
    },
        {
      id: "next-project",
      title: "Next Project (Coming Soon)",
      summary:
        "A new full-stack project currently in progress as part of my React and Node.js upskilling journey.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: ComingSoonImg,
      demoUrl: "",
      repoUrl: "",
      featured: false,
    }
  ];

  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <header className="projects-header">
        <p className="projects-kicker">Portfolio Work</p>
        <h2 className="section-title" id="projects-title">
          Featured Projects
        </h2>
        <p className="projects-subtitle">
          A mix of academic, internship, and upskilling projects focused on practical software development.
        </p>
      </header>

      {featuredProject && (
        <article className="featured-project-card" aria-labelledby="featured-project-title">
          <div className="featured-project-media">
            <img src={featuredProject.image} alt={featuredProject.title} />
          </div>

          <div className="featured-project-content">
            <p className="project-badge">Featured</p>
            <h3 id="featured-project-title">{featuredProject.title}</h3>
            <p>{featuredProject.summary}</p>

            <div className="project-tech-tags">
              {featuredProject.tech.map((techItem) => (
                <span key={techItem}>{techItem}</span>
              ))}
            </div>

            <div className="project-actions">
              {featuredProject.demoUrl ? (
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-primary"
                >
                  Live Demo
                </a>
              ) : (
                <button type="button" className="project-btn project-btn-disabled" disabled>
                  Demo Soon
                </button>
              )}

              {featuredProject.repoUrl && (
                <a
                  href={featuredProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-secondary"
                >
                  View Repository
                </a>
              )}
            </div>
          </div>
        </article>
      )}

      <div className="secondary-projects-grid" aria-label="More projects">
        {secondaryProjects.map((project) => (
          <article className="secondary-project-card" key={project.id}>
            <div className="secondary-project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="secondary-project-content">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="project-tech-tags">
                {project.tech.map((techItem) => (
                  <span key={techItem}>{techItem}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button type="button" className="project-btn project-btn-disabled" disabled>
                    Demo Soon
                  </button>
                )}

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    Repository
                  </a>
                ) : (
                  <button type="button" className="project-btn project-btn-disabled" disabled>
                    Repo Soon
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;