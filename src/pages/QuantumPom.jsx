import React from "react";

export default function QuantumPom() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Quantum Pom</h1>
          <p style={styles.subtitle}>Thanks,  💜</p>
        </header>

        <div style={styles.videoWrap}>
          <video
            style={styles.video}
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/quantum-pom.mp4" type="video/mp4" />
            Sorry—your browser can’t play this video.
          </video>
        </div>

        <footer style={styles.footer}>
        <p style={styles.note}>
            Quantum Pom is a glimpse into the evolving world of AI-driven design—where
            motion, emotion, and code come together. Each piece is an experiment in
            building living visuals powered by generative systems.
        </p>

        <p style={styles.buttonWrap}>
            <a
            href="https://www.youtube.com/@QuantumAIDesign"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.quantumButton}
            >
            Continue the Journey →
            </a>
        </p>

        <p style={styles.small}>
            Michelle Burton • Quantum AI Design
        </p>
        </footer>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "24px",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(168,85,247,0.25), transparent 60%), radial-gradient(900px 500px at 80% 30%, rgba(59,130,246,0.20), transparent 60%), #070812",
    color: "#EDE9FE",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
  card: {
    width: "min(920px, 100%)",
    borderRadius: "20px",
    padding: "20px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
    backdropFilter: "blur(10px)",
  },
  header: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
    padding: "8px 8px 16px",
  },
  title: {
    margin: 0,
    fontSize: "28px",
    letterSpacing: "0.2px",
  },
  subtitle: {
    margin: 0,
    opacity: 0.85,
    fontSize: "16px",
  },
  videoWrap: {
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.25)",
  },
  video: {
    width: "100%",
    height: "auto",
    display: "block",
  },

   footer: {
    marginTop: "1.5rem",
    padding: "1.5rem 1rem 1rem",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.06)",
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
  },

  note: {
    margin: "0 auto",
    maxWidth: "700px",
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(237, 233, 254, 0.92)",
  },

  buttonWrap: {
    margin: "1.25rem 0 0.75rem",
  },

  quantumButton: {
    display: "inline-block",
    padding: "0.8rem 1.5rem",
    borderRadius: "999px",
    textDecoration: "none",
    color: "#F8FAFC",
    fontSize: "0.95rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.22)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow:
      "0 0 10px rgba(0, 207, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
    transition: "all 0.3s ease",
  },
    small: {
    opacity: 0.65,
    marginTop: "0.75rem",
    fontSize: "0.9rem",
    color: "rgba(237, 233, 254, 0.7)",
  },
  
};