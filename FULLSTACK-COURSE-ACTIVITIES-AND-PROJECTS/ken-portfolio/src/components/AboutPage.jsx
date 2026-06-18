import internSelfie from "../assets/images/internship/intern-selfie.png";
import aboutMePhoto from "../assets/images/internship/aboutme.jpg";

import "../assets/css/about-page.css";

function AboutPage() {
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

  return (
    <section className="about about-section" id="aboutme" aria-labelledby="about-title">

      <header className="about-hero">
        <p className="about-kicker">About Me</p>
        <h2 className="section-title" id="about-title">
          I'm learning to build software that actually works
        </h2>
        <p className="about-subtitle">
          Working with React, Node.js, Express, and PostgreSQL to turn ideas into simple, usable applications while improving every step of the way.
        </p>
      </header>

      <div className="about-story-card">
        <div className="about-photo-flip" aria-label="Internship photo highlights">
          <div className="about-photo-flip-inner">
            <div className="about-photo-front">
              <img
                src={aboutMePhoto}
                alt="Prince working on a laptop during internship"
                className="about-profile-image"
              />
            </div>

            <div className="about-photo-back">
              <img
                src={internSelfie}
                alt="Prince with co-interns"
                className="about-profile-image"
              />
            </div>
          </div>
        </div>

        <div className="about-story">
          <p>
            Hello! I’m Prince Kenneth, a Computer Science graduate with hands-on IT Operations experience from my internship at Nexus Technologies.
          </p>
          <p>
            My background combines software development and operations discipline. I’ve worked with Linux fundamentals, monitoring workflows, and practical troubleshooting.
          </p>
          <p>
            I also contributed to FILWA, a machine learning-based Filipino writing assistant, which strengthened my collaboration and applied research skills.
          </p>
          <p>
            I’m currently focused on frontend growth with React and looking for roles where I can contribute, learn fast, and build real user value.
          </p>
        </div>
      </div>

      <section className="about-snapshot" aria-labelledby="snapshot-title">
        <h3 id="snapshot-title">Career Snapshot</h3>
        <div className="about-snapshot-grid">
          {snapshot.map((item) => (
            <article className="snapshot-card" key={item.label}>
              <p className="snapshot-label">{item.label}</p>
              <p className="snapshot-value">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-focus" aria-labelledby="focus-title">
        <h3 id="focus-title">What I Focus On</h3>
        <div className="about-focus-grid">
          <article className="focus-card">
            <h4>Build</h4>
            <ul>
              {skillsByIntent.build.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="focus-card">
            <h4>Operate</h4>
            <ul>
              {skillsByIntent.operate.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="focus-card">
            <h4>Learn</h4>
            <ul>
              {skillsByIntent.learn.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="about-timeline" aria-labelledby="timeline-title">
        <h3 id="timeline-title">Journey Timeline</h3>
        <ol>
          {timeline.map((item) => (
            <li key={item.year}>
              <p>
                <strong>{item.year}</strong> • {item.title}
              </p>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-workstyle" aria-labelledby="workstyle-title">
        <h3 id="workstyle-title">How I Work</h3>
        <ul>
          {workStyle.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="about-proof" aria-labelledby="proof-title">
        <h3 id="proof-title">Proof of My Continuous Learning</h3>
        <div className="about-certification">
          <div className="certificate-scroller">
            {loopingCertificates.map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt={`Certificate ${((index % 13) + 1).toString()}`} />
            ))}
          </div>
        </div>
      </section>

    </section>
  );
}

export default AboutPage;