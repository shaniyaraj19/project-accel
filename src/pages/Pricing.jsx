import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small teams',
      monthlyPrice: '$29',
      yearlyPrice: '$23',
      features: ['Up to 5 team members', '10 projects', 'Basic analytics', 'Email support'],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Best for growing teams',
      monthlyPrice: '$79',
      yearlyPrice: '$63',
      features: ['Up to 15 team members', 'Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'],
      cta: 'Start Free Trial',
      popular: true,
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 'Contact Us',
      yearlyPrice: 'Contact Us',
      features: ['Unlimited team members', 'Unlimited projects', 'Custom analytics', '24/7 support', 'Dedicated account manager', 'Custom solutions'],
      cta: 'Schedule Demo',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 container mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8 min-h-screen flex flex-col justify-center">
        <ScrollReveal direction="up" delay={0.2} duration={1}>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Flexible Plans for Every Team.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, thousands of teams rely on ProjectAccel to run projects with clarity and confidence.
          </p>
        </ScrollReveal>
      </div>

      {/* Toggle Switch */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="flex justify-center mb-12">
          <motion.label 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <span className={!isYearly ? 'font-semibold text-white' : 'text-gray-400'}>Monthly</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
                className="sr-only"
              />
              <div className="w-14 h-7 bg-gray-700 rounded-full" />
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={isYearly ? 'font-semibold text-white' : 'text-gray-400'}>
              Yearly
              <motion.span 
                className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full"
                animate={{ scale: isYearly ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                Save 20%
              </motion.span>
            </span>
          </motion.label>
        </div>
      </ScrollReveal>

      {/* Pricing Cards */}
      <StaggerContainer className="max-w-5xl mx-auto flex justify-center items-end mb-16">
        {plans.map((plan, index) => (
          <StaggerItem
            key={index}
            direction="up"
            className={\`w-[240px] bg-zinc-900 p-6 border border-white/10 transition-all duration-300 hover-glow
              ${index === 0 ? 'rounded-l-xl' : ''}
              ${index === plans.length - 1 ? 'rounded-r-xl' : ''}
              ${plan.highlight ? 'bg-gradient-to-b from-zinc-900 to-zinc-800 scale-105 z-10 shadow-2xl -mx-[1px] border-purple-500/30' : 'hover:scale-[1.02]'}
              ${index === 1 ? '' : index === 2 ? '-ml-[1px]' : ''}`}
          >
            <motion.h3 
              className="text-2xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {plan.name}
            </motion.h3>
            <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>
            <motion.div 
              className="text-4xl font-bold mb-4"
              key={isYearly ? 'yearly' : 'monthly'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              {plan.monthlyPrice !== 'Contact Us' && <span className="text-lg text-gray-400"> /mo</span>}
            </motion.div>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              {plan.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.span
                    className="text-green-400 mr-2"
                    whileHover={{ scale: 1.2 }}
                  >
                    ✔
                  </motion.span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            {plan.cta === 'Start Free Trial' ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/start-free-trial"
                  className={`w-full py-4 rounded-lg font-semibold border transition-all duration-300 hover:bg-white hover:text-black hover:border-white ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-400 to-purple-500 text-white'
                      : 'border-white/80 text-white'
                  } text-center block`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/schedule-demo"
                  className="w-full py-4 rounded-lg font-semibold border border-white/80 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white text-center block"
                >
                  {plan.cta}
                </Link>
              </motion.div>
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* CTA Buttons */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="text-center space-x-4">
          <motion.button 
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
          <motion.button 
            className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Sales
          </motion.button>
        </div>
      </ScrollReveal>
    </div>
  );
}