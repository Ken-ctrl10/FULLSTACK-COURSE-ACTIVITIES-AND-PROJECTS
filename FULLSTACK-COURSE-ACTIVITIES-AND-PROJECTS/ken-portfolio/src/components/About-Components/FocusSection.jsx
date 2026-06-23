import { skillsByIntent } from "../../data/about-data";


function FocusSection() {
  return <section className="about-focus" aria-labelledby="focus-title">
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

}

export default FocusSection;