import { intro } from "@/data/content";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrap">
        <Reveal className="intro-statement">
          {intro.statementLead} <span>{intro.statementSecondary}</span>
        </Reveal>
        <Reveal className="intro-details">
          <p>{intro.body}</p>
          <dl className="intro-facts">
            {intro.facts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
