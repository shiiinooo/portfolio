// Import necessary libraries and components
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Main App component
function App() {
  // State variables for active section and loading status
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Array of section names
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  // Object to store references to section elements
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // Effect hook to handle scroll event and update active section
  useEffect(() => {
    // Set timeout to simulate loading delay
    setTimeout(() => setIsLoading(false), 1000);

    // Function to handle scroll event
    const handleScroll = () => {
      // Calculate scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Iterate through sections and update active section
      for (const section of sections) {
        const element = sectionRefs[section].current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (section: string) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Array of skills
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'C#', category: 'Programming' },

    { name: 'SQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Microsoft SQL Server', category: 'Database' },

    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'Hadoop', category: 'Big Data' },

    { name: 'Data Visualization', category: 'Analytics' },
    { name: 'PowerBI', category: 'Analytics' },
    { name: 'QlikView', category: 'Analytics' },

    { name: 'ETL Pipelines', category: 'Data Engineering' },
    { name: 'Apache Airflow', category: 'Data Engineering' },

    { name: 'LangChain', category: 'AI/ML' },
    { name: 'LangGraph', category: 'AI/ML' },
    { name: 'Groq LLM', category: 'AI/ML' },
    { name: 'Machine Learning', category: 'AI/ML' },

    { name: 'Terraform', category: 'DevOps' },
    { name: 'Jenkins', category: 'DevOps' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Azure DevOps', category: 'DevOps' },

    { name: 'Git', category: 'Version Control' },
    { name: 'GitHub', category: 'Version Control' },
    { name: 'GitLab', category: 'Version Control' },

    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },

    { name: 'Whatever I need to get the job done', category: 'Web Development' }
];

  // Array of projects
  const projects = [
    {
      title: 'Infrastructure Big Data - Emergency Calls Analysis',
      period: 'Sept 2024 - Present',
      description: 'Comprehensive Big Data architecture for emergency calls processing system',
      highlights: [
        'Developed Python-based data ingestion solution on VM',
        'Implemented distributed Hadoop cluster (1 NameNode, 2 DataNodes)',
        'Built data transformation layer using Apache Spark and Java',
        'Configured MongoDB for flexible NoSQL storage',
        'Orchestrated data flows with Apache NiFi',
        'Created analytical dashboards using Power BI',
        'Automated pipeline with Apache Airflow and Bash scripts'
      ],
      technologies: ['Python', 'Java', 'Hadoop', 'Spark', 'NiFi', 'MongoDB', 'MySQL', 'Airflow', 'Power BI'],
      category: 'Big Data'
    },
    {
      title: 'AWS Cloud Data Platform',
      period: 'Jan 2024 - Present',
      description: 'Enterprise-scale data platform leveraging AWS services',
      highlights: [
        'Architected serverless data pipeline using AWS Lambda',
        'Implemented data lake using S3 and AWS Glue',
        'Built real-time processing with Kinesis Streams',
        'Deployed automated ETL jobs using AWS Step Functions',
        'Integrated Amazon QuickSight for BI reporting',
        'Implemented data security using AWS IAM and KMS'
      ],
      technologies: ['AWS Lambda', 'S3', 'Glue', 'Kinesis', 'Step Functions', 'QuickSight', 'IAM', 'CloudFormation'],
      category: 'Cloud'
    },
    {
      title: 'AI-Powered SQL Assistant',
      period: 'Sep 2024 - Jan 2025',
      description: "A Streamlit-based web application that allows users to interact with a MySQL database using natural language.",
      highlights: [
        "Implemented natural language to SQL conversion using Groq LLM",
        "Developed an interactive chat interface with Streamlit",
        "Integrated MySQL database connectivity for real-time queries",
        "Executed SQL queries and displayed results in a human-readable format",
        "Maintained conversation history for better query tracking"
      ],
      technologies: ["Python", "Streamlit", "MySQL", "LangChain", "Groq LLM", "Conda"],
      category: "AI"
    },
    {
      title: 'Engimax Search Engine',
      period: 'Jan 2025 - Present',
      description: "A query processing system using LangGraph for handling both data-related (performing semantic search) and general queries.",
      highlights: [
        "Implemented query type classification using Mistral LLM",
        "Integrated ChromaDB for data-related query retrieval",
        "Utilized Exa search engine for web-based general queries",
        "Generated responses using Mistral LLM",
        "Configured system to adjust retrieval parameters and modify prompts"
      ],
      technologies: ["Python", "LangGraph", "ChromaDB", "Exa", "Mistral LLM"],
      category: "AI"
    }
  ];

  return (
    <div className="bg-[#F9F5EB] min-h-screen text-[#002B5B]">
      {/* Loading screen */}
      {isLoading ? (
        <motion.div
          className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-24 h-24">
            {/* Outer Circle */}
            <motion.div
              className="absolute w-full h-full border-4 border-[#002B5B] border-t-[#EA5455] rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            ></motion.div>

            {/* Inner Circle */}
            <motion.div
              className="absolute w-16 h-16 border-4 border-[#EA5455] border-t-[#002B5B] rounded-full"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1]
              }}
              transition={{
                rotate: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }
              }}
            ></motion.div>

            {/* Vintage Ornament */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#EA5455] text-2xl"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✦
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Fixed Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-[#F9F5EB]/90 backdrop-blur-sm z-50 py-4 shadow-md">
            <div className="container mx-auto px-4">
              <ul className="flex justify-center space-x-8">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`capitalize font-medium hover:text-[#EA5455] transition-colors ${activeSection === section ? 'text-[#EA5455]' : ''
                        }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <div className="pt-20">
            {/* Home Section */}
            <motion.section
              ref={sectionRefs.home}
              className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="text-center relative z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 50,
                  damping: 20
                }}
              >
                <motion.h1
                  className="text-5xl font-bold mb-4 text-[#002B5B]"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  Ahmed EL GHASSIB
                </motion.h1>

                <motion.p
                  className="text-xl mb-12 text-[#002B5B]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: 0.4
                  }}
                >
                  Data Engineer & AI Enthusiast
                </motion.p>

                <motion.div
                  className="vintage-card p-8 relative"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 20,
                    delay: 0.6
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                >
                  <motion.h2
                    className="text-4xl md:text-6xl font-bold text-[#002B5B] mb-6"
                    style={{ fontFamily: 'Georgia, serif' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 20,
                      delay: 0.8
                    }}
                  >
                    "Transforming Data into Insights"
                  </motion.h2>

                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.5, 1]
                    }}
                  >
                    <span className="text-[#EA5455] text-2xl">✦</span>
                  </motion.div>

                  <motion.p
                    className="text-xl text-[#002B5B] italic relative z-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 20,
                      delay: 1
                    }}
                  >
                    Where Big Data meets Artificial Intelligence
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Background Animation Elements */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 30}%`,
                      width: "2px",
                      height: "2px",
                      background: "#EA5455"
                    }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                ))}
              </motion.div>
            </motion.section>

            {/* About Section */}
            <motion.section
              ref={sectionRefs.about}
              className="min-h-screen flex items-center justify-center p-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="container mx-auto max-w-5xl"> {/* Increased max-width */}
                <motion.h2
                  className="text-4xl font-bold mb-12 text-center"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  About Me
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    className="vintage-card p-6 " /* Increased width */
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                  >
                    <img
                      src="assets/image.png"
                      alt="Profile"
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="vintage-card p-8 md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.p
                      className="text-lg leading-relaxed text-[#002B5B]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Hi! I'm Ahmed, a passionate Data Engineering student, I'm on a journey to master the intersection of Big Data and Artificial Intelligence. My focus lies in building scalable data solutions and implementing AI-driven analytics that transform raw data into actionable insights.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              ref={sectionRefs.skills}
              className="min-h-screen p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
                {/* Skills Carousel Container */}
                <div className="relative overflow-hidden group">
                  {/* Gradient Overlay for Smooth Edges */}
                  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F9F5EB] to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F9F5EB] to-transparent z-10 pointer-events-none"></div>
                  {/* Skills Carousel Track */}
                  <motion.div
                    className="flex space-x-6 py-4"
                    animate={{
                      x: [0, -1920]
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 1]
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                  >
                    {/* Render Skill Cards */}
                    {Object.entries(
                      skills.reduce((acc, skill) => ({
                        ...acc,
                        [skill.category]: [...(acc[skill.category] || []), skill.name],
                      }), {})
                    ).map(([category, skillList], index) => (
                      <motion.div
                        key={category}
                        className="vintage-border p-6 rounded-lg flex-shrink-0 w-64 cursor-pointer hover:scale-105 transition-transform"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <h3 className="text-xl font-bold mb-4">{category}</h3>
                        <ul className="space-y-2">
                          {(skillList as string[]).map((skill) => (
                            <li key={skill} className="text-lg">{skill}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                    {/* Duplicate cards for seamless loop */}
                    {Object.entries(
                      skills.reduce((acc, skill) => ({
                        ...acc,
                        [skill.category]: [...(acc[skill.category] || []), skill.name],
                      }), {})
                    ).map(([category, skillList], index) => (
                      <motion.div
                        key={`${category}-duplicate`}
                        className="vintage-border p-6 rounded-lg flex-shrink-0 w-64 cursor-pointer hover:scale-105 transition-transform"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <h3 className="text-xl font-bold mb-4">{category}</h3>
                        <ul className="space-y-2">
                          {(skillList as string[]).map((skill) => (
                            <li key={skill} className="text-lg">{skill}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              ref={sectionRefs.projects}
              className="min-h-screen p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="container mx-auto max-w-4xl">
                <motion.h2
                  className="text-4xl font-bold mb-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  Projects
                </motion.h2>
                <div className="space-y-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="vintage-border p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100,
                        rotateY: index % 2 === 0 ? -10 : 10
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        rotateY: 0
                      }}
                      whileHover={{
                        scale: 1.02,
                        translateY: -5,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.h3
                        className="text-2xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {project.period}
                      </motion.p>
                      <motion.p
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.ul
                        className="list-disc list-inside mb-4 space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                        viewport={{ once: true }}
                      >
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + 0.7 + (i * 0.1) }}
                            viewport={{ once: true }}
                          >
                            {highlight}
                          </motion.li>
                        ))}
                      </motion.ul>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="bg-[#002B5B] text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-[#003B7B] transition-colors"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                              delay: index * 0.2 + 0.8 + (i * 0.1),
                              type: "spring",
                              stiffness: 200
                            }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              ref={sectionRefs.contact}
              className="min-h-screen flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                <p className="text-lg mb-8">
                  I'm always open to new opportunities and collaborations.
                  Feel free to reach out if you'd like to connect!
                </p>

                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/shiiinooo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vintage-border p-2 rounded-lg">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/ahmed-el-ghassib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vintage-border p-2 rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:elghassibahmed@gmail.com"
                    className="vintage-border p-2 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="assets/el_ghassib_ahmed_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vintage-border p-2 rounded-lg">
                    <FileText className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Footer */}
          <footer className="bg-[#F9F5EB] text-[#002B5B] py-6 shadow-md mt-20 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex space-x-8">
                  <a href="https://github.com/shiiinooo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
                    <Github size={20} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/ahmed-el-ghassib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
                    <Linkedin size={20} /> LinkedIn
                  </a>
                  <a href="mailto:your@email.com"
                    className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
                    <Mail size={20} /> Email
                  </a>
                </div>
                <div>
                  <a href="assets/el_ghassib_ahmedcv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
                    <FileText size={20} /> Resume
                  </a>
                </div>
              </div>
              <div className="text-center mt-6 text-sm text-[#002B5B]/70">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;