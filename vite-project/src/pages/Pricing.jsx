import React, { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => setIsYearly((prev) => !prev);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Flexible Plans for Every Team</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose a plan that fits your size, goals, and growth — start with confidence.
        </p>
        <div className="flex justify-center items-center gap-4 mt-8">
          <span className={!isYearly ? 'font-bold gradient-text' : 'text-gray-400'}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={toggleBilling}
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-green-400 peer-checked:to-purple-400"></div>
          </label>
          <span className={isYearly ? 'font-bold gradient-text' : 'text-gray-400'}>Yearly</span>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up stagger-2">
        {/* Starter */}
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-1">
          <h2 className="text-2xl font-semibold mb-2 gradient-text">Starter</h2>
          <p className="text-gray-400 mb-6">Ideal for small teams</p>
          <div className="text-4xl font-bold mb-6 text-white">
            {isYearly ? '₹9990' : '₹999'}
            <span className="text-lg font-normal text-gray-400">{isYearly ? '/yr' : '/mo'}</span>
          </div>
          <ul className="text-sm space-y-3 text-gray-300">
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Up to 5 projects
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Core PM features
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Kanban boards
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Reports
            </li>
          </ul>
        </div>

        {/* Growth */}
        <div className="relative gradient-border p-8 rounded-xl hover-lift animate-fade-in-up stagger-2 scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-custom">
            Best Value
          </div>
          <h2 className="text-2xl font-semibold mb-2 gradient-text">Growth</h2>
          <p className="text-gray-400 mb-6">Best for growing businesses</p>
          <div className="text-4xl font-bold mb-6 text-white">
            {isYearly ? '₹24990' : '₹2499'}
            <span className="text-lg font-normal text-gray-400">{isYearly ? '/yr' : '/mo'}</span>
          </div>
          <ul className="text-sm space-y-3 text-gray-300">
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Unlimited projects
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Advanced dashboards
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Time & budget tracking
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> File sharing
            </li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-3">
          <h2 className="text-2xl font-semibold mb-2 gradient-text">Enterprise</h2>
          <p className="text-gray-400 mb-6">Custom workflows & support</p>
          <div className="text-4xl font-bold mb-6 gradient-text">Contact Us</div>
          <ul className="text-sm space-y-3 text-gray-300">
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> SLA guarantees
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Dedicated success manager
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Custom integrations
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-400">✅</span> Priority support
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="text-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up stagger-3">
        <button className="gradient-bg text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
          Start Free Trial
        </button>
        <button className="glass text-white px-8 py-4 rounded-lg border border-gray-600 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 font-semibold">
          Talk to Sales
        </button>
      </section>
    </div>
  );
}
