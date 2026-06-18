import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CloseIcon from "@mui/icons-material/Close";

import ViberQR from "../assets/images/VIBER-QR.jpg";

import "../assets/css/contact-page.css";

function ContactPage() {
  const [isViberOpen, setIsViberOpen] = useState(false);

  const contactItems = [
    {
      id: "email",
      label: "Email",
      helper: "Send me an email",
      href: "mailto:pk.castilloacc54@gmail.com",
      icon: <EmailOutlinedIcon />,
      primary: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      helper: "View profile",
      href: "https://www.linkedin.com/in/prince-kenneth-castillo-8b9b33278/",
      icon: <LinkedInIcon />,
      primary: true,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      helper: "Browse repositories",
      href: "https://github.com/Ken-ctrl10",
      icon: <GitHubIcon />,
      primary: true,
      external: true,
    },
    {
      id: "jobs180",
      label: "Jobs180",
      helper: "Professional profile",
      href: "https://castillokenneth.jobs180.com/",
      icon: <BusinessCenterOutlinedIcon />,
      external: true,
    },
    {
      id: "instagram",
      label: "Instagram",
      helper: "Say hi",
      href: "https://www.instagram.com/_its.ken4?igsh=Z3didjA0b2dha2x6&utm_source=ig_contact_invite",
      icon: <InstagramIcon />,
      external: true,
    },
  ];

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <header className="contact-header">
        <p className="contact-kicker">Let's Connect</p>
        <h2 className="section-title" id="contact-title">
          Contact Me
        </h2>
        <p className="contact-subtitle">
          Open to entry-level full-stack and software engineering opportunities.
        </p>
      </header>

      <div className="contact-grid">
        {contactItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`contact-card ${item.primary ? "contact-card-primary" : ""}`}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-label={item.label}
          >
            <span className="contact-card-icon">{item.icon}</span>
            <div className="contact-card-text">
              <h3>{item.label}</h3>
              <p>{item.helper}</p>
            </div>
          </a>
        ))}

        <button
          type="button"
          className="contact-card"
          onClick={() => setIsViberOpen(true)}
          aria-label="Open Viber QR code"
        >
          <span className="contact-card-icon">
            <QrCode2Icon />
          </span>
          <div className="contact-card-text">
            <h3>Viber</h3>
            <p>Open QR code</p>
          </div>
        </button>
      </div>

      {isViberOpen && (
        <div
          className="contact-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="viber-modal-title"
          onClick={() => setIsViberOpen(false)}
        >
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="contact-modal-close"
              onClick={() => setIsViberOpen(false)}
              aria-label="Close Viber modal"
            >
              <CloseIcon />
            </button>

            <h3 id="viber-modal-title">Viber QR Code</h3>
            <p>Scan this to connect with me.</p>
            <img src={ViberQR} alt="Viber QR Code" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactPage;