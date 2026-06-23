import { workStyle } from "../../data/about-data";

function WorkStyleSection() {
  return <section className="about-workstyle" aria-labelledby="workstyle-title">
    <h3 id="workstyle-title">How I Work</h3>
    <ul>
      {workStyle.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </section>
};

export default WorkStyleSection;
