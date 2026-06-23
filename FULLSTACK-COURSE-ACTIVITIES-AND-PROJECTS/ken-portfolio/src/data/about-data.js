  const snapshot = [
    { label: "Degree", value: "BS Computer Science" },
    { label: "Academic", value: "Consistent Dean's Lister" },
    { label: "Internship", value: "IT Operations Intern at Nexus Technologies" },
    { label: "Thesis Project", value: "FILWA (ML Filipino Writing Assistant)" },
  ];

  const skillsByIntent = {
    build: ["React", "Node.js", "Express", "Java", "JavaScript", "HTML/CSS", "PostgreSQL", "Git/GitHub"],
    operate: ["Postman", "Dynatrace", "System Monitoring"],
    learn: ["Full-stack Development", "REST API integration", "Java Spring Boot", "Gen AI"],
  };

  const timeline = [
    {
      year: "2024",
      title: "Thesis Prototype Development",
      detail:
        "Focused on building our thesis prototype, FILWA: a Filipino Writing Assistant using a RoBERTa model. I worked with HTML/CSS/JavaScript for the frontend, Python for data scraping and ML integration, and Flask for connecting the frontend and backend."
    },
    {
      year: "2025",
      title: "IT Operations Internship",
      detail:
        "Completed my OJT in IT Operations at Nexus Technologies. I trained in CompTIA Server+, Network+, Linux Essentials, and Dynatrace monitoring. The internship was more self-paced and presentation-based, which strengthened my ability to learn independently."
    },
    {
      year: "2026",
      title: "GenC Full-stack Upskilling",
      detail:
        "Started my first role under the Cognizant GenC Program, focusing on full-stack development using React, Node.js, Express, Git/GitHub, HTML/CSS/JavaScript, PostgreSQL, and Generative AI."
    }
  ];

  const workStyle = [
    "I like learning new tools and technologies by building real projects",
    "I am comfortable asking questions and improving through feedback",
    "I am open in learning from others and sharing what I know to help the team grow together",
    "I want to be a developer who builds software that actually works and provides real value to my users",
    "Sometimes, I like creating applications just for fun and learning, even if they don't have a real user base yet"
  ];

  // Assumes your certificate images are in public/assets/certificates/cert-1.png ... cert-13.png
  const certificates = Array.from(
    { length: 13 }, 
    (_, i) => `/certificates/cert-${i + 1}.png`
  );

  const loopingCertificates = [...certificates, ...certificates];

  export { snapshot, skillsByIntent, timeline, workStyle, certificates, loopingCertificates };