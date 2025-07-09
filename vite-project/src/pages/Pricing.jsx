import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Small teams, up to 5 projects',
      monthlyPrice: '₹999',
      yearlyPrice: '₹9990',
      features: ['Core PM features', 'Kanban', 'Reports'],
      cta: 'Start Free Trial'
    },
    {
      name: 'Growth',
      description: 'Growing businesses',
      monthlyPrice: '₹2499',
      yearlyPrice: '₹24990',
      features: ['Unlimited projects', 'Advanced dashboards'],
      cta: 'Start Free Trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'Custom workflows & support',
      monthlyPrice: 'Contact Us',
      yearlyPrice: 'Contact Us',
      features: ['SLA', 'Integrations', 'Dedicated manager'],
      cta: 'Talk to Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
     
      <div className="text-center mb-8 min-h-screen">
        <h1 className="text-5xl md:text-8xl font-bold mb-6  bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">Flexible Plans for Every Team.</h1>
         <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
    From startups to enterprises, thousands of teams rely on ProjectAccel to run projects with clarity and confidence.
  </p>
      </div>


     
      <div className="flex justify-center mb-12">
        <label className="flex items-center gap-3 cursor-pointer">
          <span className={!isYearly ? 'font-semibold text-white' : 'text-gray-400'}>Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only"
            />
            <div className="w-14 h-7 bg-gray-700 rounded-full" />
            <div
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-all duration-300 ${
                isYearly ? 'translate-x-7' : ''
              }`}
            />
          </div>
          <span className={isYearly ? 'font-semibold text-white' : 'text-gray-400'}>
            Yearly
            <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
          </span>
        </label>
      </div>

     
      <div className="max-w-5xl mx-auto flex justify-center items-end">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-[240px] bg-zinc-900 p-6 border border-white/10 transition-transform 
              ${index === 0 ? 'rounded-l-xl' : ''}
              ${index === plans.length - 1 ? 'rounded-r-xl' : ''}
              ${plan.highlight ? 'bg-gradient-to-b from-zinc-900 to-zinc-800 scale-105 z-10 shadow-2xl -mx-[1px]' : 'hover:scale-[1.02]'}
              ${index === 1 ? '' : index === 2 ? '-ml-[1px]' : ''}`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>
            <div className="text-4xl font-bold mb-4">
              {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              {plan.monthlyPrice !== 'Contact Us' && <span className="text-lg text-gray-400"> /mo</span>}
            </div>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            {plan.cta === 'Start Free Trial' ? (
              <Link
                to="/start-free-trial"
                className={`w-full py-4 rounded-lg font-semibold border transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:border-white ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-400 to-purple-500 text-white'
                    : 'border-white/80 text-white'
                } text-center block`}
              >
                {plan.cta}
              </Link>
            ) : (
              <Link
                to="/schedule-demo"
                className="w-full py-4 rounded-lg font-semibold border border-white/80 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:border-white text-center block"
              >
                {plan.cta}
              </Link>
            )}
          </div>
        ))}
      </div>

     
      <div className="text-center mt-16 space-x-4">
        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition">
          Start Free Trial
        </button>
        <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
          Talk to Sales
        </button>
      </div>
    </div>
  );
}
