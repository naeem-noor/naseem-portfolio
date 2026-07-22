import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          © {year} {profile.name}
        </span>
        <span>Planning Engineer · Project Controls</span>
      </div>
    </footer>
  );
}
