function ContactCard({ item, IconComponent }) {
  return <a
    key={item.id}
    href={item.href}
    className={`contact-card ${item.primary ? "contact-card-primary" : ""}`}
    target={item.external && "_blank"}
    rel={item.external && "noopener noreferrer"}
    aria-label={item.label}
  >
    <span className="contact-card-icon">{IconComponent && <IconComponent />}</span>
    <div className="contact-card-text">
      <h3>{item.label}</h3>
      <p>{item.helper}</p>
    </div>
  </a>
}

export default ContactCard;