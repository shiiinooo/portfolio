import React from "react";
import EpicHero from "../components/EpicHero";
import SkillMastery from "../components/SkillMastery";
import MagicalParticles from "../components/MagicalParticles";

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Global Magical Particles */}
      <MagicalParticles count={50} className="fixed inset-0 z-10" />
      
      {/* Epic Hero Section */}
      <EpicHero />
      
      {/* Skills Mastery Section */}
      <SkillMastery />
    </div>
  );
};

export default Home;
