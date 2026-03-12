export function App() {
  return (
    <div className="page-shell">
      <div className="page-grid-overlay" />
      <div className="page">
        <section className="main">
          <header>
            <div className="logo-row">
              <img
                src="/filmhouse_logo.svg"
                alt="Filmhouse"
                className="logo-main"
              />
              <span className="tag-pill">
                <span className="tag-dot" />
                Film Yapım Şirketi
              </span>
            </div>
            <div className="eyebrow">2026 • İstanbul</div>
          </header>

          <div>
            <div className="eyebrow">Yeni jenerasyon film evreni</div>
            <h1>
              <span className="accent">Filmhouse</span> çok yakında
            </h1>
            <p className="status-pill">
              <span className="status-pill-dot" />
              Yenileniyoruz
            </p>
            <p className="subtitle">
              Sinema, dizi ve dijital içerik üretiminde hikâye odaklı,
              uluslararası ortak yapımlara açık bir film yapım şirketi. Şu anda
              stüdyomuzu ve ilk projelerimizi sahneye hazırlıyoruz.
            </p>

            <div className="meta">
              <div className="meta-item">
                <span className="meta-label">Odağımız</span>
                <span className="meta-value">
                  Sinema, dizi, özgün IP geliştirme
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Durum</span>
                <span className="meta-value">
                  Geliştiriliyor • Yakında yayında
                </span>
              </div>
            </div>

            <div className="cta-row">
              <a
                className="btn-primary"
                href="mailto:info@filmhouseentertainment.com"
              >
                <span className="btn-primary-icon">✉</span>
                Bize ulaşın
              </a>
              <p className="cta-note">
                <strong>info@filmhouseentertainment.com</strong> üzerinden
                proje ve işbirliği taleplerinizi iletebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <aside className="side" aria-hidden="true">
          <div className="side-glow" />
          <div className="side-orbit" />
          <div className="logo-card">
            <img
              src="/filmhouse_logo_sq.svg"
              alt="Filmhouse Logo"
              className="logo-square"
            />
          </div>
        </aside>
      </div>

      <footer>
        <div className="footer-left">
          <span>© 2026 Filmhouse Entertainment</span>
          <a href="mailto:info@filmhouseentertainment.com">
            info@filmhouseentertainment.com
          </a>
        </div>
        <div className="social-links">
          <span>Sosyal</span>
          <a
            className="social-link social-link--instagram"
            href="https://www.instagram.com/filmhouse.entertainment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                />
                <circle cx="17" cy="7" r="1" fill="#ffffff" />
              </svg>
            </span>
            Instagram
          </a>
          <a
            className="social-link social-link--tiktok"
            href="https://www.tiktok.com/@filmhouse.entertainment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M14 6v7.2a3.2 3.2 0 1 1-3-3.2"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 6c.5 1.7 1.8 3 3.5 3.4"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            TikTok
          </a>
          <a
            className="social-link social-link--youtube"
            href="https://www.youtube.com/@filmhousentertainment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="7"
                  width="16"
                  height="10"
                  rx="3"
                  ry="3"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                />
                <path d="M11 10l4 2-4 2v-4z" fill="#ffffff" />
              </svg>
            </span>
            YouTube
          </a>
        </div>
      </footer>
    </div>
  );
}

