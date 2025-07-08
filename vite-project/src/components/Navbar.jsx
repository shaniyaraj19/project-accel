import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
  `relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:font-medium ${
    isActive ? 'gradient-text font-semibold' : 'text-gray-300 hover:text-white'
  }`;

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-white/10 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-pulse-custom">
            ProjectAccel
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-1 text-sm">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/features" className={navLinkClass}>Features</NavLink>
          <NavLink to="/use-cases" className={navLinkClass}>Use Cases</NavLink>
          <NavLink to="/case-studies" className={navLinkClass}>Case Studies</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-white to-gray-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
            Start Free Trial
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <NavLink to="/" end className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink to="/features" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>Features</NavLink>
            <NavLink to="/use-cases" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>Use Cases</NavLink>
            <NavLink to="/case-studies" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>Case Studies</NavLink>
            <NavLink to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>Pricing</NavLink>
            <NavLink to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>Blog</NavLink>
            <NavLink to="/about" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>About</NavLink>
            <NavLink to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors" onClick={toggleMobileMenu}>Contact</NavLink>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-colors">
                Sign In
              </button>
              <button className="block w-full bg-gradient-to-r from-white to-gray-400 text-black text-center font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
