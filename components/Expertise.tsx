import { expertiseGroups } from "@/data/content";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Expertise</div>
          <h2>Where the plan meets execution.</h2>
          <p>Capability grouped the way project controls actually works — from baseline planning through risk and reporting.</p>
        </Reveal>

        <Reveal className="expertise-groups">
          {expertiseGroups.map((group) => (
            <div className="expertise-card" key={group.index}>
              <div className="num">{group.index}</div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.label}>
                    {item.label}
                    <span className="tag">{item.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
