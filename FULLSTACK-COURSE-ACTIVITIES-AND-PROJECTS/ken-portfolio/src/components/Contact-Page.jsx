import { useState } from "react";

import ContactCard from "./Contact-Components/ContactCard";
import ViberCard from "./Contact-Components/ViberCard";
import ViberModal from "./Contact-Components/ViberModal";
import SectionHeader from "./common/SectionHeader";
// Icons
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../assets/css/contact-page.css";
import contactItems from "../data/contact-data";

const iconMap = {
  EmailOutlinedIcon,
  LinkedInIcon,
  GitHubIcon,
  BusinessCenterOutlinedIcon,
  InstagramIcon,
};

function ContactPage() {
  const [isViberOpen, setIsViberOpen] = useState(false);

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeader
        containerClassName="contact-header"
        kickerClassName="contact-kicker"
        subtitleClassName="contact-subtitle"
        kicker="Let's Connect"
        title="Contact Me"
        titleId="contact-title"
        subtitle="Open to entry-level full-stack and software engineering opportunities."
      />

      <div className="contact-grid">
        {contactItems.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <ContactCard key={item.id} item={item} IconComponent={IconComponent} />
        );
        })}

        <ViberCard 
          onOpen={() => setIsViberOpen(true)} 
        />
      </div>

      {isViberOpen && (
        <ViberModal onClose={() => setIsViberOpen(false)} />
      )}
      
    </section>
  );
}

export default ContactPage;