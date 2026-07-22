import { hero, profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-copy">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
            <br />
            <em>{hero.headline[2]}</em>
          </h1>
          <p className="lede">{hero.lede}</p>
          <div className="hero-meta">
            <span>
              <i className="dot" />
              {profile.location}
            </span>
            <span>
              <i className="dot" />
              Currently at {profile.currentCompany}
            </span>
          </div>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Connect With Me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 420 360" preserveAspectRatio="xMidYMid meet">
            <line x1="0" y1="40" x2="420" y2="40" stroke="var(--line)" strokeWidth="1" />
            <line x1="0" y1="100" x2="420" y2="100" stroke="var(--line)" strokeWidth="1" />
            <line x1="0" y1="160" x2="420" y2="160" stroke="var(--line)" strokeWidth="1" />
            <line x1="0" y1="220" x2="420" y2="220" stroke="var(--line)" strokeWidth="1" />
            <line x1="0" y1="280" x2="420" y2="280" stroke="var(--line)" strokeWidth="1" />

            <rect className="gantt-bar" x="10" y="26" width="140" height="12" fill="var(--surface-2)" />
            <rect className="gantt-bar" x="10" y="86" width="230" height="12" fill="var(--steel)" opacity=".55" />
            <rect className="gantt-bar" x="150" y="146" width="180" height="12" fill="var(--bronze)" />
            <rect className="gantt-bar" x="60" y="206" width="260" height="12" fill="var(--surface-2)" />
            <rect className="gantt-bar" x="240" y="266" width="120" height="12" fill="var(--steel)" opacity=".55" />
            <rect className="gantt-bar" x="30" y="326" width="200" height="12" fill="var(--bronze)" opacity=".85" />

            <circle className="milestone" cx="150" cy="32" r="4" fill="var(--bronze-bright)" />
            <circle
              className="milestone"
              cx="330"
              cy="152"
              r="4"
              fill="var(--bronze-bright)"
              style={{ animationDelay: ".6s" }}
            />
            <circle
              className="milestone"
              cx="320"
              cy="212"
              r="4"
              fill="var(--bronze-bright)"
              style={{ animationDelay: "1.2s" }}
            />

            <g className="today-line">
              <line x1="205" y1="10" x2="205" y2="350" stroke="var(--bronze)" strokeWidth="1" strokeDasharray="4 4" />
            </g>
          </svg>
        </div>
      </div>

      {/* <div className="scroll-cue">
        <span className="line" />
        Scroll
      </div> */}
    </section>
  );
}
