import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Data Scientist and AI Engineer with a mission to transform 
              complex data into actionable insights that drive meaningful business decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-stone-100 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                With over 5 years of experience in data science and AI engineering, I've had the 
                privilege of working on projects that span from predictive analytics for Fortune 
                500 companies to cutting-edge machine learning research.
              </p>
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                My expertise lies in building end-to-end machine learning pipelines, designing 
                scalable data architectures, and translating complex technical concepts into 
                business value. I believe in the power of AI for good and am committed to 
                developing ethical, transparent, and impactful solutions.
              </p>
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                When I'm not diving deep into data, you'll find me contributing to open-source 
                projects, mentoring aspiring data scientists, or exploring the latest developments 
                in artificial intelligence research.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-96 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl"
            >
              {/* Placeholder for professional photo or branded illustration */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Beliefs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What I Believe In</h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              My core principles guide every project and collaboration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "AI for Good",
                description: "Leveraging artificial intelligence to solve meaningful problems and create positive societal impact."
              },
              {
                icon: BookOpen,
                title: "Continuous Learning",
                description: "Staying at the forefront of rapidly evolving AI technologies and methodologies."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Building bridges between technical teams and business stakeholders for optimal outcomes."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering high-quality, robust solutions that exceed expectations and drive results."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={32} className="text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-stone-100 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Career Highlights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "50+",
                label: "ML Models Deployed",
                description: "Production-ready models serving millions of users"
              },
              {
                metric: "95%",
                label: "Client Satisfaction",
                description: "Consistently delivering value and exceeding expectations"
              },
              {
                metric: "10+",
                label: "Open Source Contributions",
                description: "Active contributor to the AI/ML community"
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg"
              >
                <div className="text-4xl lg:text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-xl font-semibold mb-4">{achievement.label}</div>
                <p className="text-stone-600 dark:text-stone-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;