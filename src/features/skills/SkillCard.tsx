import { useState, type FC } from 'react';
import { Skill } from '../../types/domain';

type SkillCardProps = {
  skill: Skill;
};

export const SkillCard: FC<SkillCardProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="skill-category"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
        border: '1px solid #e0e0e0',
        borderColor: isHovered ? '#bdbdbd' : '#e0e0e0',
        padding: '2rem',
        transition: 'all 0.3s ease',
        position: 'relative',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className="skill-number">({skill.number})</div>
      <h2 className="skill-title">{skill.title}</h2>
      <p className="skill-description">{skill.description}</p>
      
      <div
        className="tech-tags"
        style={{
          marginTop: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          maxHeight: isHovered ? '100px' : '0',
          overflow: 'hidden'
        }}
      >
        {skill.technologies.map((tech, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.5rem',
              border: '1px solid #ccc',
              borderRadius: '2px',
              background: '#f9f9f9'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
