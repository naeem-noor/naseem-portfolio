import { philosophy } from "@/data/content";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Professional Philosophy</div>
          <h2>The principles behind the schedule.</h2>
        </Reveal>

        <Reveal className="philosophy-grid">
          {philosophy.map((item) => (
            <div className="philosophy-item" key={item.index}>
              <span className="ph-num">{item.index}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
