import { FC } from 'react';
import { Container } from '../../ui/Container';
import { SkillCard } from './SkillCard';
import { skills } from '../../data/skills';

export const SkillsSection: FC = () => {
  return (
    <section 
      id="skills"
      style={{
        padding: "5rem 0",
        borderTop: "1px solid #e0e0e0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "2rem",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          SKILLS
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(1.5rem, 4vw, 3rem)",
            marginTop: "3rem",
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
};
