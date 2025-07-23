import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scroll, Sword, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagicalParticles from './MagicalParticles';
import VideoBackground from './VideoBackground';

const EpicHero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Epic Video Background */}
      <VideoBackground 
        src="/src/assets/videos/bg.mp4"
        fallbackImage="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
        overlay={false}
      />
      
      {/* Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-amber-900/40" />
      
      {/* Magical Particles */}
      <MagicalParticles count={30} />
      
      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Epic Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-400/30 backdrop-blur-sm"
            >
              <Sword size={16} className="text-amber-400" />
              <span className="text-amber-100 text-sm font-medium tracking-wider">
                THE LEGEND BEGINS
              </span>
              <Shield size={16} className="text-amber-400" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              AHMED
              <br />
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
              >
                EL GHASSIB
                {/* Mystical Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 blur-2xl -z-10"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-amber-100/90 font-medium tracking-wide max-w-4xl mx-auto"
            >
              <span className="text-amber-300">Data Scientist</span> & <span className="text-amber-300">AI Engineer</span>
              <br />
              <span className="text-lg md:text-xl text-amber-200/80">
                Forging intelligent solutions from the realm of data
              </span>
            </motion.div>
          </div>

          {/* Epic Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-lg md:text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed"
          >
            Embark on a journey through the mystical realms of machine learning and artificial intelligence, 
            where data transforms into wisdom and algorithms become legendary tools of innovation.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/projects"
              className="group relative"
            >
              <motion.div
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Scroll size={20} />
                <span className="tracking-wider">BEGIN QUEST</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
              
              {/* Epic Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg blur-xl opacity-50 -z-10"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>

            <Link
              to="/contact"
              className="group relative"
            >
              <motion.div
                className="flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-amber-400/50 text-amber-100 font-bold rounded-lg backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  borderColor: "rgba(251, 191, 36, 0.8)",
                  backgroundColor: "rgba(251, 191, 36, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Shield size={20} />
                <span className="tracking-wider">JOIN FELLOWSHIP</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-amber-200/60"
            >
              <span className="text-sm tracking-wider">SCROLL TO EXPLORE</span>
              <div className="w-6 h-10 border-2 border-amber-400/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-amber-400/60 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EpicHero;