// File: src/pages/Features.jsx
import React from 'react';
export default function Features() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Designed for Teams That Deliver.</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ProjectAccel gives your team all the tools they need to plan, execute, and deliver projects — faster.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🗂 Task Management</h2>
          <p>Organize work your way. Use Kanban boards, task lists, or calendar views to plan and execute seamlessly.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📅 Timeline & Gantt</h2>
          <p>Visualize every milestone. Stay ahead with clear dependencies and critical paths.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">⏱ Time & Budget Tracking</h2>
          <p>Log hours, control expenses, and keep your project budgets healthy.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">💬 Collaboration</h2>
          <p>Comment on tasks, share files, and keep your team & clients on the same page.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📊 Reports & Dashboards</h2>
          <p>Know exactly where your projects stand — progress, costs, workloads.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🔌 Integrations</h2>
          <p>Connect with Slack, Teams, Google Drive, and more to streamline your workflows.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">
          See ProjectAccel in Action
        </button>
      </section>
    </div>
  );
}