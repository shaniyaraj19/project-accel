import React from 'react';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Use Cases", href: "/use-cases" },
        { name: "Integrations", href: "/integrations" },
        { name: "API Documentation", href: "/api" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Partners", href: "/partners" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Support", href: "/contact" },
        { name: "System Status", href: "/status" },
        { name: "Webinars", href: "/webinars" },
        { name: "Templates", href: "/templates" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Compliance", href: "/compliance" },
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      href: "https://www.twitter.com",
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      href: "https://www.youtube.com",
      color: "hover:text-red-400"
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@projectaccel.com",
      href: "mailto:hello@projectaccel.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 mt-32 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg opacity-20"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-xl">
                      <span className="text-white font-black text-2xl">P</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl gradient-bg opacity-50 blur-lg"></div>
                  </div>
                  <div className="text-2xl font-black gradient-text-hero">
                    ProjectAccel
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Empowering teams worldwide to deliver exceptional projects with AI-powered insights, 
                  seamless collaboration, and enterprise-grade security.
                </p>

                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">{contact.label}</div>
                        <div className="text-sm">{contact.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links - Enhanced */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                      title={social.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links - Enhanced */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-bold text-lg mb-6 gradient-text">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="footer-link text-gray-400 hover:text-white transition-all duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="footer-link text-gray-400 hover:text-white transition-all duration-300 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Newsletter Signup */}
          <motion.div
            className="glass p-10 rounded-3xl mb-16 hover-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold gradient-text-secondary mb-4">
                  Stay Ahead of the Curve
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get exclusive insights, product updates, and project management tips delivered to your inbox.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input flex-1"
                  />
                  <motion.button 
                    className="btn-primary whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe Now
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Bottom Bar */}
          <motion.div
            className="border-t border-white/10 pt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <div className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} ProjectAccel. All rights reserved.
                </div>
                <div className="flex items-center space-x-6 text-xs text-gray-500">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    All systems operational
                  </span>
                  <span>SOC 2 Compliant</span>
                  <span>GDPR Ready</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-xs text-gray-500">
                  Made with ❤️ in San Francisco
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;