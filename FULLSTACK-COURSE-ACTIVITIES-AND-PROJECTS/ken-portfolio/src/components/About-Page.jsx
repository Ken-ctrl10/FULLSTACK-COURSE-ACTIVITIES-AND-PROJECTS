import SectionHeader from "./common/SectionHeader";
import AboutStoryCard from "./About-Components/AboutStoryCard";
import SnapshotSection from "./About-Components/SnapshotSection";
import FocusSection from "./About-Components/FocusSection";
import TimelineSection from "./About-Components/TimelineSection";
import WorkStyleSection from "./About-Components/WorkStyleSection";
import CertificatesSection from "./About-Components/CertificatesSection";

import "../assets/css/about-page.css";

function AboutPage() {

  return (
    <section className="about about-section" id="aboutme" aria-labelledby="about-title">
      <SectionHeader
        containerClassName="about-hero"
        kickerClassName="about-kicker"
        subtitleClassName="about-subtitle"
        kicker="About Me"
        title="I'm learning to build software that actually works"
        titleId="about-title"
        subtitle="Working with React, Node.js, Express, and PostgreSQL to turn ideas into simple, usable applications while improving every step of the way."
      />

      <AboutStoryCard />
      <SnapshotSection />
      <FocusSection />
      <TimelineSection/ >
      <WorkStyleSection />
      <CertificatesSection />

    </section>
  );
}

export default AboutPage;