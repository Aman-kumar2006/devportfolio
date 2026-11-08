"use client";

import { useMemo, useState } from "react";

const destinations = [
  {
    id: "origin",
    label: "Origin",
    description: "Aman’s background, education, and current learning focus.",
  },
  {
    id: "stack",
    label: "Stack",
    description: "Skills, tools, and technologies Aman is building with.",
  },
  {
    id: "log",
    label: "Log",
    description: "Education, achievements, and hackathon experience.",
  },
  {
    id: "proof",
    label: "Proof of work",
    description: "Certificates, workshops, and completed learning milestones.",
  },
  {
    id: "explorations",
    label: "Builds",
    description: "Small projects and experiments from the build log.",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Get in touch about a project, hackathon, or question.",
  },
] as const;

export default function NotFound(): React.ReactNode {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      destinations.filter(
        ({ label, description }) =>
          !normalizedQuery || `${label} ${description}`.toLowerCase().includes(normalizedQuery),
      ),
    [normalizedQuery],
  );

  return (
    <main className="error-page not-found-page">
      <div>
        <p className="error-code">404 / NOT FOUND</p>
        <h1>This page is not in the build log.</h1>
        <p>The link may be outdated, or the page may have moved.</p>
      </div>

      <section className="not-found-search" aria-labelledby="find-section-title">
        <label id="find-section-title" htmlFor="section-search">
          Search the portfolio
        </label>
        <input
          id="section-search"
          type="search"
          placeholder="Try “skills”, “projects”, or “contact”"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="not-found-results" aria-live="polite">
          {matches.length > 0 ? (
            matches.map(({ id, label, description }, index) => (
              <a href={`/#${id}`} key={id}>
                <span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{label}</strong>
                </span>
                <span>{description}</span>
                <b aria-hidden="true">↗</b>
              </a>
            ))
          ) : (
            <p className="not-found-empty">
              No matching section. Try a broader search or return to the homepage.
            </p>
          )}
        </div>
      </section>

      <a className="button primary" href="/#top">
        Back home
      </a>
    </main>
  );
}
