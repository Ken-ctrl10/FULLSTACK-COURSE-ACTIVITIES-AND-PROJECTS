import { loopingCertificates } from "../../data/about-data";

function CertificatesSection() {
  return <section className="about-proof" aria-labelledby="proof-title">
    <h3 id="proof-title">Proof of My Continuous Learning</h3>
    <div className="about-certification">
      <div className="certificate-scroller">
        {loopingCertificates.map((src, index) => (
          <img key={`${src}-${index}`} src={src} alt={`Certificate ${((index % 41) + 1).toString()}`} />
        ))}
      </div>
    </div>
  </section>
}

export default CertificatesSection;