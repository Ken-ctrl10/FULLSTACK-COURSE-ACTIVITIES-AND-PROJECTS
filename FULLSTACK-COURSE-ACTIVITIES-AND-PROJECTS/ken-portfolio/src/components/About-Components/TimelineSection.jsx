import { timeline } from "../../data/about-data";

function TimelineSection() {
  return <section className="about-timeline" aria-labelledby="timeline-title">
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
}

export default TimelineSection;