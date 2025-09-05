import { useState, useEffect } from "react";
import computerImg from "../assets/computer.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Blinking cursor effect (matching your app's cursor)
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simple loading timer with transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      // Complete transition after animation
      setTimeout(() => {
        onComplete();
      }, 800); // Shorter transition duration for smoother feel
    }, 1500); // Slightly longer display time for better UX

    return () => clearTimeout(timer);
  }, []); // Remove onComplete dependency to prevent timer reset

  // Loading text animation
  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const dots = prev.split('.').length - 1;
        if (dots >= 3) return "Loading";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Edge typography decorations (matching your app) */}
      <div className="edge-text edge-vertical edge-left" aria-hidden="true">
        <div className="edge-vertical__track">
          <span className="edge-vertical__text">AHMED EL GHASSIB — DATA & AI ENGINEER • </span>
          <span className="edge-vertical__text">AHMED EL GHASSIB — DATA & AI ENGINEER • </span>
        </div>
      </div>
      <div className="edge-text edge-vertical edge-right" aria-hidden="true">
        <div className="edge-vertical__track">
          <span className="edge-vertical__text">AHMED EL GHASSIB — DATA & AI ENGINEER • </span>
          <span className="edge-vertical__text">AHMED EL GHASSIB — DATA & AI ENGINEER • </span>
        </div>
      </div>

      {/* Main loading content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
          maxWidth: "600px",
          width: "100%",
          padding: "0 2rem",
        }}
      >
        {/* Computer Image (matching your hero section) */}
        <div
          style={{
            position: "relative",
            width: "200px",
            height: "auto",
          }}
        >
          <img
            src={computerImg}
            alt="Loading..."
            style={{
              width: "100%",
              height: "auto",
              filter: "grayscale(100%)",
              transform: "scaleX(-1)",
              animation: "float 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Loading Text */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              marginBottom: "1rem",
              color: "#000",
            }}
          >
            Ahmed EL GHASSIB
            <span
              style={{
                opacity: cursorVisible ? 1 : 0,
                transition: "opacity 0.1s",
                fontWeight: 900,
              }}
            >
              _
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.8,
              fontWeight: 400,
              marginBottom: "2rem",
            }}
          >
            {loadingText}
            <span
              style={{
                opacity: cursorVisible ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              _
            </span>
          </p>

        </div>
      </div>

      {/* Bottom edge text (matching your footer style) */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.8rem",
          opacity: 0.6,
          fontWeight: 400,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Data & AI Engineer
      </div>
    </div>
  );
};
