import React from 'react';

function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Use Cases", href: "/use-cases" },
        { name: "Integrations", href: "/integrations" },
        { name: "API", href: "/api" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Templates", href: "/templates" },
        { name: "Webinars", href: "/webinars" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Cookies", href: "/cookies" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "GitHub", icon: "🐙", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="text-xl font-bold gradient-text">ProjectAccel</div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering teams worldwide to deliver exceptional projects with AI-powered insights, 
              seamless collaboration, and enterprise-grade security.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:gradient-text"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass p-8 rounded-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Stay in the Loop</h3>
              <p className="text-gray-300">
                Get the latest updates, tips, and insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ProjectAccel. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">🔒</span>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">🛡️</span>
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">⚡</span>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;