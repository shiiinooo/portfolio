import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'education';
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'senior-data-scientist',
    title: 'Senior Data Scientist',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    duration: '2023 - Present',
    type: 'work',
    description: [
      'Led development of ML models that increased customer retention by 35%',
      'Built real-time recommendation systems serving 2M+ users daily',
      'Mentored junior data scientists and established ML best practices',
      'Collaborated with product teams to translate business requirements into technical solutions'
    ],
    technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    company: 'DataVision Labs',
    location: 'New York, NY',
    duration: '2021 - 2023',
    type: 'work',
    description: [
      'Developed predictive models for financial risk assessment',
      'Implemented automated data pipelines reducing processing time by 70%',
      'Created interactive dashboards for executive decision making',
      'Published 3 research papers on machine learning applications in finance'
    ],
    technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'Tableau', 'SQL']
  },
  {
    id: 'junior-analyst',
    title: 'Junior Data Analyst',
    company: 'Analytics Pro',
    location: 'Boston, MA',
    duration: '2020 - 2021',
    type: 'work',
    description: [
      'Performed statistical analysis on customer behavior data',
      'Built automated reporting systems using Python and SQL',
      'Supported senior analysts in model development and validation',
      'Gained expertise in data visualization and business intelligence'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'R']
  },
  {
    id: 'masters-degree',
    title: 'Master of Science in Data Science',
    company: 'MIT',
    location: 'Cambridge, MA',
    duration: '2018 - 2020',
    type: 'education',
    description: [
      'Specialized in Machine Learning and Artificial Intelligence',
      'Thesis: "Deep Learning Approaches for Time Series Forecasting"',
      'GPA: 3.9/4.0, Magna Cum Laude',
      'Research Assistant in AI Ethics Lab'
    ]
  },
  {
    id: 'bachelors-degree',
    title: 'Bachelor of Science in Computer Science',
    company: 'UC Berkeley',
    location: 'Berkeley, CA',
    duration: '2014 - 2018',
    type: 'education',
    description: [
      'Focus on Algorithms and Data Structures',
      'Minor in Statistics and Mathematics',
      'Dean\'s List for 6 semesters',
      'President of Computer Science Student Association'
    ]
  }
];

const Experience: React.FC = () => {
  const workExperience = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Experience</h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto mb-8">
              A journey through my professional growth in data science and AI engineering,
              from analyst to senior technical leader.
            </p>
            
            <button className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-stone-100 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-300 dark:bg-stone-700"></div>

            {workExperience.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-6 w-4 h-4 bg-amber-600 dark:bg-amber-400 rounded-full border-4 border-stone-100 dark:border-stone-900"></div>

                <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                      <div className="flex items-center gap-4 text-stone-600 dark:text-stone-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        <span className="text-stone-700 dark:text-stone-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {experience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">Education</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-300 dark:bg-stone-700"></div>

            {education.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-stone-100 dark:border-stone-900"></div>

                <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                      <div className="flex items-center gap-4 text-stone-600 dark:text-stone-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        <span className="text-stone-700 dark:text-stone-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-stone-100 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'AWS Certified Machine Learning - Specialty',
              'Google Cloud Professional Data Engineer',
              'TensorFlow Developer Certificate',
              'Certified Analytics Professional (CAP)',
              'Microsoft Azure AI Engineer Associate',
              'Deep Learning Specialization - Coursera'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;