import React from "react";
import { motion } from "framer-motion";
import {
  MdChecklist,
  MdCalendarToday,
  MdAccessTime,
  MdChatBubbleOutline,
  MdBarChart,
  MdPower,
  MdSecurity,
  MdCloud,
  MdMobileFriendly
} from "react-icons/md";
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl h-[500px] pro-card hover-lift"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${feature.image || 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div className="feature-icon group-hover:animate-bounce-in">
          {feature.icon}
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4 gradient-text group-hover:animate-pulse-custom">
            {feature.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {feature.description}
          </p>
          
          {feature.highlights && (
            <ul className="space-y-2">
              {feature.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default function Features() {
  const features = [
    {
      icon: <MdChecklist size={48} className="text-white" />,
      title: "Smart Task Management",
      description: "AI-powered task organization with intelligent prioritization, automated dependencies, and predictive scheduling.",
      highlights: [
        "Drag-and-drop Kanban boards",
        "Automated task dependencies",
        "Smart deadline predictions",
        "Priority-based sorting"
      ],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdCalendarToday size={48} className="text-white" />,
      title: "Advanced Timeline & Gantt",
      description: "Interactive Gantt charts with real-time updates, critical path analysis, and milestone tracking for perfect project visualization.",
      highlights: [
        "Interactive Gantt charts",
        "Critical path analysis",
        "Milestone tracking",
        "Resource allocation view"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdAccessTime size={48} className="text-white" />,
      title: "Intelligent Time & Budget Tracking",
      description: "Automated time logging with AI-powered budget forecasting, expense tracking, and profitability analysis.",
      highlights: [
        "Automated time tracking",
        "Budget forecasting",
        "Expense management",
        "Profitability analysis"
      ],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdChatBubbleOutline size={48} className="text-white" />,
      title: "Seamless Collaboration",
      description: "Real-time messaging, file sharing, video calls, and collaborative workspaces that keep everyone connected.",
      highlights: [
        "Real-time messaging",
        "File sharing & versioning",
        "Video conferencing",
        "Collaborative workspaces"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdBarChart size={48} className="text-white" />,
      title: "Advanced Analytics & Reports",
      description: "Comprehensive dashboards with predictive analytics, custom reports, and actionable insights for data-driven decisions.",
      highlights: [
        "Custom dashboards",
        "Predictive analytics",
        "Automated reporting",
        "Performance metrics"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdPower size={48} className="text-white" />,
      title: "Powerful Integrations",
      description: "Connect with 200+ tools including Slack, Teams, GitHub, and more. API access for custom integrations.",
      highlights: [
        "200+ integrations",
        "REST API access",
        "Webhook support",
        "Custom connectors"
      ],
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdSecurity size={48} className="text-white" />,
      title: "Enterprise Security",
      description: "Bank-level security with SSO, 2FA, role-based permissions, and compliance with SOC 2, GDPR, and HIPAA.",
      highlights: [
        "SSO & 2FA authentication",
        "Role-based permissions",
        "SOC 2 compliance",
        "Data encryption"
      ],
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdCloud size={48} className="text-white" />,
      title: "Cloud Infrastructure",
      description: "99.9% uptime guarantee with global CDN, automatic backups, and scalable architecture that grows with you.",
      highlights: [
        "99.9% uptime SLA",
        "Global CDN",
        "Automatic backups",
        "Scalable architecture"
      ],
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MdMobileFriendly size={48} className="text-white" />,
      title: "Mobile Excellence",
      description: "Native mobile apps for iOS and Android with offline sync, push notifications, and full feature parity.",
      highlights: [
        "Native mobile apps",
        "Offline synchronization",
        "Push notifications",
        "Touch-optimized interface"
      ],
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const integrations = [
    { name: "Microsoft Teams", logo: "👥", color: "bg-blue-500" },
    { name: "Slack", logo: "💬", color: "bg-purple-500" },
    { name: "GitHub", logo: "🐙", color: "bg-gray-700" },
    { name: "Figma", logo: "🎨", color: "bg-pink-500" },
    { name: "Google Workspace", logo: "📧", color: "bg-red-500" },
    { name: "Jira", logo: "🔧", color: "bg-blue-600" },
    { name: "Trello", logo: "📋", color: "bg-blue-400" },
    { name: "Asana", logo: "✅", color: "bg-orange-500" },
    { name: "Notion", logo: "📝", color: "bg-gray-800" },
    { name: "Zoom", logo: "📹", color: "bg-blue-500" }
  ];

  return (
    <div>
      <section className="py-20">
        <StaggerContainer>
          <div className="max-w-6xl mx-auto">
            <StaggerItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-6xl md:text-9xl font-black leading-tight gradient-text-hero mb-8"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                Built for Teams<br />That Deliver
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                Feature-rich, AI-powered, and built to help you simplify projects, reduce delays, and scale efficiently.
              </motion.p>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Enhanced Core Capabilities */}
        <section className="py-20">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text-secondary">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to plan, execute, and deliver projects with the confidence of industry leaders.
            </p>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Integrations Section */}
        <AnimatedSection className="py-20">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text-accent mb-8">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Connect with your favorite tools and streamline your workflow with 200+ integrations and powerful APIs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="pro-card p-6 text-center hover-lift group"
                >
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-4 text-2xl mx-auto group-hover:animate-bounce-in`}>
                    {item.logo}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="btn-primary text-xl px-12 py-5 hover-lift">
              View All Integrations
            </button>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
}