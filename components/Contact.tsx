import { contact, profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow eyebrow--center">{contact.eyebrow}</div>
          <h2 className="contact-statement">
            {contact.statementPrefix} <span className="accent">{contact.statementAccent}</span> {contact.statementSuffix}
          </h2>
          <p className="contact-sub">{contact.sub}</p>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View LinkedIn Profile
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              Send an Email
            </a>
          </div>
          <div className="contact-meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
