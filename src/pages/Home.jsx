import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MdBarChart, MdTrackChanges, MdAttachMoney, MdGroups, MdChecklist, MdCheckCircle, MdTrendingUp, MdSpeed, MdSecurity } from 'react-icons/md';
import { FaRocket, FaUsers, FaChartLine, FaStar } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggeredCards = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative bg-black text-white overflow-hidden container mx-auto px-4">
      {/* Animated Background */}
      <div className="fixed inset-0 hero-bg opacity-50"></div>
      
      <div className="relative z-10 space-y-20">
        {/* Enhanced Hero Section */}
        <section className="relative text-center space-y-6 py-12 min-h-screen flex flex-col justify-center">
          <ScrollReveal direction="up" delay={0.2} duration={1}>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
              Deliver Projects<br />On Time, Every Time.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4} duration={0.8}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Plan, track, and collaborate effortlessly with ProjectAccel — your all-in-one project management tool.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6} duration={0.8}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/start-free-trial" className="bg-gradient-to-r from-white to-gray-400 text-black px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                  Start Free Trial
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/schedule-demo" className="bg-white/10 text-white px-8 py-4 rounded-lg border border-gray-600 hover:border-gray-400 transition-all duration-300 font-semibold">
                  Schedule a Demo
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.8} duration={0.8}>
            <motion.div 
              className="inline-flex items-center px-4 py-2 mt-10 rounded-full shimmer-glow text-sm text-gray-300 backdrop-blur-sm border border-white/50 hover:border-white hover:scale-[1.02] hover:brightness-125 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-green-400 mr-2">🚀</span>
              Trusted by <span className="mx-1 text-white font-semibold">10,000+</span> teams worldwide
            </motion.div>
          </ScrollReveal>
        </section>

        {/* Enhanced Stats Section */}
        <AnimatedSection className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <StaggeredCards className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <FaUsers />, number: "50K+", label: "Active Teams" },
                { icon: <MdTrendingUp />, number: "2M+", label: "Projects Completed" },
                { icon: <FaChartLine />, number: "40%", label: "Faster Delivery" },
                { icon: <MdSecurity />, number: "99.9%", label: "Uptime" }
              ].map((stat, i) => (
                <div key={i} className="pro-card p-8 text-center hover-lift">
                  <div className="text-4xl gradient-text-accent mb-4">{stat.icon}</div>
                  <div className="stat-counter text-5xl mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              ))}
            </StaggeredCards>
          </div>
        </AnimatedSection>

        {/* Key Benefits */}
        <section className="text-center py-20">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Teams Choose ProjectAccel
            </h2>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              [<MdBarChart size={40} className="mb-4 text-gray-100" />, "Plan with confidence: Visual timelines & Kanban boards keep everyone aligned."],
              [<MdTrackChanges size={40} className="mb-4 text-gray-100" />, "Boost accountability: Assign tasks, set priorities, track progress."],
              [<MdAttachMoney size={40} className="mb-4 text-gray-100" />, "Control budgets: Monitor time & costs in real time."],
              [<MdGroups size={40} className="mb-4 text-gray-100" />, "Delight clients: Share project portals for transparency."]
            ].map(([icon, text], i) => (
              <StaggerItem
                key={i}
                direction="up"
                className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center hover-glow"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
                <p className="text-gray-300">{text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* How It Works */}
        <section className="text-center py-20">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Simple Workflow. Powerful Results.
            </h2>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              [<MdChecklist size={40} className="mb-3 text-gray-100" />, "Plan", "Create projects, set tasks & deadlines."],
              [<FaRocket size={40} className="mb-3 text-gray-100" />, "Execute", "Collaborate with teams & clients."],
              [<MdBarChart size={40} className="mb-3 text-gray-100" />, "Track & Optimize", "Get clear dashboards & reports."]
            ].map(([icon, title, desc], i) => (
              <StaggerItem
                key={i}
                direction="up"
                className="border border-white/20 p-4 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center hover-glow relative"
              >
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
                <div className="absolute top-2 right-2 text-6xl font-black text-gray-800 opacity-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Features Snapshot */}
        <section className="text-center py-20">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Everything You Need. Nothing You Don't.
            </h2>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Gantt & Kanban Views",
              "Time Tracking & Timesheets",
              "File Sharing & Discussions",
              "Budget & Cost Tracking",
              "Custom Fields & Templates",
              "Reports & Dashboards",
              "Client Portals"
            ].map((text, i) => (
              <StaggerItem
                key={i}
                direction="left"
                className="bg-white/10 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 hover-glow"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <MdCheckCircle size={22} className="text-green-400" />
                </motion.div>
                {text}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Testimonials */}
        <section className="text-center max-w-4xl mx-auto py-20">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              See What Our Customers Are Saying
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={0.4}>
            <motion.div 
              className="bg-white/10 p-8 rounded-xl hover-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="italic text-xl text-gray-300 mb-4">
                "We cut project delays by 40% and improved client trust overnight. ProjectAccel keeps us on track like nothing else."
              </blockquote>
              <p className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                — Priya, Director at TechBridge Solutions
              </p>
            </motion.div>
          </ScrollReveal>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-6 py-20">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to simplify your projects?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <motion.button 
              className="bg-gradient-to-r from-white to-gray-400 text-black px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Free for 14 Days
            </motion.button>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-gray-400">No credit card needed.</p>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}