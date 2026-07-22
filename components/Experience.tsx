import { experience, education } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Career Journey</div>
          <h2>Progression through project control.</h2>
          <p>Two portfolios, one discipline: keeping the schedule the single source of truth from inception to handover.</p>
        </Reveal>

        <Reveal>
          <div className="timeline">
            {experience.map((item) => (
              <div className={`timeline-item ${item.current ? "is-current" : ""}`} key={item.company}>
                <div className="timeline-node" />
                <div className="timeline-date">{item.dateRange}</div>
                <h3>{item.company}</h3>
                <div className="role-loc">
                  {item.role} · {item.location}
                </div>
                <p className="desc">{item.description}</p>

                {item.stats && (
                  <div className="stat-row">
                    {item.stats.map((stat) => (
                      <div className="stat" key={stat.label}>
                        <b>{stat.value}</b>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="toolchain">
                  {item.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="edu-block">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            Education
          </div>
          <div className="edu-grid">
            {education.map((item) => (
              <div className="edu-item" key={item.institution}>
                <span className="timeline-date">{item.field}</span>
                <h4>{item.institution}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
