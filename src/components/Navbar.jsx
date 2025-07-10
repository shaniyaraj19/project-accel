import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link relative px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 font-medium ${
      isActive 
        ? 'gradient-text-primary font-bold bg-white/10' 
        : 'text-gray-300 hover:text-white hover:bg-white/5'
    }`;

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">P</span>
              </div>
              <div className="absolute inset-0 rounded-2xl gradient-bg opacity-50 blur-md"></div>
            </div>
            <div className="text-2xl font-black gradient-text-hero">
              ProjectAccel
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex space-x-1 text-sm bg-white/5 rounded-2xl p-2 backdrop-blur-sm">
              <NavLink to="/features" className={navLinkClass}>Features</NavLink>
              <NavLink to="/use-cases" className={navLinkClass}>Use Cases</NavLink>
              <NavLink to="/case-studies" className={navLinkClass}>Case Studies</NavLink>
              <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>

            {/* Enhanced CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-6"
            >
              <button className="btn-primary">
                Start Free Trial
              </button>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full"
                animate={isMobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full"
                animate={isMobileMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="space-y-4">
                {[
                  { to: "/features", label: "Features" },
                  { to: "/use-cases", label: "Use Cases" },
                  { to: "/case-studies", label: "Case Studies" },
                  { to: "/pricing", label: "Pricing" },
                  { to: "/blog", label: "Blog" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" }
                ].map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.to}
                      className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="pt-6 border-t border-white/10 space-y-4"
                >
                  <button className="w-full btn-primary text-center">
                    Start Free Trial
                  </button>
                  <button className="w-full btn-secondary text-center">
                    Schedule Demo
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;