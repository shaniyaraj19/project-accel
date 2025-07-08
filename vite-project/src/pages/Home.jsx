import React from 'react';

export default function Home() {
  return (
    <div className="space-y-20">    
      {/* Hero Section */}
      <section className="hero-bg text-center space-y-8 py-20 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 animate-scale-in">
            <span className="text-green-400 mr-2">🚀</span>
            <span className="text-sm text-gray-300">Trusted by 10,000+ teams worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text animate-float leading-tight">
            Deliver Projects On Time, Every Time.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6">
            Transform your project management with AI-powered insights, real-time collaboration, and enterprise-grade security. Join thousands of teams who've accelerated their success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="btn-primary text-lg px-10 py-4 hover-glow">
              Start Free Trial
              <span className="ml-2">→</span>
            </button>
            <button className="btn-secondary text-lg px-10 py-4">
              Watch Demo
              <span className="ml-2">▶</span>
            </button>
          </div>
          
          <div className="flex justify-center items-center gap-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="animate-fade-in-up stagger-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-scale-in stagger-1">
            <div className="text-3xl md:text-4xl font-bold gradient-text stat-number">10K+</div>
            <div className="text-gray-400 mt-2">Active Teams</div>
          </div>
          <div className="text-center animate-scale-in stagger-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text stat-number">99.9%</div>
            <div className="text-gray-400 mt-2">Uptime</div>
          </div>
          <div className="text-center animate-scale-in stagger-3">
            <div className="text-3xl md:text-4xl font-bold gradient-text stat-number">40%</div>
            <div className="text-gray-400 mt-2">Faster Delivery</div>
          </div>
          <div className="text-center animate-scale-in stagger-4">
            <div className="text-3xl md:text-4xl font-bold gradient-text stat-number">150+</div>
            <div className="text-gray-400 mt-2">Integrations</div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Key Benefits */}
      <section className="animate-fade-in-up stagger-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Why Industry Leaders Choose ProjectAccel</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with enterprise-grade project management that scales with your ambitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="pro-card p-8 hover-lift animate-fade-in-up stagger-1">
            <div className="feature-icon animate-float">
              <span>🎯</span>
            </div>
            <h3 className="text-xl font-semibold gradient-text mb-3">Strategic Planning</h3>
            <p className="text-gray-300">AI-powered project insights and predictive analytics help you plan with unprecedented accuracy and foresight.</p>
          </div>
          
          <div className="pro-card p-8 hover-lift animate-fade-in-up stagger-2">
            <div className="feature-icon animate-float">
              <span>⚡</span>
            </div>
            <h3 className="text-xl font-semibold gradient-text mb-3">Lightning Fast</h3>
            <p className="text-gray-300">Boost team productivity by 40% with intelligent automation, smart workflows, and real-time collaboration.</p>
          </div>
          
          <div className="pro-card p-8 hover-lift animate-fade-in-up stagger-3">
            <div className="feature-icon animate-float">
              <span>🔒</span>
            </div>
            <h3 className="text-xl font-semibold gradient-text mb-3">Enterprise Security</h3>
            <p className="text-gray-300">Bank-grade encryption, SOC 2 compliance, and advanced access controls protect your most sensitive data.</p>
          </div>
          
          <div className="pro-card p-8 hover-lift animate-fade-in-up stagger-4">
            <div className="feature-icon animate-float">
              <span>📈</span>
            </div>
            <h3 className="text-xl font-semibold gradient-text mb-3">Scalable Growth</h3>
            <p className="text-gray-300">From startup to enterprise, our platform grows with you. Handle unlimited projects and team members effortlessly.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* How It Works */}
      <section className="animate-fade-in-up stagger-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Simple Workflow. Powerful Results.</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started in minutes with our intuitive three-step process that transforms how your team works.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center animate-fade-in-left stagger-1">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-3xl animate-pulse-custom">
              📋
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">1. Plan & Structure</h3>
            <p className="text-gray-300 text-lg">Create projects with AI-assisted planning. Set milestones, dependencies, and resource allocation with intelligent recommendations.</p>
          </div>
          
          <div className="text-center animate-fade-in-up stagger-2">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-bg-secondary flex items-center justify-center text-3xl animate-pulse-custom">
              🚀
            </div>
            <h3 className="text-2xl font-bold gradient-text-secondary mb-4">2. Execute & Collaborate</h3>
            <p className="text-gray-300 text-lg">Real-time collaboration with advanced communication tools. Track progress with live dashboards and automated reporting.</p>
          </div>
          
          <div className="text-center animate-fade-in-right stagger-3">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-bg-accent flex items-center justify-center text-3xl animate-pulse-custom">
              📊
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">3. Analyze & Optimize</h3>
            <p className="text-gray-300 text-lg">Gain insights with advanced analytics. Optimize future projects with machine learning-powered recommendations.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features Snapshot */}
      <section className="animate-fade-in-up stagger-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Everything You Need. Nothing You Don't.</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive project management tools designed for modern teams who demand excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "📊", title: "Advanced Analytics & Reporting", desc: "Real-time insights and predictive analytics" },
            { icon: "⏱️", title: "Smart Time Tracking", desc: "AI-powered time estimation and tracking" },
            { icon: "💬", title: "Unified Communication", desc: "Integrated chat, video calls, and file sharing" },
            { icon: "🔄", title: "Workflow Automation", desc: "Custom automations and smart triggers" },
            { icon: "📱", title: "Mobile-First Design", desc: "Full-featured mobile apps for iOS and Android" },
            { icon: "🌐", title: "Global Collaboration", desc: "Multi-timezone support and localization" }
          ].map((feature, index) => (
            <div key={index} className="pro-card p-6 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold gradient-text mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Testimonials */}
      <section className="animate-fade-in-up stagger-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how top companies are transforming their project delivery with ProjectAccel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="testimonial-card p-8 hover-lift animate-fade-in-up stagger-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mr-4">
                P
              </div>
              <div>
                <div className="font-semibold text-white">Priya Sharma</div>
                <div className="text-gray-400 text-sm">Director, TechBridge Solutions</div>
              </div>
            </div>
            <blockquote className="text-gray-300 italic mb-4">
              "ProjectAccel transformed our delivery process. We've reduced project delays by 40% and our client satisfaction scores have never been higher."
            </blockquote>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
          </div>
          
          <div className="testimonial-card p-8 hover-lift animate-fade-in-up stagger-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full gradient-bg-secondary flex items-center justify-center text-white font-bold mr-4">
                M
              </div>
              <div>
                <div className="font-semibold text-white">Marcus Chen</div>
                <div className="text-gray-400 text-sm">CTO, InnovateLabs</div>
              </div>
            </div>
            <blockquote className="text-gray-300 italic mb-4">
              "The AI-powered insights have revolutionized how we plan projects. We can now predict and prevent bottlenecks before they happen."
            </blockquote>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
          </div>
          
          <div className="testimonial-card p-8 hover-lift animate-fade-in-up stagger-3">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full gradient-bg-accent flex items-center justify-center text-white font-bold mr-4">
                S
              </div>
              <div>
                <div className="font-semibold text-white">Sarah Johnson</div>
                <div className="text-gray-400 text-sm">VP Operations, BuildCorp</div>
              </div>
            </div>
            <blockquote className="text-gray-300 italic mb-4">
              "From construction to software development, ProjectAccel adapts to our diverse project needs. It's the only tool we need."
            </blockquote>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Final CTA */}
      <section className="text-center space-y-8 py-20 animate-fade-in-up stagger-7">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Ready to Transform Your Projects?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful teams who've accelerated their project delivery with ProjectAccel.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="btn-primary text-lg px-12 py-4 hover-glow">
              Start Your Free Trial
              <span className="ml-2">→</span>
            </button>
            <button className="btn-secondary text-lg px-12 py-4">
              Schedule a Demo
              <span className="ml-2">📅</span>
            </button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>24/7 expert support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}