import React from 'react';
export default function Features() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Designed for Teams That Deliver.</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          ProjectAccel gives your team all the tools they need to plan, execute, and deliver projects — faster.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up stagger-2">
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-1">
          <div className="text-4xl mb-4 animate-float">🗂</div>
          <h2 className="text-xl font-semibold mb-4 gradient-text">Task Management</h2>
          <p className="text-gray-300">Organize work your way. Use Kanban boards, task lists, or calendar views to plan and execute seamlessly.</p>
        </div>
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-2">
          <div className="text-4xl mb-4 animate-float">📅</div>
          <h2 className="text-xl font-semibold mb-4 gradient-text">Timeline & Gantt</h2>
          <p className="text-gray-300">Visualize every milestone. Stay ahead with clear dependencies and critical paths.</p>
        </div>
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-3">
          <div className="text-4xl mb-4 animate-float">⏱</div>
          <h2 className="text-xl font-semibold mb-4 gradient-text">Time & Budget Tracking</h2>
          <p className="text-gray-300">Log hours, control expenses, and keep your project budgets healthy.</p>
        </div>
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-4">
          <div className="text-4xl mb-4 animate-float">💬</div>
          <h2 className="text-xl font-semibold mb-4 gradient-text">Collaboration</h2>
          <p className="text-gray-300">Comment on tasks, share files, and keep your team & clients on the same page.</p>
        </div>
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-5">
          <div className="text-4xl mb-4 animate-float">📊</div>
          <h2 className="text-xl font-semibold mb-4 gradient-text">Reports & Dashboards</h2>
          <p className="text-gray-300">Know exactly where your projects stand — progress, costs, workloads.</p>
        </div>
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-6">
          <div className="text-4xl mb-4 animate-float">🔌</div>
          <h2 className="text-xl font-semibold mb-4 gradient-text">Integrations</h2>
          <p className="text-gray-300">Connect with Slack, Teams, Google Drive, and more to streamline your workflows.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-12 animate-fade-in-up stagger-3">
        <button className="gradient-bg text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
          See ProjectAccel in Action
        </button>
      </section>
    </div>
  );
}