import React from 'react';
import { motion } from 'framer-motion';
import { MdLightbulbOutline } from 'react-icons/md';
import { FaHardHat, FaPalette } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

const caseStudies = [
  {
    name: "Creative Agency Transformation",
    icon: <FaPalette />,
    problem: "Struggling with project timelines and team coordination",
    solution: "Implemented ProjectAccel's visual workflow and real-time collaboration",
    result: "40% faster project delivery and improved client satisfaction"
  },
  {
    name: "Construction Project Success",
    icon: <FaHardHat />,
    problem: "Complex project dependencies causing delays",
    solution: "Utilized dependency mapping and resource allocation features",
    result: "Reduced timeline overruns by 60% and saved $100k"
  },
  {
    name: "Innovation Lab Breakthrough",
    icon: <MdLightbulbOutline />,
    problem: "Ideas getting lost in email threads and meetings",
    solution: "Centralized ideation and project tracking system",
    result: "2x increase in implemented innovations"
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-black text-white px-4 pt-4 py-16 min-h-screen container mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-8 min-h-screen flex flex-col justify-center">
        <ScrollReveal direction="up" delay={0.2} duration={1}>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            See How Teams Thrive<br />with ProjectAccel
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2">
            Real-world success stories showing how ProjectAccel helped teams deliver better, faster, and smarter.
          </p>
        </ScrollReveal>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, i) => (
            <StaggerItem
              key={study.name}
              direction="up"
              className="glass bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center text-center hover-glow group"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {study.icon}
              </motion.div>
              <h2 className="text-xl font-bold mb-2 gradient-text group-hover:animate-pulse-custom">{study.name}</h2>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-blue-400">Problem:</span> {study.problem}
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-green-400">Solution:</span> {study.solution}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-pink-400">Result:</span> {study.result}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <ScrollReveal direction="up" delay={0.2}>
          <motion.button 
            className="gradient-bg text-white px-12 py-4 rounded-xl border border-white/90 shadow-xl hover:shadow-lg hover:border-blue-400 hover:bg-white hover:text-black transition-all duration-300 font-semibold text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Try It Yourself — Free Trial
          </motion.button>
        </ScrollReveal>
      </section>
    </div>
  );
}