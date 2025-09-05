import { FC } from 'react';
import { Container } from '../../ui/Container';
import meImg from '../../assets/me.png';

export const AboutSection: FC = () => {
  return (
    <section 
      id="about"
      aria-label="About Me"
      style={{
        padding: "5rem 0",
        borderTop: "1px solid #e0e0e0",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "2rem",
            letterSpacing: "-0.02em",
            textAlign: "left",
          }}
        >
          ABOUT ME
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              maxWidth: 900,
              opacity: 0.9,
            }}
          >
            Hey, I’m Ahmed EL GHASSIB, a Data & AI Engineer who spends way too much time turning messy data into something actually useful. I work across data engineering, automation, and applied AI which basically means I build pipelines, workflows, and tools so teams don’t have to fight with spreadsheets at 2 AM.
            I like building things that are not just technically solid, but also practical and easy to use. I’m the kind of person who gets excited when a script saves someone hours of manual work (yes, I celebrate with coffee). Outside of code, I’m fueled by curiosity, problem-solving, and the occasional bad pun about data “cleaning.”
          </p>

          <img
            src={meImg}
            alt="Portrait"
            style={{
              width: "70%",
              maxWidth: "360px",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
              filter: "grayscale(100%)",
              justifySelf: "center",
            }}
          />
        </div>
      </Container>
    </section>
  );
};
