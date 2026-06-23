import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import frontImg from "../assets/images/image.png";
import backImg from "../assets/images/image-animated.png";
import resumeFile from "../assets/Castillo_RESUME.pdf";

import "../assets/css/main-page.css";

function MainPage() {
  const roleText = "Programmer Analyst Trainee";
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 55 : 95;
    const pauseAtEnd = 1100;
    const pauseAtStart = 350;
    let timeoutId;

    if (!isDeleting && typedRole === roleText) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && typedRole === "") {
      timeoutId = setTimeout(() => setIsDeleting(false), pauseAtStart);
    } else {
      timeoutId = setTimeout(() => {
        const nextLength = isDeleting ? typedRole.length - 1 : typedRole.length + 1;
        setTypedRole(roleText.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [typedRole, isDeleting, roleText]);

  return (
    <section className="home home-section" id="home">
      <div className="image-card">
        <div className="image-card-inner">
          <div className="image-front">
            <img src={frontImg} 
              alt="Ken Portrait Image" />
          </div>
          <div className="image-back">
            <img src={backImg} 
              alt="Ken Animated Portrait Image" />
          </div>
        </div>
      </div>

      <div className="home-details">
        <div className="home-intro">
          <p className="hello">Hello, I'm</p>
          <h2>Ken Castillo</h2>
          <p className="p-details">Computer Science Graduate</p>
          <p className="p-details typing-effect" id="typing-effect" aria-label={roleText}>
            <span>{typedRole}</span>
            <span className="typing-cursor" aria-hidden="true">|</span>
          </p>
        </div>

        <div className="home-actions">
          <Button
            component="a"
            href={resumeFile}
            download
            variant="contained"
            className="resume-btn"
          >
            Download CV
          </Button>

          <Button
            component="a"
            href="https://www.linkedin.com/in/prince-kenneth-castillo-8b9b33278/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my LinkedIn profile"
            variant="contained"
            className="social-btn linkedin-btn"
          >
            <LinkedInIcon />
          </Button>

          <Button
            component="a"
            href="https://github.com/Ken-ctrl10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my GitHub profile"
            variant="contained"
            className="social-btn github-btn"
          >
            <GitHubIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MainPage;