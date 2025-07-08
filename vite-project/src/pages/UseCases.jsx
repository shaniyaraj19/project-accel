// File: src/pages/UseCases.jsx
import React from 'react';
export default function UseCases() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Built for Every Industry</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by agencies, developers, builders, and consultants — ProjectAccel adapts to how your team works.
        </p>
      </section>

      {/* Use Cases Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Marketing Teams</h2>
          <p>Plan campaigns, track content production, and delight clients with on-time delivery and clear status updates.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">IT & Software Teams</h2>
          <p>Manage sprints, releases, and bug fixes with clarity and speed using boards and timelines.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Construction Projects</h2>
          <p>Monitor budgets, contractors, and site schedules. Hit milestones with confidence using Gantt charts and reports.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Freelancers & Consultants</h2>
          <p>Keep deliverables and timelines crystal clear. Share progress and results with clients in one place.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">
          Explore How It Works for You
        </button>
      </section>
    </div>
  );
}