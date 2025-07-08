import React, { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => setIsYearly((prev) => !prev);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        "Up to 5 projects",
        "Core PM features",
        "Kanban & List views",
        "Basic reporting",
        "Email support",
        "5GB storage"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Best for growing businesses",
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        "Unlimited projects",
        "Advanced dashboards",
        "Time & budget tracking",
        "Custom fields",
        "Priority support",
        "100GB storage",
        "Advanced integrations",
        "Team collaboration tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Advanced security & compliance",
        "Dedicated success manager",
        "Custom integrations",
        "SLA guarantees",
        "White-label options",
        "Advanced analytics"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime."
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer: "Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Contact our sales team for details."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="hero-bg text-center py-20 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 animate-scale-in">
            <span className="text-purple-400 mr-2">💎</span>
            <span className="text-sm text-gray-300">Transparent pricing, no hidden fees</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Simple, Transparent Pricing
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your team's needs. Start free, scale as you grow, and only pay for what you use.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={!isYearly ? 'font-bold gradient-text' : 'text-gray-400'}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={toggleBilling}
              />
              <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-green-400 peer-checked:to-purple-400"></div>
            </label>
            <span className={isYearly ? 'font-bold gradient-text' : 'text-gray-400'}>
              Yearly
              <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="animate-fade-in-up stagger-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card p-8 hover-lift animate-fade-in-up ${plan.popular ? 'featured' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg animate-pulse-custom">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold gradient-text mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="text-5xl font-bold text-white mb-2">
                        ₹{isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                        <span className="text-lg font-normal text-gray-400">
                          {isYearly ? '/year' : '/month'}
                        </span>
                      </div>
                      {isYearly && (
                        <div className="text-sm text-gray-400">
                          ₹{Math.round(plan.yearlyPrice / 12).toLocaleString()} per month, billed annually
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-4xl font-bold gradient-text mb-2">Custom</div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'btn-primary hover-glow' 
                  : 'btn-secondary'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Feature Comparison */}
      <section className="animate-fade-in-up stagger-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Compare Plans</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See exactly what's included in each plan to make the best choice for your team.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full glass rounded-xl">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-6 text-gray-300">Features</th>
                <th className="text-center p-6 text-gray-300">Starter</th>
                <th className="text-center p-6 gradient-text">Professional</th>
                <th className="text-center p-6 text-gray-300">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ["Projects", "5", "Unlimited", "Unlimited"],
                ["Team Members", "10", "50", "Unlimited"],
                ["Storage", "5GB", "100GB", "Unlimited"],
                ["Advanced Analytics", "❌", "✅", "✅"],
                ["Custom Fields", "❌", "✅", "✅"],
                ["API Access", "❌", "✅", "✅"],
                ["Priority Support", "❌", "✅", "✅"],
                ["SLA Guarantee", "❌", "❌", "✅"]
              ].map((row, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="p-4 text-gray-300 font-medium">{row[0]}</td>
                  <td className="p-4 text-center text-gray-400">{row[1]}</td>
                  <td className="p-4 text-center text-white">{row[2]}</td>
                  <td className="p-4 text-center text-gray-400">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* FAQ Section */}
      <section className="animate-fade-in-up stagger-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="pro-card p-6 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="text-lg font-semibold gradient-text mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="text-center py-20 animate-fade-in-up stagger-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams who've transformed their project delivery with ProjectAccel.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="btn-primary text-lg px-12 py-4 hover-glow">
              Start Free Trial
              <span className="ml-2">→</span>
            </button>
            <button className="btn-secondary text-lg px-12 py-4">
              Talk to Sales
              <span className="ml-2">💬</span>
            </button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}