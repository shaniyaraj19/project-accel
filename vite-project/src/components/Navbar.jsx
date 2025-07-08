// File: src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">ProjectAccel</div>
        <div className="space-x-4 text-sm">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>Home</NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>Features</NavLink>
          <NavLink to="/use-cases" className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>Use Cases</NavLink>
          <NavLink to="/case-studies" className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>Case Studies</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>Pricing</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-semibold text-blue-600' : ''}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;