import { useState, type FC } from 'react';
import { Project } from '../../types/domain';

type ProjectCardProps = {
  project: Project;
  activeProjectId: number | null;
  onToggle: (projectId: number) => void;
};

export const ProjectCard: FC<ProjectCardProps> = ({ project, activeProjectId, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isActive = activeProjectId === project.id;

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onToggle(project.id)}
      style={{
        border: '1px solid #e0e0e0',
        borderColor: isHovered ? '#bdbdbd' : '#e0e0e0',
        padding: '2rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontSize: '0.7rem',
          opacity: 0.6
        }}
      >
        {project.status}
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-tech">{project.tech}</p>
      <p className="project-description">{project.description}</p>

      <div
        className="project-links"
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1rem'
        }}
      >
        <a
          href={project.links.demo}
          style={{
            color: '#000',
            textDecoration: 'none',
            fontSize: '0.8rem',
            borderBottom: '1px solid #d0d0d0',
            paddingBottom: '2px',
            transition: 'border-color 0.3s ease',
            borderBottomColor: isHovered ? '#000' : '#d0d0d0'
          }}
        >
          LIVE DEMO
        </a>
        <a
          href={project.links.code}
          style={{
            color: '#000',
            textDecoration: 'none',
            fontSize: '0.8rem',
            borderBottom: '1px solid #d0d0d0',
            paddingBottom: '2px',
            transition: 'border-color 0.3s ease',
            borderBottomColor: isHovered ? '#000' : '#d0d0d0'
          }}
        >
          VIEW CODE
        </a>
      </div>

      {isActive && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            border: '1px solid #e0e0e0',
            background: '#fafafa',
            animation: 'slideDown 0.3s ease'
          }}
        >
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            Click the links above to explore this project in detail. This expanded view could show screenshots, technical details, or challenges overcome.
          </p>
        </div>
      )}
    </div>
  );
};
