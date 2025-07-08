import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold gradient-text animate-pulse-custom">ProjectAccel</div>
        <div className="hidden md:flex space-x-6 text-sm">
          <NavLink to="/" end className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>Home</NavLink>
          <NavLink to="/features" className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>Features</NavLink>
          <NavLink to="/use-cases" className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>Use Cases</NavLink>
          <NavLink to="/case-studies" className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>Case Studies</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>Pricing</NavLink>
          <NavLink to="/blog" className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-400 ${
              isActive ? 'gradient-text font-semibold' : 'text-gray-300'
            }`
          }>Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;