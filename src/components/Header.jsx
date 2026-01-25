export default function Header({ theme, onToggleTheme }) {
  const isLight = theme === "light";

  return (
    <header>
      <nav
        className={`navbar navbar-expand-md border-bottom sticky-top ${
          isLight ? "navbar-light bg-light" : "navbar-dark bg-dark"
        }`}
        data-theme={theme}
      >
        <div className="container">
          <a className="navbar-brand fw-semibold gradient" href="/">
            Michelle&nbsp;Burton
            <span className={isLight ? "text-dark" : "text-light"}>
              's&nbsp;Portfolio
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className="navbar-nav align-items-md-center">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>

              {/* 🌗 Theme Toggle */}
              <li className="nav-item ms-md-3">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={onToggleTheme}
                  aria-label="Toggle theme"
                >
                  {isLight ? "Dark" : "☀️ Light"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}