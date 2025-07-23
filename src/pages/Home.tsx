import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Brain, Code } from "lucide-react";
import { Link } from "react-router-dom";
import VideoBackground from "../components/VideoBackground";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-emerald-900/50 via-teal-800/50 to-cyan-900/50">
        {/* Video Background (uncomment and add your video URL) */}
        <VideoBackground
          src="/src/assets/videos/bg.mp4"
          fallbackImage="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
          overlay={true}
        />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pointer-events-auto"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                AHMED
                <br />
                EL GHASSIB*
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 dark:text-stone-400 max-w-lg">
                Turning data into decisions through AI innovation
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-stone-700 dark:text-stone-300 max-w-xl">
                Data Scientist & AI Engineer passionate about building
                intelligent systems that solve real-world problems. Specializing
                in machine learning, deep learning, and scalable data solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-stone-300 dark:border-stone-700 hover:border-amber-600 dark:hover:border-amber-400 font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          {/* Empty space for layout balance - 3D scene is now background */}
          <div className="hidden lg:block"></div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-20 bg-stone-200/50 dark:bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build intelligent,
              scalable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Data Engineering",
                skills: ["Python", "SQL", "Apache Spark", "Docker", "AWS"],
              },
              {
                icon: Brain,
                title: "Machine Learning",
                skills: [
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "MLOps",
                  "AutoML",
                ],
              },
              {
                icon: Code,
                title: "Development",
                skills: ["React", "FastAPI", "PostgreSQL", "Git", "CI/CD"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <category.icon
                  size={40}
                  className="text-amber-600 dark:text-amber-400 mb-4"
                />
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Work</h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Recent projects showcasing AI innovation and data-driven solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI-Powered Analytics Dashboard",
                description:
                  "Real-time business intelligence platform with predictive analytics",
                tags: ["React", "Python", "TensorFlow", "AWS"],
              },
              {
                title: "NLP Sentiment Analysis Tool",
                description:
                  "Advanced sentiment analysis for social media monitoring",
                tags: ["Python", "NLP", "Docker", "FastAPI"],
              },
              {
                title: "Computer Vision Pipeline",
                description:
                  "Automated image classification system for manufacturing",
                tags: ["PyTorch", "OpenCV", "MLOps", "GCP"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-4">
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
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-medium rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
