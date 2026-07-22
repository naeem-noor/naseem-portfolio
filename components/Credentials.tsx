import { credentials, languages } from "@/data/content";
import Reveal from "./Reveal";

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Certifications &amp; Credentials</div>
          <h2>Verified professional standing.</h2>
        </Reveal>

        <Reveal className="credential-list">
          {credentials.map((credential, index) => (
            <div className="credential-row" key={credential.title}>
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>{credential.title}</h4>
                <div className="issuer">{credential.issuer}</div>
              </div>
              <span className="verified">Verified</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="lang-row">
          {languages.map((lang) => (
            <div key={lang.name}>
              <b>{lang.name}</b>
              {lang.level}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
