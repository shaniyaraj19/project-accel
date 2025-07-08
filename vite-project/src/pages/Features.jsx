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
    <div className="space-y-20 bg-black text-white">
      {/* Hero Section */}
      <section className="text-center py-12 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 border border-white/90 animate-scale-in w-fit mx-auto">
            <span className="text-blue-400 mr-2">⚡</span>
            <span className="text-sm text-gray-300">Powered by AI and built for scale</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Features That Drive Results
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools designed to accelerate your team's success and deliver exceptional project outcomes.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="animate-fade-in-up stagger-2">
        <div className="text-center mb-16 pt-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Core Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to plan, execute, and deliver projects with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="glass p-8 rounded-xl hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-6">
                <div className="text-4xl animate-float">{feature.icon}</div>
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
            <div key={index} className="glass p-6 text-center hover-scale animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl mb-3">{integration.logo}</div>
              <div className="text-sm text-gray-300">{integration.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="gradient-bg text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
            View All Integrations <span className="ml-2">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
