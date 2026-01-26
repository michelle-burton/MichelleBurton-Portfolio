import { useEffect, useRef, useState } from "react";

const LINKS = {
  email: "mailto:msmichelleburton@yahoo.com",
  linkedin: "https://linkedin.com/in/michelle-burton",
  resume: "https://www.michelle-burton.com/Michelle-Burton-Resume.pdf",
  contact: "https://www.michelle-burton.com/contact",
};

export default function ContactFloat() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on outside click + Esc
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onMouseDown = (e) => {
      if (!open) return;
      const panel = panelRef.current;
      const button = buttonRef.current;
      if (!panel || !button) return;

      const clickedInsidePanel = panel.contains(e.target);
      const clickedButton = button.contains(e.target);
      if (!clickedInsidePanel && !clickedButton) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [open]);

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1400);
    } catch {
      // Fallback: do nothing if clipboard not available
      setCopied("");
    }
  };

  const openLink = (url) => window.open(url, "_blank", "noreferrer");

  return (
    <>
      {/* Floating button */}
      <button
        ref={buttonRef}
        type="button"
        className={`contact-float-btn ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="contact-float-panel"
      >
        {open ? "Close" : "Contact Michelle"}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          id="contact-float-panel"
          role="dialog"
          aria-label="Contact Michelle"
          className="contact-float-panel"
        >
          <div className="contact-float-header">
            <div>
              <div className="contact-float-title">Hi — want to reach Michelle?</div>
              <div className="contact-float-subtitle">
                Pick an option below. (Fastest: email or LinkedIn.)
              </div>
            </div>
            <button
              type="button"
              className="contact-float-x"
              onClick={() => setOpen(false)}
              aria-label="Close contact panel"
            >
              ×
            </button>
          </div>

          <div className="contact-float-actions">
            <button
              type="button"
              className="contact-float-action"
              onClick={() => (window.location.href = LINKS.email)}
            >
              Email
              <span className="contact-float-meta">msmichelleburton@yahoo.com</span>
            </button>

            <div className="contact-float-row">
              <button
                type="button"
                className="contact-float-action"
                onClick={() => openLink(LINKS.linkedin)}
              >
                LinkedIn
                <span className="contact-float-meta">/in/michelle-burton</span>
              </button>
              <button
                type="button"
                className="contact-float-mini"
                onClick={() => copy(LINKS.linkedin, "LinkedIn link")}
                aria-label="Copy LinkedIn link"
                title="Copy link"
              >
                Copy
              </button>
            </div>

            <div className="contact-float-row">
              <button
                type="button"
                className="contact-float-action"
                onClick={() => openLink(LINKS.resume)}
              >
                Resume (PDF)
                <span className="contact-float-meta">Open in a new tab</span>
              </button>
              <button
                type="button"
                className="contact-float-mini"
                onClick={() => copy(LINKS.resume, "Resume link")}
                aria-label="Copy resume link"
                title="Copy link"
              >
                Copy
              </button>
            </div>

            <div className="contact-float-row">
              <button
                type="button"
                className="contact-float-action"
                onClick={() => openLink(LINKS.contact)}
              >
                Contact page
                <span className="contact-float-meta">Open form / details</span>
              </button>
              <button
                type="button"
                className="contact-float-mini"
                onClick={() => copy(LINKS.contact, "Contact page link")}
                aria-label="Copy contact page link"
                title="Copy link"
              >
                Copy
              </button>
            </div>

            <div className="contact-float-footer">
              {copied ? <span className="contact-float-toast">Copied: {copied}</span> : <span />}
              <span className="contact-float-hint">Press Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}