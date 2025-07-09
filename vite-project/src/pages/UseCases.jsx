import React from 'react';
import { MdCampaign } from 'react-icons/md';
import { FaLaptopCode, FaHardHat, FaUserTie } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: 'spring' }
  })
};

const useCases = [
  {
    title: 'Marketing Teams',
    icon: <MdCampaign size={48} className="mb-4 text-gray-100" />,
    desc: 'Plan campaigns, track content production, and delight clients with on-time delivery and clear status updates.'
  },
  {
    title: 'IT & Software Teams',
    icon: <FaLaptopCode size={40} className="mb-4 text-gray-100" />,
    desc: 'Manage sprints, releases, and bug fixes with clarity and speed using boards and timelines.'
  },
  {
    title: 'Construction Projects',
    icon: <FaHardHat size={48} className="mb-4 text-gray-100" />,
    desc: 'Monitor budgets, contractors, and site schedules. Hit milestones with confidence using Gantt charts and reports.'
  },
  {
    title: 'Freelancers & Consultants',
    icon: <FaUserTie size={48} className="mb-4 text-gray-100" />,
    desc: 'Keep deliverables and timelines crystal clear. Share progress and results with clients in one place.'
  }
];

export default function UseCases() {
  return (
    <div
      className="bg-black text-white px-4 pt-4 py-16 min-h-screen"
    >
      {/* Hero Section */}
       <section
        className="text-center py-12 min-h-screen"
      >
        <h1 className="text-5xl md:text-8xl font-bold mb-6  leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
          Built for Every<br />Industry
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Trusted by agencies, developers, builders, and consultants — ProjectAccel adapts to how your team works.
        </p>
      </section>

      {/* Use Cases Grid */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className="glass bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center text-center"
          >
            {uc.icon}
            <h2 className="text-lg font-bold mb-2 gradient-text">{uc.title}</h2>
            <p className="text-gray-300 text-sm">{uc.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        className="text-center mt-16"
      >
        <button className="gradient-bg text-white font-semibold px-10 py-4 rounded-xl border border-white/90 shadow-xl hover:shadow-lg transform hover:scale-105 hover:border-blue-400 hover:bg-white hover:text-black transition-all duration-300 text-lg">
          Explore How It Works for You
        </button>
      </section>
    </div>
  );
}
