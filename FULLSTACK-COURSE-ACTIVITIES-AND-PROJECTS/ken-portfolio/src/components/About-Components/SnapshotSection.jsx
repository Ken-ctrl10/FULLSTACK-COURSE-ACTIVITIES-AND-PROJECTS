import { snapshot as snapshotData } from "../../data/about-data";

function SnapshotSection() {
  return <section className="about-snapshot" aria-labelledby="snapshot-title">
    <h3 id="snapshot-title">Career Snapshot</h3>
    <div className="about-snapshot-grid">
      {snapshotData.map((item) => (
        <article className="snapshot-card" key={item.label}>
          <p className="snapshot-label">{item.label}</p>
          <p className="snapshot-value">{item.value}</p>
        </article>
      ))}
    </div>
  </section>
};

export default SnapshotSection;