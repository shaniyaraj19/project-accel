import React from 'react';

export default function UseCases() {
  return (
    <div className="space-y-16 bg-black text-white px-4 pt-4 py-16">
      {/* Hero Section */}
      <section className="text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
          Built for Every
          <br />
          Industry
        </h1>      
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Trusted by agencies, developers, builders, and consultants — ProjectAccel adapts to how your team works.
        </p>
      </section>

      {/* Use Cases Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up stagger-2">
        {["Marketing Teams", "IT & Software Teams", "Construction Projects", "Freelancers & Consultants"].map((title, idx) => (
          <div
            key={idx}
            className="glass p-6 rounded-xl hover-lift animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <h2 className="text-lg font-semibold mb-2 gradient-text">{title}</h2>
            <p className="text-gray-300 text-sm">
              {[
                'Plan campaigns, track content production, and delight clients with on-time delivery and clear status updates.',
                'Manage sprints, releases, and bug fixes with clarity and speed using boards and timelines.',
                'Monitor budgets, contractors, and site schedules. Hit milestones with confidence using Gantt charts and reports.',
                'Keep deliverables and timelines crystal clear. Share progress and results with clients in one place.'
              ][idx]}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-12 animate-fade-in-up stagger-3">
        <button className="gradient-bg text-white font-semibold px-8 py-4 rounded-lg border border-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-white hover:text-black transition-all duration-300">
          Explore How It Works for You
        </button>

      </section>
    </div>
  );
}
