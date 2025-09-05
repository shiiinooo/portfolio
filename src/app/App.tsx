import { useState, useEffect, useRef } from "react";
import { Container } from "../ui/Container";
import { AboutSection } from "../features/about/AboutSection";
import { SkillsSection } from "../features/skills/SkillsSection";
import { ProjectsSection } from "../features/projects/ProjectsSection";
import computerImg from "../assets/computer.png";
import cvPdf from "../assets/ahmed-elghassib-cv.pdf";
import "../styles/globals.css";

const Portfolio = () => {
   const [cursorVisible, setCursorVisible] = useState(true);
  const footerRef = useRef<HTMLElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Edge typography: left/right continuous, bottom appears on footer */}
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
      
      {/* Header */}
      <Container>
        <header
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            position: "relative",
          }}
        >
          <div className="nav-wrapper">
            <div className="hamburger" aria-label="Open navigation" role="button">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="hover-bar" role="menu">
              <div className="menu">
                <a href="#about" role="menuitem">ABOUT</a>
                <a href="#skills" role="menuitem">SKILLS</a>
                <a href="#projects" role="menuitem">SELECTED WORK</a>
                <a href="#contact" role="menuitem">CONTACT</a>
              </div>
            </div>
          </div>

          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left Column - Text Content */}
            <div
              className="hero-text"
              style={{
                maxWidth: "65ch",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  opacity: 0.8,
                  fontWeight: 400,
                }}
              >
                Hello, I'm
              </p>
              
              <h1
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 0.9,
                  marginBottom: "1.5rem",
                  whiteSpace: "nowrap",
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
                  fontSize: "1.2rem",
                  marginBottom: "3rem",
                  opacity: 0.8,
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                Data & AI Engineer crafting intelligent search systems, scraping pipelines, and NL2SQL solutions for complex data problems.
              </p>

              {/* CTA Buttons */}
              <div
                className="hero-buttons"
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={scrollToProjects}
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  View Projects
                </button>
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "transparent",
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.6"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div
                className="hero-social"
                style={{
                  display: "flex",
                  gap: "2rem",
                  fontSize: "0.9rem",
                }}
              >
                <a
                  href="mailto:elghassibahmed@gmail.com"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.6"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  rel="noopener"
                >
                  Email
                </a>
                <a 
                  href="https://github.com/shiiinooo"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.6"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  rel="noopener"
                  target="_blank"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ahmed-el-ghassib/"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.6"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  rel="noopener"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "500px",
                }}
              >
                {/* Computer Image */}
                <img
                  src={computerImg}
                  alt="Retro computer illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    filter: "grayscale(100%)",
                    transform: "scaleX(-1)",
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scroll Cue */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "0.8rem",
              opacity: 0.6,
              animation: "bounce 2s infinite",
            }}
          >
            Scroll ↓
          </div>
        </header>
      </Container>
 
      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <footer
        ref={footerRef}
        style={{
          padding: "3rem 0",
          textAlign: "center",
          borderTop: "1px solid #e0e0e0",
          position: "relative",
          zIndex: 20,
          background: "#ffffff",
        }}
      >
        <Container>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            LET'S BUILD SOMETHING
          </div>
          <div
            style={{
              fontSize: "1rem",
              opacity: 0.8,
            }}
          >
            ELGHASSIBAHMED@GMAIL.COM
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;
