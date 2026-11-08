"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Award,
  Braces,
  Code2,
  Database,
  FolderGit2,
  GitFork,
  Globe,
  GitBranch,
  Laptop,
  Server,
  ShieldCheck,
  Terminal,
  Trophy,
  Users,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const sections = [
  ["top", "Index"],
  ["origin", "Origin"],
  ["stack", "Stack"],
  ["log", "Log"],
  ["proof", "Proof"],
  ["explorations", "Builds"],
  ["contact", "Contact"],
] as const;

const skills = [
  { name: "HTML", level: 80, note: "Semantic markup and accessible structure.", icon: Code2 },
  { name: "CSS", level: 75, note: "Responsive layouts with Flexbox and Grid.", icon: Wind },
  {
    name: "Python",
    level: 60,
    note: "Logic, scripting, and backend fundamentals.",
    icon: Terminal,
  },
  {
    name: "JavaScript",
    level: 40,
    note: "Building confidence through shipped projects.",
    icon: Braces,
  },
  { name: "React", level: 30, note: "Learning component design as part of MERN.", icon: Code2 },
] satisfies Array<{ name: string; level: number; note: string; icon: LucideIcon }>;

const certificates = [
  {
    src: "cert-1.avif",
    title: "Fresher to Full Stack Pro",
    issuer: "Sudha Software Solutions",
    summary: "Full-stack workshop covering front-end and back-end foundations.",
  },
  {
    src: "cert-2.avif",
    title: "HackFest Hackathon 2025",
    issuer: "IIT (ISM) Dhanbad",
    summary: "36-hour national hackathon with Team BinaryBrain.",
  },
  {
    src: "cert-3.avif",
    title: "Python Fundamentals",
    issuer: "Infosys Springboard",
    summary: "Programming fundamentals, control flow, functions, and core logic.",
  },
  {
    src: "cert-4.avif",
    title: "HTML5 — The Language",
    issuer: "Infosys Springboard",
    summary: "Semantic HTML, document structure, and page layout.",
  },
  {
    src: "cert-5.avif",
    title: "CSS3",
    issuer: "Infosys Springboard",
    summary: "Responsive design, styling fundamentals, and layout techniques.",
  },
] as const;

const toolbox = [
  ["Node.js", Server],
  ["Tailwind CSS", Wind],
  ["MySQL", Database],
  ["Git", GitBranch],
  ["GitHub", GitFork],
  ["Vercel", Globe],
  ["VS Code", Laptop],
  ["Kali Linux", ShieldCheck],
] satisfies Array<[string, LucideIcon]>;

const stats = [
  ["3", "Achievements", "#log", Trophy],
  ["4", "Projects", "#explorations", FolderGit2],
  ["11", "Certificates", "#proof", Award],
  ["2", "Hackathons", "#hackfest", Users],
] satisfies Array<[string, string, string, LucideIcon]>;

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      ↗
    </span>
  );
}

function CertificatePreview({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="cert-image">
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
        loading="lazy"
      />
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current: string = sections[0][0];

      sections.forEach(([id]) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      });

      setActive(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    if (id === "top") {
      setActive("top");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={dark ? "site dark" : "site light"}>
      <a className="skip-link" href="#origin">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <aside className="rail" aria-label="Section navigation">
        <button className="rail-logo" onClick={() => navigate("top")} aria-label="Back to top">
          AK<span>/</span>
          <b>26</b>
        </button>
        <ol className="rail-list">
          {sections.map(([id, label], index) => (
            <li key={id}>
              <a
                className={active === id ? "active" : ""}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setActive(id)}
              >
                <em>{String(index).padStart(2, "0")}</em>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="rail-progress" aria-hidden="true">
          <span>●</span>
          <small>{active === "top" ? "00" : "●"}</small>
        </div>
      </aside>

      <header className="topbar">
        <button className="topbar-logo" onClick={() => navigate("top")}>
          Aman Kumar
        </button>
        <button
          className="theme-toggle"
          onClick={() => setDark((value) => !value)}
          aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
        >
          {dark ? "☼" : "☾"}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <i />
          <i />
        </button>
      </header>
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <nav aria-label="Mobile section navigation">
          {sections.map(([id, label], index) => (
            <button key={id} onClick={() => navigate(id)}>
              <em>{String(index).padStart(2, "0")}</em>
              {label}
            </button>
          ))}
        </nav>
        <div>
          <a href="https://github.com/Aman-kumar2006" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/aman-kumar-8b988b28b" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:amankumar.kumar2006@gmail.com">Email</a>
        </div>
      </div>

      <main>
        <header className="hero" id="top">
          <div className="orb orb-orange" aria-hidden="true" />
          <div className="orb orb-green" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-meta">
              <span className="status">
                <i /> v0.3 — currently compiling
              </span>
              <span>23.34°N, 85.31°E — Ranchi, Jharkhand</span>
            </div>
            <h1>
              Aman Kumar builds
              <br />
              software the way he
              <br />
              <em>learns it</em> — in public,
              <br />
              one commit at a time.
            </h1>
            <div className="hero-bottom">
              <div>
                <small>Currently training as a</small>
                <strong>Full-Stack Developer</strong>
              </div>
              <div className="actions">
                <a
                  className="button primary"
                  href="https://drive.google.com/file/d/10R0Ri5jU0NYrlr3XUdgbFIp03lMCBEUJ/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé
                </a>
                <a className="button ghost" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            Scroll <b /> 00 / 06
          </div>
        </header>

        <section className="section" id="origin">
          <SectionHeading
            number="01"
            label="Origin"
            title={
              <>
                From <em>“Hello, World”</em>
                <br />
                to hackathons.
              </>
            }
          />
          <div className="origin-grid">
            <figure className="portrait">
              <Image
                src="/assets/img/portrait.avif"
                alt="Portrait of Aman Kumar"
                title="Aman Kumar, aspiring full-stack developer from Ranchi"
                fill
                sizes="(max-width: 860px) 320px, 360px"
                priority
              />
              <figcaption>Ranchi, Jharkhand — IN</figcaption>
            </figure>
            <div className="copy">
              <p className="lede">
                I&apos;m a third-year B.Tech Computer Science student at ICFAI University, Jharkhand
                — a few semesters into turning curiosity about how software works into the ability
                to build it myself.
              </p>
              <p>
                Most days that means the MERN stack open in one tab and Python in another: learning
                backend logic, debugging longer than I&apos;d like to admit, and shipping small
                projects that prove the concepts actually stuck. I care more about understanding why
                something works than getting it to work by accident.
              </p>
              <blockquote>
                &quot;Code is not just a skill — it&apos;s a mindset. I build, break, and learn to
                grow as a developer every day.&quot;
              </blockquote>
              <dl className="specs">
                {[
                  ["Name", "Aman Kumar"],
                  ["Base", "Ranchi, Jharkhand, India"],
                  ["Role", "Aspiring Full-Stack Developer"],
                  ["Education", "B.Tech, Computer Science — 2023–2027"],
                  ["Languages", "English, Hindi"],
                  ["Now learning", "MERN stack, Python, SQL"],
                  ["Off-stack", "Traveling, photography, gaming"],
                ].map(([term, value]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="link-row">
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/aman-kumar-8b988b28b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn →
                </a>
                <a
                  className="text-link"
                  href="https://github.com/Aman-kumar2006"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitFork size={15} aria-hidden="true" /> GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <SectionHeading
            number="02"
            label="Stack"
            title={
              <>
                What I reach for
                <br />
                when I sit down to build.
              </>
            }
            sub="Honest self-ratings, not résumé inflation — the fifth one is still very much in progress."
          />
          <div className="skills">
            {skills.map(({ name, level, note, icon: Icon }) => (
              <article className="skill" key={name}>
                <div>
                  <b>
                    <Icon size={16} aria-hidden="true" />
                    {name}
                  </b>
                  <span>{level}%</span>
                </div>
                <div className="skill-bar">
                  <i style={{ height: `${level}%` }} />
                </div>
                <p>{note}</p>
              </article>
            ))}
          </div>
          <div className="toolbelt">
            <span>Also in the toolbox</span>
            {toolbox.map(([item, Icon]) => (
              <b key={item}>
                <Icon size={14} aria-hidden="true" />
                {item}
              </b>
            ))}
          </div>
        </section>

        <section className="section" id="log">
          <SectionHeading
            number="03"
            label="Log"
            title={
              <>
                A running log of
                <br />
                how I got here.
              </>
            }
          />
          <div className="stats">
            {stats.map(([value, label, href, Icon]) => (
              <a className="stat-card" href={href} key={label}>
                <Icon size={19} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </a>
            ))}
          </div>
          <ol className="timeline">
            <Timeline
              date="2021 — 2023"
              title="Higher Secondary, Science (Mathematics)"
              org="AS College, Deoghar"
            >
              Built the mathematical foundation that made computer science feel like a natural next
              step.
            </Timeline>
            <Timeline
              date="2023 — Current"
              title="B.Tech, Computer Science"
              org="ICFAI University, Jharkhand"
            >
              Currently in my third year, layering full-stack development and Python on top of core
              CS fundamentals.
            </Timeline>
            <Timeline
              date="April 2025"
              tag="Hackathon"
              id="hackfest"
              title="HackFest 2025 — IIT (ISM) Dhanbad"
              org="Team BinaryBrain · Problem statement by GoFloww"
            >
              GoFloww builds AI-enhanced tools for digital communication. In 36 hours, our team
              designed an AI-powered email assistant, analyzed historical data for context-aware
              replies, and shipped a responsive prototype.
            </Timeline>
          </ol>
        </section>

        <section className="section" id="proof">
          <SectionHeading
            number="04"
            label="Proof of work"
            title={
              <>
                Certificates, workshops,
                <br />
                and one very intense hackathon.
              </>
            }
          />
          <div className="cert-grid">
            {certificates.map(({ src, title, issuer, summary }) => (
              <a
                className="cert-card group"
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                key={title}
              >
                <CertificatePreview
                  src={`/assets/img/${src}`}
                  alt={`${title} certificate issued by ${issuer}`}
                  title={`${title} certificate — ${issuer}`}
                />
                <div>
                  <small>{issuer}</small>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <span>
                    View certificate <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="explorations">
          <SectionHeading
            number="05"
            label="Builds"
            title={
              <>
                Small builds while the
                <br />
                big ones compile.
              </>
            }
          />
          <div className="builds">
            {[
              [
                "01",
                "Personal Portfolio Website",
                "The site you&apos;re on right now — handcrafted with HTML, CSS, and vanilla JavaScript.",
                "HTML · CSS · JS",
              ],
              [
                "02",
                "Python CLI Calculator",
                "A command-line calculator handling basic arithmetic — small in scope, useful for cementing Python fundamentals.",
                "Python",
              ],
              [
                "03",
                "Responsive Web Pages",
                "A set of layout drills — practicing Flexbox and Grid until responsive design stopped feeling like guesswork.",
                "HTML · CSS",
              ],
            ].map(([index, title, copy, tag]) => (
              <article key={index}>
                <small>{index}</small>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <span>{tag}</span>
              </article>
            ))}
            <a
              className="next-build group"
              href="https://github.com/Aman-kumar2006?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <small>＋</small>
              <div>
                <h3>More on GitHub</h3>
                <p>Next builds are compiling. The freshest commits always live on my GitHub.</p>
              </div>
              <span>
                Browse repos <Arrow />
              </span>
            </a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="orb orb-orange contact-orb" aria-hidden="true" />
          <SectionHeading
            number="06"
            label="Say hello"
            title={
              <>
                Got a project, a hackathon
                <br />
                team, or just a question?
              </>
            }
          />
          <a className="email group" href="mailto:amankumar.kumar2006@gmail.com">
            amankumar.kumar2006@gmail.com <Arrow />
          </a>
          <div className="contact-grid">
            {[
              [
                "Location",
                "Ranchi, Jharkhand, India",
                "https://maps.google.com/?q=Ranchi,+Jharkhand,+India",
              ],
              ["Phone", "+91 70336 01333", "tel:+917033601333"],
              [
                "Résumé",
                "Download PDF ↗",
                "https://drive.google.com/file/d/10R0Ri5jU0NYrlr3XUdgbFIp03lMCBEUJ/view?usp=drivesdk",
              ],
              ["Got a longer question?", "Ask via email ↗", "mailto:amankumar.kumar2006@gmail.com"],
            ].map(([label, value, href]) => (
              <div key={label}>
                <small>{label}</small>
                <a
                  className="contact-link"
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
          <div className="socials">
            <span>Find me on</span>
            <a href="https://github.com/Aman-kumar2006" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/aman-kumar-8b988b28b" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://youtube.com/@iqamanopgaming" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </section>
      </main>
      <footer>
        <a href="#top">Back to top ↑</a>
        <span>© {new Date().getFullYear()} Aman Kumar — built from Ranchi, Jharkhand</span>
        <span>
          {new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Kolkata",
          }).format(new Date())}{" "}
          IST — Ranchi
        </span>
      </footer>
    </div>
  );
}

function SectionHeading({
  number,
  label,
  title,
  sub,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <header className="section-head">
      <p>
        <b>{number}</b> {label}
      </p>
      <h2>{title}</h2>
      {sub && <span>{sub}</span>}
    </header>
  );
}

function Timeline({
  date,
  title,
  org,
  id,
  tag = "Education",
  children,
}: {
  date: string;
  title: string;
  org: string;
  id?: string;
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <li id={id}>
      <time>{date}</time>
      <div>
        <small className={tag === "Hackathon" ? "accent" : ""}>{tag}</small>
        <h3>{title}</h3>
        <strong>{org}</strong>
        <p>{children}</p>
      </div>
    </li>
  );
}
