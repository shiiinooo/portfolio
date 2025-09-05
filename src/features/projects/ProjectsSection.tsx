import { FC, useState } from 'react';
import { Container } from '../../ui/Container';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export const ProjectsSection: FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section 
      id="projects"
      style={{
        padding: "5rem 0",
        backgroundColor: "#ffffff",
        color: "#000000",
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
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          SELECTED WORK
        </h2>
        
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1.5rem, 4vw, 2rem)",
            marginTop: "3rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              activeProjectId={activeProject}
              onToggle={(id) =>
                setActiveProject(activeProject === id ? null : id)
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
