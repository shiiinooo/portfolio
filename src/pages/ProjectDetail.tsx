import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Target } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();

  // Mock project data - in a real app, this would come from an API or database
  const project = {
    title: 'AI-Powered Analytics Dashboard',
    category: 'Artificial Intelligence',
    description: 'A comprehensive business intelligence platform that leverages machine learning to provide real-time analytics and predictive insights.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    duration: '6 months',
    team: '4 developers',
    impact: '+150% decision speed',
    tags: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
    problem: 'The client needed a way to process and analyze massive datasets in real-time to make informed business decisions. Their existing reporting system was slow, manual, and couldn\'t handle the growing volume of data.',
    solution: 'I designed and built an AI-powered dashboard that automatically processes incoming data streams, applies machine learning models for predictive analytics, and presents insights through an intuitive interface. The system includes anomaly detection, trend forecasting, and automated alert systems.',
    technologies: [
      'Frontend built with React and TypeScript for optimal performance',
      'Backend API developed using Python and FastAPI',
      'Machine learning models implemented with TensorFlow and Scikit-learn',
      'Real-time data processing with Apache Kafka',
      'Cloud infrastructure on AWS with auto-scaling capabilities',
      'PostgreSQL database with optimized queries for large datasets'
    ],
    results: [
      'Reduced data processing time from hours to minutes',
      'Increased prediction accuracy by 40% compared to previous methods',
      'Enabled real-time decision making for critical business operations',
      'Saved the company over $500K annually in operational costs'
    ],
    challenges: [
      'Handling real-time data streams with varying formats and quality',
      'Ensuring model accuracy while maintaining low latency',
      'Designing an intuitive UI for complex data visualizations',
      'Implementing robust error handling and data validation'
    ],
    learnings: 'This project taught me the importance of close collaboration between data science and engineering teams. I learned to balance model complexity with performance requirements and gained valuable experience in building production-ready ML systems.'
  };

  return (
    <div className="pt-20">
      {/* Navigation */}
      <section className="py-8 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium rounded-full">
                {project.category}
              </span>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-medium rounded-lg hover:scale-105 transition-transform"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-stone-300 dark:border-stone-700 font-medium rounded-lg hover:border-amber-600 dark:hover:border-amber-400 hover:scale-105 transition-all"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-stone-100 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, label: 'Duration', value: project.duration },
              { icon: Users, label: 'Team Size', value: project.team },
              { icon: Target, label: 'Impact', value: project.impact }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg"
              >
                <stat.icon size={40} className="text-amber-600 dark:text-amber-400 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-stone-600 dark:text-stone-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              {project.problem}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Solution</h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
              {project.solution}
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Technical Implementation</h3>
            <ul className="space-y-3">
              {project.technologies.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-stone-700 dark:text-stone-300">{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800"
                >
                  <p className="text-green-800 dark:text-green-200">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Challenges Overcome</h2>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-stone-700 dark:text-stone-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Key Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800"
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-800 dark:text-amber-200">Key Learnings</h2>
            <p className="text-lg text-amber-700 dark:text-amber-300 leading-relaxed">
              {project.learnings}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;