// File: src/pages/CaseStudies.jsx
import React from 'react';
export default function CaseStudies() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">See How Teams Thrive with ProjectAccel</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real-world success stories showing how ProjectAccel helped teams deliver better, faster, and smarter.
        </p>
      </section>

      {/* Case Study Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">TechStart</h2>
          <p className="text-gray-700 mb-2"><strong>Problem:</strong> Frequent missed deadlines.</p>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong> Adopted ProjectAccel Gantt & team boards.</p>
          <p className="text-gray-700"><strong>Result:</strong> Reduced delivery times by 30%.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">BuildPro Constructions</h2>
          <p className="text-gray-700 mb-2"><strong>Problem:</strong> Overruns in material costs & timelines.</p>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong> Used budget tracking & milestone dashboards.</p>
          <p className="text-gray-700"><strong>Result:</strong> Saved 12% on project budgets.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Creative Hive Agency</h2>
          <p className="text-gray-700 mb-2"><strong>Problem:</strong> Clients lacked visibility.</p>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong> Shared live project portals.</p>
          <p className="text-gray-700"><strong>Result:</strong> Improved client satisfaction & referrals.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">
          Try It Yourself — Free Trial
        </button>
      </section>
    </div>
  );
}