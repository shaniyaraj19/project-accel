import React from 'react';
export default function Home() {
  return (
    <div className="space-y-16">    
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Deliver Projects On Time, Every Time.</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Plan, track, and collaborate effortlessly with ProjectAccel — your all-in-one project management tool.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow">Start Free Trial</button>
          <button className="bg-gray-100 text-blue-600 px-6 py-2 rounded border">Schedule a Demo</button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Teams Choose ProjectAccel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded shadow">Plan with confidence: Visual timelines & Kanban boards keep everyone aligned.</div>
          <div className="bg-white p-4 rounded shadow">Boost accountability: Assign tasks, set priorities, track progress.</div>
          <div className="bg-white p-4 rounded shadow">Control budgets: Monitor time & costs in real time.</div>
          <div className="bg-white p-4 rounded shadow">Delight clients: Share project portals for transparency.</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Simple Workflow. Powerful Results.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded">
            <strong>📌 Plan</strong>
            <p>Create projects, set tasks & deadlines.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <strong>🚀 Execute</strong>
            <p>Collaborate with teams & clients.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <strong>📊 Track & Optimize</strong>
            <p>Get clear dashboards & reports.</p>
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Everything You Need. Nothing You Don’t.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>✔ Gantt & Kanban Views</div>
          <div>✔ Time Tracking & Timesheets</div>
          <div>✔ File Sharing & Discussions</div>
          <div>✔ Budget & Expense Tracking</div>
          <div>✔ Reports & Dashboards</div>
          <div>✔ Client Portals</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">See What Our Customers Are Saying</h2>
        <blockquote className="italic text-lg text-gray-700">
          “We cut project delays by 40% and improved client trust overnight. ProjectAccel keeps us on track like nothing else.”
        </blockquote>
        <p className="mt-2 font-semibold">— Priya, Director at TechBridge Solutions</p>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold">Ready to simplify your projects?</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow">Try Free for 14 Days</button>
        <p className="text-sm text-gray-500">No credit card needed.</p>
      </section>
    </div>
  );
}