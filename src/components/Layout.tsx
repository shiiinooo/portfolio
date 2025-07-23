import React from 'react';
import QuestNavigation from './QuestNavigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-amber-100 transition-all duration-500 overflow-x-hidden">
      <QuestNavigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;