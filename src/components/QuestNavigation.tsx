import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Scroll, 
  Sword, 
  Shield, 
  Crown,
  Map,
  BookOpen,
  MessageCircle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const QuestNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Calculate scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const questItems = [
    { 
      name: 'THE LEGEND', 
      path: '/', 
      icon: Crown,
      description: 'Begin the epic journey',
      completed: true
    },
    { 
      name: 'ORIGIN STORY', 
      path: '/about', 
      icon: BookOpen,
      description: 'Discover the hero\'s past',
      completed: location.pathname === '/about'
    },
    { 
      name: 'ABILITIES', 
      path: '/projects', 
      icon: Sword,
      description: 'Witness legendary quests',
      completed: location.pathname === '/projects'
    },
    { 
      name: 'CHRONICLES', 
      path: '/experience', 
      icon: Scroll,
      description: 'Tales of past adventures',
      completed: location.pathname === '/experience'
    },
    { 
      name: 'FELLOWSHIP', 
      path: '/contact', 
      icon: MessageCircle,
      description: 'Join the quest',
      completed: location.pathname === '/contact'
    },
  ];

  return (
    <>
      {/* Journey Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
      />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Hero's Mark */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300">
                <Crown size={20} className="text-black" />
              </div>
              <div className="hidden md:block">
                <div className="text-xl font-bold text-amber-100 tracking-wider">
                  AHMED EL GHASSIB
                </div>
                <div className="text-xs text-amber-300/80 tracking-widest">
                  LEGENDARY DEVELOPER
                </div>
              </div>
            </Link>

            {/* Desktop Quest Journal */}
            <div className="hidden lg:flex items-center space-x-1">
              {questItems.map((quest, index) => (
                <Link
                  key={quest.path}
                  to={quest.path}
                  className="group relative"
                >
                  <motion.div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      location.pathname === quest.path
                        ? 'bg-amber-500/20 text-amber-100 shadow-lg shadow-amber-500/20'
                        : 'text-amber-200/80 hover:text-amber-100 hover:bg-amber-500/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <quest.icon size={16} />
                    <span className="text-sm font-medium tracking-wider">
                      {quest.name}
                    </span>
                    {quest.completed && (
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Mystical Glow Effect */}
                  {location.pathname === quest.path && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-lg blur-sm -z-10"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Mystical Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative w-16 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-amber-500 to-yellow-600 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-500 ${
                    theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sun size={14} className="text-amber-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Moon size={14} className="text-slate-700" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Magical particles */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${15 + i * 25}%`,
                      }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.button>

              {/* Mobile Quest Map Toggle */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg bg-amber-500/20 text-amber-100 border border-amber-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Map size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Quest Map */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 pb-4 border-t border-amber-500/20 pt-4 overflow-hidden"
              >
                <div className="space-y-2">
                  {questItems.map((quest, index) => (
                    <motion.div
                      key={quest.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={quest.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                          location.pathname === quest.path
                            ? 'bg-amber-500/20 text-amber-100'
                            : 'text-amber-200/80 hover:bg-amber-500/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <quest.icon size={18} />
                          <div>
                            <div className="font-medium tracking-wider">
                              {quest.name}
                            </div>
                            <div className="text-xs text-amber-300/60">
                              {quest.description}
                            </div>
                          </div>
                        </div>
                        {quest.completed && (
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default QuestNavigation;