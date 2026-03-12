export function App() {
  return (
    <div className="page">
      <div className="page-bg" aria-hidden="true" />

      <header className="page-header">
        <img
          src="/filmhouse_logo.svg"
          alt="Filmhouse"
          className="page-logo"
        />
      </header>

      <main className="page-main">
        <p className="page-kicker">Film Production Studio</p>
        <h1 className="page-title">Coming Soon</h1>
        <p className="page-tagline">A new cinematic universe. Stay tuned with us.</p>

        <div className="page-contacts">
          <a href="mailto:info@filmhouseentertainment.com">info@filmhouseentertainment.com</a>
          <span className="page-contacts-sep">·</span>
          <a href="mailto:selma@filmhouseentertainment.com">selma@filmhouseentertainment.com</a>
        </div>
      </main>

      <footer className="page-footer">
        <span className="page-copy">© 2026 Filmhouse Entertainment</span>
        <div className="page-social">
          <a
            className="page-social-link"
            href="https://www.instagram.com/filmhouse.entertainment"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="4" width="16" height="16" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </a>
          <a
            className="page-social-link"
            href="https://www.tiktok.com/@filmhouse.entertainment"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 6v7a3.5 3.5 0 1 1-3-3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 6c.5 1.8 1.9 3 3.6 3.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            className="page-social-link"
            href="https://www.youtube.com/@filmhousentertainment"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="7" width="16" height="10" rx="2" />
              <path d="M11 10l4 2-4 2v-4z" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
