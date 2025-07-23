import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Zap, 
  Shield,
  Star,
  Award,
  ChevronDown,
  ChevronUp,
  Sword
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  years: number;
  projects: number;
  category: string;
  description: string;
  mastery: 'Novice' | 'Adept' | 'Expert' | 'Master' | 'Legendary';
}

const skills: Skill[] = [
  {
    name: 'Python',
    level: 95,
    years: 6,
    projects: 25,
    category: 'Programming',
    description: 'Advanced data science, ML, and backend development',
    mastery: 'Legendary'
  },
  {
    name: 'Machine Learning',
    level: 90,
    years: 5,
    projects: 20,
    category: 'AI/ML',
    description: 'Deep learning, neural networks, and predictive modeling',
    mastery: 'Master'
  },
  {
    name: 'TensorFlow',
    level: 85,
    years: 4,
    projects: 15,
    category: 'AI/ML',
    description: 'Building and deploying deep learning models',
    mastery: 'Master'
  },
  {
    name: 'AWS',
    level: 80,
    years: 4,
    projects: 18,
    category: 'Cloud',
    description: 'Cloud architecture and ML infrastructure',
    mastery: 'Expert'
  },
  {
    name: 'React',
    level: 85,
    years: 3,
    projects: 12,
    category: 'Frontend',
    description: 'Modern web applications and data visualization',
    mastery: 'Expert'
  },
  {
    name: 'PostgreSQL',
    level: 80,
    years: 5,
    projects: 22,
    category: 'Database',
    description: 'Advanced queries, optimization, and data modeling',
    mastery: 'Expert'
  }
];

const categories = [
  { name: 'All', icon: Star, color: 'from-amber-400 to-yellow-500' },
  { name: 'Programming', icon: Code, color: 'from-blue-400 to-cyan-500' },
  { name: 'AI/ML', icon: Brain, color: 'from-purple-400 to-pink-500' },
  { name: 'Cloud', icon: Cloud, color: 'from-green-400 to-emerald-500' },
  { name: 'Frontend', icon: Zap, color: 'from-orange-400 to-red-500' },
  { name: 'Database', icon: Database, color: 'from-indigo-400 to-purple-500' }
];

const masteryColors = {
  'Novice': 'from-gray-400 to-gray-500',
  'Adept': 'from-blue-400 to-blue-500',
  'Expert': 'from-purple-400 to-purple-500',
  'Master': 'from-amber-400 to-yellow-500',
  'Legendary': 'from-gradient-to-r from-amber-300 via-yellow-400 to-amber-500'
};

const SkillMastery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getMasteryStars = (mastery: string) => {
    const levels = { 'Novice': 1, 'Adept': 2, 'Expert': 3, 'Master': 4, 'Legendary': 5 };
    return levels[mastery as keyof typeof levels] || 1;
  };

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-400/30 backdrop-blur-sm mb-6">
            <Sword size={16} className="text-amber-400" />
            <span className="text-amber-100 text-sm font-medium tracking-wider">
              ABILITIES & MASTERIES
            </span>
            <Shield size={16} className="text-amber-400" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 mb-6">
            Legendary Skills
          </h2>
          
          <p className="text-xl text-amber-100/80 max-w-3xl mx-auto">
            Years of training in the mystical arts of data science and software engineering
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r ' + category.color + ' text-black shadow-lg'
                  : 'bg-black/20 text-amber-100/80 border border-amber-400/20 hover:bg-amber-500/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon size={18} />
              <span className="tracking-wider">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-100">{skill.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < getMasteryStars(skill.mastery)
                              ? 'text-amber-400 fill-current'
                              : 'text-amber-400/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mastery Level */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-amber-200/80">Mastery Level</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${masteryColors[skill.mastery]} bg-clip-text text-transparent`}>
                        {skill.mastery}
                      </span>
                    </div>
                    
                    {/* XP Bar */}
                    <div className="w-full bg-black/40 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${masteryColors[skill.mastery]} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </motion.div>
                    </div>
                    <div className="text-right text-xs text-amber-300/60 mt-1">
                      {skill.level}% Mastery
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">{skill.years}</div>
                      <div className="text-xs text-amber-200/60">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">{skill.projects}</div>
                      <div className="text-xs text-amber-200/60">Projects</div>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <motion.button
                    onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                    className="w-full flex items-center justify-center space-x-2 py-2 text-amber-300/80 hover:text-amber-200 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm">Details</span>
                    {expandedSkill === skill.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </motion.button>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-amber-400/20"
                      >
                        <p className="text-sm text-amber-100/80 leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mystical Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Achievement Badge for Legendary skills */}
                {skill.mastery === 'Legendary' && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Award size={16} className="text-black" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillMastery;