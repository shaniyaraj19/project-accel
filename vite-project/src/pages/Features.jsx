import React from 'react';

export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "AI-Powered Project Planning",
      description: "Leverage machine learning to create accurate project timelines, resource allocation, and risk assessments automatically.",
      benefits: ["Smart timeline generation", "Resource optimization", "Risk prediction", "Automated scheduling"]
    },
    {
      icon: "📊",
      title: "Advanced Analytics & Reporting",
      description: "Get deep insights into project performance with real-time dashboards, predictive analytics, and custom reporting.",
      benefits: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Performance metrics"]
    },
    {
      icon: "🤝",
      title: "Unified Team Collaboration",
      description: "Seamlessly collaborate with integrated chat, video conferencing, file sharing, and real-time document editing.",
      benefits: ["Integrated communication", "Real-time editing", "File versioning", "Team workspaces"]
    },
    {
      icon: "⚡",
      title: "Workflow Automation",
      description: "Automate repetitive tasks with smart triggers, custom workflows, and intelligent notifications.",
      benefits: ["Smart triggers", "Custom workflows", "Automated notifications", "Task dependencies"]
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced access controls.",
      benefits: ["End-to-end encryption", "SOC 2 compliance", "Role-based access", "Audit trails"]
    },
    {
      icon: "🌐",
      title: "Global Scalability",
      description: "Scale from small teams to enterprise organizations with multi-region deployment and 99.9% uptime.",
      benefits: ["Multi-region hosting", "99.9% uptime SLA", "Unlimited scaling", "Global CDN"]
    }
  ];

  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "Microsoft Teams", logo: "👥" },
    { name: "Google Workspace", logo: "📧" },
    { name: "Jira", logo: "🔧" },
    { name: "GitHub", logo: "🐙" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Zoom", logo: "📹" },
    { name: "Dropbox", logo: "📦" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="hero-bg text-center py-20 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 animate-scale-in">
            <span className="text-blue-400 mr-2">⚡</span>
            <span className="text-sm text-gray-300">Powered by AI and built for scale</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Features That Drive Results
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools designed to accelerate your team's success and deliver exceptional project outcomes.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="animate-fade-in-up stagger-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Core Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to plan, execute, and deliver projects with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="pro-card p-8 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start space-x-6">
                <div className="feature-icon animate-float text-4xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold gradient-text mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-green-400 text-sm">✓</span>
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Feature Highlights */}
      <section className="animate-fade-in-up stagger-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Advanced Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Go beyond basic project management with enterprise-grade features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🧠", title: "AI Assistant", desc: "Smart project recommendations and insights" },
            { icon: "📱", title: "Mobile Apps", desc: "Full-featured iOS and Android applications" },
            { icon: "🔄", title: "API Access", desc: "Comprehensive REST API for custom integrations" },
            { icon: "📈", title: "Custom Fields", desc: "Tailor projects to your specific workflow needs" },
            { icon: "⏰", title: "Time Tracking", desc: "Automatic and manual time tracking with reporting" },
            { icon: "💰", title: "Budget Management", desc: "Real-time budget tracking and cost analysis" },
            { icon: "📋", title: "Templates", desc: "Pre-built templates for common project types" },
            { icon: "🎨", title: "White Labeling", desc: "Customize the platform with your brand" }
          ].map((feature, index) => (
            <div key={index} className="pro-card p-6 text-center hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
              <h3 className="text-lg font-semibold gradient-text mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Integrations */}
      <section className="animate-fade-in-up stagger-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Seamless Integrations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with your favorite tools and streamline your workflow with 150+ integrations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <div key={index} className="pro-card p-6 text-center hover-scale animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-3xl mb-3">{integration.logo}</div>
              <div className="text-sm text-gray-300">{integration.name}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            View All Integrations
            <span className="ml-2">→</span>
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="text-center py-20 animate-fade-in-up stagger-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience the Future of Project Management
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how ProjectAccel's advanced features can transform your team's productivity and project success rate.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary text-lg px-10 py-4 hover-glow">
              Start Free Trial
              <span className="ml-2">→</span>
            </button>
            <button className="btn-secondary text-lg px-10 py-4">
              Schedule Demo
              <span className="ml-2">📅</span>
            </button>
          </div>
          
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No setup fees</span>
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