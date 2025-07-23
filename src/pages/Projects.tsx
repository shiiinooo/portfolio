import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence platform with predictive analytics capabilities, processing over 1M+ data points daily.',
    category: 'AI',
    tags: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    id: 'nlp-sentiment-analysis',
    title: 'NLP Sentiment Analysis Tool',
    description: 'Advanced sentiment analysis system for social media monitoring with 94% accuracy on multilingual text.',
    category: 'NLP',
    tags: ['Python', 'BERT', 'FastAPI', 'Docker', 'Redis'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    github: 'https://github.com',
    featured: true
  },
  {
    id: 'computer-vision-pipeline',
    title: 'Computer Vision Quality Control',
    description: 'Automated defect detection system for manufacturing, reducing inspection time by 80%.',
    category: 'Computer Vision',
    tags: ['PyTorch', 'OpenCV', 'MLOps', 'GCP', 'Kubernetes'],
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
    demo: 'https://demo.com',
    featured: true
  },
  {
    id: 'recommendation-engine',
    title: 'Personalized Recommendation Engine',
    description: 'Machine learning system powering product recommendations for e-commerce platform.',
    category: 'ML',
    tags: ['Python', 'Scikit-learn', 'Apache Spark', 'Kafka'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    github: 'https://github.com',
    featured: false
  },
  {
    id: 'data-pipeline',
    title: 'Real-time Data Pipeline',
    description: 'Scalable ETL pipeline processing streaming data from multiple sources.',
    category: 'Data Engineering',
    tags: ['Apache Airflow', 'Python', 'AWS', 'Snowflake'],
    image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
    featured: false
  },
  {
    id: 'chatbot-ai',
    title: 'Intelligent Customer Support Bot',
    description: 'AI chatbot with natural language understanding and contextual responses.',
    category: 'NLP',
    tags: ['Python', 'Transformers', 'FastAPI', 'WebSocket'],
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
    demo: 'https://demo.com',
    featured: false
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const categories = ['All', 'AI', 'ML', 'NLP', 'Computer Vision', 'Data Engineering'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const featuredMatch = !showFeaturedOnly || project.featured;
    return categoryMatch && featuredMatch;
  });

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              A collection of AI and data science projects showcasing innovation, 
              technical expertise, and real-world impact.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-stone-600 dark:text-stone-400" />
              <span className="text-sm font-medium text-stone-600 dark:text-stone-400">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                className="w-4 h-4 text-amber-600 bg-stone-100 border-stone-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-stone-800 focus:ring-2 dark:bg-stone-700 dark:border-stone-600"
              />
              <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Featured only</span>
            </label>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-stone-100 dark:bg-stone-700 text-xs font-medium rounded">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-stone-100 dark:bg-stone-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
                    >
                      Case Study →
                    </Link>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-stone-600 dark:text-stone-400">
                No projects found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;