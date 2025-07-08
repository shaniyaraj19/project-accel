import React from 'react';

export default function CaseStudies() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
          See How Teams Thrive
          <br/>
          with ProjectAccel
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Real-world success stories showing how ProjectAccel helped teams deliver better, faster, and smarter.
        </p>
      </section>

      {/* Case Study Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up stagger-2">
        <div className="glass p-6 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold mb-2 gradient-text">TechStart</h2>
          <p className="text-gray-300 mb-2"><strong>Problem:</strong> Frequent missed deadlines.</p>
          <p className="text-gray-300 mb-2"><strong>Solution:</strong> Adopted ProjectAccel Gantt & team boards.</p>
          <p className="text-gray-300"><strong>Result:</strong> Reduced delivery times by 30%.</p>
        </div>

        <div className="glass p-6 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold mb-2 gradient-text">BuildPro Constructions</h2>
          <p className="text-gray-300 mb-2"><strong>Problem:</strong> Overruns in material costs & timelines.</p>
          <p className="text-gray-300 mb-2"><strong>Solution:</strong> Used budget tracking & milestone dashboards.</p>
          <p className="text-gray-300"><strong>Result:</strong> Saved 12% on project budgets.</p>
        </div>

        <div className="glass p-6 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold mb-2 gradient-text">Creative Hive Agency</h2>
          <p className="text-gray-300 mb-2"><strong>Problem:</strong> Clients lacked visibility.</p>
          <p className="text-gray-300 mb-2"><strong>Solution:</strong> Shared live project portals.</p>
          <p className="text-gray-300"><strong>Result:</strong> Improved client satisfaction & referrals.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-12 animate-fade-in-up stagger-3">
        <button className="gradient-bg text-white px-10 py-3 rounded-lg border border-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold">
          Try It Yourself — Free Trial
        </button>
      </section>
    </div>
  );
}
