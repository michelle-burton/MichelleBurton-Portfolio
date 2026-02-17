import React from "react";

export default function QuantumPomThanks() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Quantum Pom</h1>
          <p style={styles.subtitle}>Thanks, AJ 💜</p>
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
            AJ — thank you for your time and for taking a look at this experiment.
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
    padding: "14px 8px 6px",
  },
  note: {
    margin: "0 0 6px",
    opacity: 0.9,
    lineHeight: 1.5,
  },
  small: {
    margin: 0,
    opacity: 0.65,
    fontSize: "13px",
  },
};