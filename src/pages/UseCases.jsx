import React from 'react';
import { MdCampaign } from 'react-icons/md';
import { FaLaptopCode, FaHardHat, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

const useCases = [
  {
    icon: <MdCampaign className="text-4xl mb-4 text-blue-400" />,
    title: "Marketing Agencies",
    desc: "Streamline campaign management and client reporting with our intuitive tools."
  },
  {
    icon: <FaLaptopCode className="text-4xl mb-4 text-green-400" />,
    title: "Development Teams",
    desc: "Keep your dev projects on track with agile-ready features and tech integrations."
  },
  {
    icon: <FaHardHat className="text-4xl mb-4 text-yellow-400" />,
    title: "Construction Firms",
    desc: "Manage complex builds and coordinate teams with powerful project tools."
  },
  {
    icon: <FaUserTie className="text-4xl mb-4 text-purple-400" />,
    title: "Consultants",
    desc: "Deliver value to clients with professional project management solutions."
  }
];

export default function UseCases() {
  return (
    <div className="bg-black text-white px-4 pt-4 py-16 min-h-screen container mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 min-h-screen flex flex-col justify-center">
        <ScrollReveal direction="up" delay={0.2} duration={1}>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Built for Every<br />Industry
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trusted by agencies, developers, builders, and consultants — ProjectAccel adapts to how your team works.
          </p>
        </ScrollReveal>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {useCases.map((uc, i) => (
            <StaggerItem
              key={uc.title}
              direction="up"
              className="glass bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center text-center hover-glow group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {uc.icon}
              </motion.div>
              <h2 className="text-lg font-bold mb-2 gradient-text group-hover:animate-pulse-custom">{uc.title}</h2>
              <p className="text-gray-300 text-sm">{uc.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <ScrollReveal direction="up" delay={0.2}>
          <motion.button 
            className="gradient-bg text-white font-semibold px-10 py-4 rounded-xl border border-white/90 shadow-xl hover:shadow-lg hover:border-blue-400 hover:bg-white hover:text-black transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore How It Works for You
          </motion.button>
        </ScrollReveal>
      </section>
    </div>
  );
}