import React from 'react';
import { ModeToggle } from './theme-toggle';

const Header: React.FC = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 rounded-full px-6 py-3 shadow-lg">
        <ul className="flex items-center space-x-6">
          <li><a href="#home" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">Home</a></li>
          <li><a href="#about" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">About</a></li>
          <li><a href="#projects" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">Projects</a></li>
          <li><a href="#contact" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">Contact</a></li>
          <li><ModeToggle /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
