import React from 'react';
import { Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <h1 className="text-xl font-bold">上班族</h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">首页</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">关于我们</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">招聘岗位</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">联系我们</a>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3 animate-fadeIn">
            <a href="#" className="block py-2 hover:bg-blue-700 hover:bg-opacity-50 px-3 rounded transition-colors duration-200">首页</a>
            <a href="#" className="block py-2 hover:bg-blue-700 hover:bg-opacity-50 px-3 rounded transition-colors duration-200">关于我们</a>
            <a href="#" className="block py-2 hover:bg-blue-700 hover:bg-opacity-50 px-3 rounded transition-colors duration-200">招聘岗位</a>
            <a href="#" className="block py-2 hover:bg-blue-700 hover:bg-opacity-50 px-3 rounded transition-colors duration-200">联系我们</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;