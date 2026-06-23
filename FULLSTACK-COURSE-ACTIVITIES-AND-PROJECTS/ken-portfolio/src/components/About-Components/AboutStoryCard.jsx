import internSelfie from "../../assets/images/internship/intern-selfie.png";
import aboutMePhoto from "../../assets/images/internship/aboutme.jpg";

function AboutStoryCard() {
  return <div className="about-story-card">
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
}

export default AboutStoryCard;