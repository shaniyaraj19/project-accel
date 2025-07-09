import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MdBarChart, MdTrackChanges, MdAttachMoney, MdGroups, MdChecklist, MdCheckCircle, MdTrendingUp, MdSpeed, MdSecurity } from 'react-icons/md';
import { FaRocket, FaUsers, FaChartLine, FaStar } from 'react-icons/fa';

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
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 hero-bg opacity-50"></div>
      
      <div className="relative z-10 space-y-32">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-6xl md:text-9xl font-black leading-tight gradient-text-hero animate-gradient"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                Deliver Projects<br />On Time, Every Time.
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                Transform your project management with AI-powered insights, seamless collaboration, and enterprise-grade security.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                <Link to="/start-free-trial" className="btn-primary hover-lift">
                  Start Free Trial
                  <FaRocket className="inline ml-2" />
                </Link>
                <Link to="/schedule-demo" className="btn-secondary hover-lift">
                  Schedule a Demo
                  <MdSpeed className="inline ml-2" />
                </Link>
              </motion.div>

              <motion.div 
                className="inline-flex items-center px-6 py-3 mt-16 rounded-full glass text-lg text-gray-300 hover-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                <FaStar className="text-yellow-400 mr-3" />
                Trusted by <span className="mx-2 text-white font-bold gradient-text">50,000+</span> teams worldwide
                <FaUsers className="text-blue-400 ml-3" />
              </motion.div>
            </motion.div>
          </div>
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

        {/* Enhanced Key Benefits */}
        <AnimatedSection className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text-secondary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Industry Leaders Choose Us
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience the future of project management with cutting-edge features designed for modern teams.
            </motion.p>
            
            <StaggeredCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MdBarChart size={48} />,
                  title: "AI-Powered Planning",
                  desc: "Smart algorithms predict bottlenecks and optimize resource allocation automatically."
                },
                {
                  icon: <MdTrackChanges size={48} />,
                  title: "Real-Time Collaboration",
                  desc: "Seamless team coordination with instant updates and intelligent notifications."
                },
                {
                  icon: <MdAttachMoney size={48} />,
                  title: "Advanced Analytics",
                  desc: "Deep insights into project performance with predictive cost analysis."
                },
                {
                  icon: <MdGroups size={48} />,
                  title: "Client Excellence",
                  desc: "Branded portals and automated reporting that wow your clients."
                }
              ].map((benefit, i) => (
                <div key={i} className="pro-card p-8 hover-lift group">
                  <div className="feature-icon mx-auto group-hover:animate-pulse-custom">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </StaggeredCards>
          </div>
        </AnimatedSection>

        {/* Enhanced How It Works */}
        <AnimatedSection className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text-accent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Simple Workflow. Powerful Results.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {[
                {
                  icon: <MdChecklist size={60} />,
                  title: "Smart Planning",
                  desc: "AI-assisted project setup with intelligent task dependencies and resource optimization.",
                  step: "01"
                },
                {
                  icon: <FaRocket size={60} />,
                  title: "Seamless Execution",
                  desc: "Real-time collaboration tools with automated workflows and progress tracking.",
                  step: "02"
                },
                {
                  icon: <MdBarChart size={60} />,
                  title: "Intelligent Insights",
                  desc: "Advanced analytics and predictive reporting for continuous improvement.",
                  step: "03"
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="pro-card p-10 hover-lift group relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-6xl font-black text-gray-800 opacity-20">
                      {step.step}
                    </div>
                    <div className="feature-icon mx-auto mb-6 group-hover:animate-bounce-in">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">{step.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced Features Snapshot */}
        <AnimatedSection className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text-hero"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Enterprise-Grade Features
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need to manage projects like a Fortune 500 company.
            </motion.p>
            
            <StaggeredCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Advanced Gantt & Kanban Views",
                "AI-Powered Time Tracking",
                "Secure File Sharing & Discussions",
                "Predictive Budget Analytics",
                "Custom Dashboards & Reports",
                "White-Label Client Portals",
                "Advanced Security & Compliance",
                "API & Third-Party Integrations",
                "24/7 Priority Support"
              ].map((feature, i) => (
                <div key={i} className="glass p-6 rounded-2xl hover-glow hover-scale group">
                  <div className="flex items-center gap-4">
                    <MdCheckCircle size={28} className="text-green-400 group-hover:animate-pulse-custom" />
                    <span className="text-lg font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </StaggeredCards>
          </div>
        </AnimatedSection>

        {/* Enhanced Testimonials */}
        <AnimatedSection className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-16 gradient-text-secondary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Trusted by Industry Leaders
            </motion.h2>
            
            <StaggeredCards className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "ProjectAccel transformed our delivery process. We've reduced project delays by 60% and our clients love the transparency.",
                  author: "Sarah Chen",
                  role: "VP of Operations",
                  company: "TechFlow Solutions",
                  rating: 5
                },
                {
                  quote: "The AI-powered insights helped us identify bottlenecks before they became problems. Game-changing for our agency.",
                  author: "Marcus Rodriguez",
                  role: "Creative Director",
                  company: "Digital Dynamics",
                  rating: 5
                },
                {
                  quote: "Best project management tool we've used. The ROI was evident within the first month of implementation.",
                  author: "Priya Sharma",
                  role: "Project Manager",
                  company: "BuildRight Construction",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <div key={i} className="testimonial-card p-8 hover-lift">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <FaStar key={j} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-bold text-white text-lg">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <p className="text-sm gradient-text font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </StaggeredCards>
          </div>
        </AnimatedSection>

        {/* Enhanced Final CTA */}
        <AnimatedSection className="py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              className="pro-card p-16 hover-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-hero">
                Ready to Transform Your Projects?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Join thousands of teams who've revolutionized their project delivery with ProjectAccel.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/start-free-trial" className="btn-primary hover-lift text-xl px-12 py-5">
                  Start Free Trial
                  <FaRocket className="inline ml-3" />
                </Link>
                <Link to="/schedule-demo" className="btn-secondary hover-lift text-xl px-12 py-5">
                  Schedule Demo
                  <MdSpeed className="inline ml-3" />
                </Link>
              </div>
              
              <p className="text-gray-500 mt-8 text-lg">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}