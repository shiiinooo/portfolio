import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'WELCOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-100/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            AHMED EL GHASSIB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wider transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-amber-400 dark:to-amber-600 transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-700 ease-in-out flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Sun 
                    size={14} 
                    className={`absolute inset-0 m-auto text-amber-500 transition-all duration-500 ease-in-out ${
                      theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
                    }`} 
                  />
                  <Moon 
                    size={14} 
                    className={`absolute inset-0 m-auto text-slate-700 transition-all duration-500 ease-in-out ${
                      theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                    }`} 
                  />
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Stars for dark mode */}
                <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Clouds for light mode */}
                <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-1.5 right-2 w-2 h-1 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-1.5 right-3 w-1.5 h-0.5 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-amber-400 dark:to-amber-600 transition-all duration-700 ease-in-out shadow-lg"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-700 ease-in-out flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Sun 
                    size={14} 
                    className={`absolute inset-0 m-auto text-amber-500 transition-all duration-500 ease-in-out ${
                      theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
                    }`} 
                  />
                  <Moon 
                    size={14} 
                    className={`absolute inset-0 m-auto text-slate-700 transition-all duration-500 ease-in-out ${
                      theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                    }`} 
                  />
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Stars for dark mode */}
                <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Clouds for light mode */}
                <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-1.5 right-2 w-2 h-1 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-1.5 right-3 w-1.5 h-0.5 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-stone-200 dark:border-stone-800 pt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium tracking-wider transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;