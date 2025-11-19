
export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom sticky-top">
                <div className="container">
                <a className="navbar-brand fw-semibold gradient" href="/">
                    Michelle&nbsp;Burton<span className="text-light">'s&nbsp;Portfolio</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                        aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="mainNav">
                    <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    );
}


