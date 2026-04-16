import React from 'react';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background font-sans text-gray-200 selection:bg-accent-purple selection:text-white">
      <CustomCursor />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
