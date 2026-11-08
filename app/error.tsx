"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page">
      <p className="error-code">500 / BUILD INTERRUPTED</p>
      <h1>Something broke while loading this page.</h1>
      <p>Try again, or head back to the portfolio.</p>
      <div className="error-actions">
        <button className="button primary" onClick={() => reset()}>
          Try again
        </button>
        <a className="button ghost" href="/">
          Back home
        </a>
      </div>
    </main>
  );
}
