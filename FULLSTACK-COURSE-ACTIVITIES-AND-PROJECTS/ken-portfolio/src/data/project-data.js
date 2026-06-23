import ComingSoonImg from "../assets/images/coming-soon.jpg";

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

  export { projects, featuredProject, secondaryProjects };