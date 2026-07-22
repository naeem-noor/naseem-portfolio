import { featuredProjects, handoverProjects, hospitalityPortfolio } from "@/data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Selected Work</div>
          <h2>Projects under active schedule control.</h2>
          <p>Flagship assignments from the current portfolio at Zameen Developments, driven from inception under full Primavera P6 control.</p>
        </Reveal>

        {featuredProjects.map((project, index) => (
  <Reveal
    className={`project-feature ${
      index % 2 === 1 ? "is-reverse" : ""
    }`}
    key={project.name}
  >
    <div className="project-info">
      <span className="project-tag">{project.tag}</span>

      <div className="project-title-row">
        <h3>{project.name}</h3>

        {project.officialWebsite && (
          <a
            href={project.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="project-website-link"
            aria-label={`Visit official website of ${project.name}`}
            title="Visit Official Website"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3H21V10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M10 14L21 3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M21 14V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3 3 5 3H10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </a>
        )}
      </div>

      <div className="loc">{project.location}</div>

      <p>{project.description}</p>

      <div className="project-specs">
        {project.specs.map((spec) => (
          <div key={spec.label}>
            <b>{spec.value}</b>
            <span>{spec.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="project-visual">
      {project.image && (
        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.name} project`}
          />
        </div>
      )}

      <div className="project-metrics">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <div className="project-bar-label">
              <span>{metric.label}</span>
              <span>{metric.value}</span>
            </div>

            <div className="project-bar">
              <i
                className={metric.variant === "steel" ? "is-steel" : ""}
                style={{ width: `${metric.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>
))}

        <Reveal className="handover-strip">
          <div className="strip-head">
            <h4>{handoverProjects.heading}</h4>
            <span>{handoverProjects.combinedArea}</span>
          </div>
          <ul className="handover-list">
            {handoverProjects.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="brand-strip">
          <div className="brand-strip-head">
            <h4>{hospitalityPortfolio.heading}</h4>
            <p>{hospitalityPortfolio.description}</p>
          </div>
          <div className="brand-pills">
            {hospitalityPortfolio.brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
