// File: src/pages/Blog.jsx
import React from 'react';
export default function Blog() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Management Tips, Trends & Insights</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed with expert advice, industry insights, and practical guides.
        </p>
      </section>

      {/* Sample Blog Posts */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">5 Ways to Stop Project Delays Before They Start</h2>
          <p className="text-sm text-gray-500">Learn how proactive planning and better team alignment can reduce your risk of late deliveries.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Gantt vs Kanban: Which Suits Your Team?</h2>
          <p className="text-sm text-gray-500">Explore the strengths of each view and find the best fit for your workflow and team structure.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">How to Create Accurate Project Budgets</h2>
          <p className="text-sm text-gray-500">Understand key cost drivers, estimate with confidence, and stay within budget.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">
          Read More Articles
        </button>
      </section>
    </div>
  );
}


// MOD: add 'Best Value' badge to Growth plan
// Edit inside Pricing.jsx → inside Growth plan card
// Wrap card in relative div and add absolute badge

// Replace:
// <div className="bg-blue-50 p-6 rounded shadow-lg border-2 border-blue-600">

// With:
// <div className="relative">
//   <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow">Best Value</div>
//   <div className="bg-blue-50 p-6 rounded shadow-lg border-2 border-blue-600">
//     ...existing content...
//   </div>
// </div>