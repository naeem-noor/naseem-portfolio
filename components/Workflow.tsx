import { workflow } from "@/data/content";
import Reveal from "./Reveal";

export default function Workflow() {
  return (
    <section id="controls-approach">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Project Controls Approach</div>
          <h2>How a plan becomes progress.</h2>
          <p>The operating rhythm behind every portfolio I run — the same sequence, repeated at baseline, at look-ahead, and at every reporting cycle.</p>
        </Reveal>

        <Reveal className="workflow">
          {workflow.map((node) => (
            <div className="workflow-node" key={node.index}>
              <div className="dot-lg">{node.index}</div>
              <h5>{node.title}</h5>
              <p>{node.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
