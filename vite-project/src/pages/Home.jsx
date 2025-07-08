import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import './shimmer.css';

export default function Home() {
  React.useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="space-y-16 bg-black text-white">    
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12" data-aos="fade-up">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
          Deliver Projects
          <br />
          On Time, Every Time.
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Plan, track, and collaborate effortlessly with ProjectAccel — your all-in-one project management tool.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-gradient-to-r from-white to-gray-400 text-black px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
            Start Free Trial
          </button>
          <button className="bg-white/10 text-white px-8 py-4 rounded-lg border border-gray-600 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 font-semibold">
            Schedule a Demo
          </button>
        </div>

        {/* Trusted by Component */}
        <div className="inline-flex items-center px-4 py-2 mt-10 rounded-full shimmer-glow text-sm text-gray-300 backdrop-blur-sm border border-white/50 hover:border-white hover:scale-[1.02] hover:brightness-125 transition-all duration-300">
          <span className="text-green-400 mr-2">🚀</span>
          Trusted by <span className="mx-1 text-white font-semibold">10,000+</span> teams worldwide
        </div>
      </section>

      {/* Key Benefits */}
      <section className="text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Why Teams Choose ProjectAccel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 animate-float">📊</div>
            <p className="text-gray-300">Plan with confidence: Visual timelines & Kanban boards keep everyone aligned.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 animate-float">🎯</div>
            <p className="text-gray-300">Boost accountability: Assign tasks, set priorities, track progress.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 animate-float">💰</div>
            <p className="text-gray-300">Control budgets: Monitor time & costs in real time.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 animate-float">😊</div>
            <p className="text-gray-300">Delight clients: Share project portals for transparency.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Simple Workflow. Powerful Results.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-white/20 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 animate-pulse-custom">📌</div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Plan</h3>
            <p className="text-gray-300">Create projects, set tasks & deadlines.</p>
          </div>
          <div className="border border-white/20 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 animate-pulse-custom">🚀</div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Execute</h3>
            <p className="text-gray-300">Collaborate with teams & clients.</p>
          </div>
          <div className="border border-white/20 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 animate-pulse-custom">📊</div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Track & Optimize</h3>
            <p className="text-gray-300">Get clear dashboards & reports.</p>
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section className="text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Everything You Need. Nothing You Don't.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {["Gantt & Kanban Views", "Time Tracking & Timesheets", "File Sharing & Discussions", "Budget & Expense Tracking", "Reports & Dashboards", "Client Portals"].map((text, i) => (
            <div key={i} className="bg-white/10 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="text-green-400">✔</span> {text}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          See What Our Customers Are Saying
        </h2>
        <div className="bg-white/10 p-8 rounded-xl">
          <blockquote className="italic text-xl text-gray-300 mb-4">
            "We cut project delays by 40% and improved client trust overnight. ProjectAccel keeps us on track like nothing else."
          </blockquote>
          <p className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            — Priya, Director at TechBridge Solutions
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-6 py-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Ready to simplify your projects?
        </h2>
        <button className="bg-gradient-to-r from-white to-gray-400 text-black px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
          Try Free for 14 Days
        </button>
        <p className="text-gray-400">No credit card needed.</p>
      </section>
    </div>
  );
}
