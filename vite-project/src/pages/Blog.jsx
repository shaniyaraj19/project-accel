import React from 'react';

export default function Blog() {
  const featuredPost = {
    title: "The Future of Project Management: AI-Powered Insights",
    excerpt: "Discover how artificial intelligence is revolutionizing project management and helping teams deliver better results faster than ever before.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "🤖"
  };

  const blogPosts = [
    {
      title: "5 Strategies to Eliminate Project Delays Before They Start",
      excerpt: "Learn proven techniques to identify and prevent project bottlenecks using predictive analytics and smart planning.",
      author: "Marcus Johnson",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Strategy",
      image: "⏰"
    },
    {
      title: "Gantt vs Kanban vs Scrum: Choosing the Right Methodology",
      excerpt: "A comprehensive comparison of project management methodologies to help you choose the best approach for your team.",
      author: "Priya Sharma",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Methodology",
      image: "📊"
    },
    {
      title: "Building High-Performance Remote Teams",
      excerpt: "Essential strategies for managing distributed teams and maintaining productivity in a remote-first world.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Remote Work",
      image: "🌐"
    },
    {
      title: "The ROI of Project Management Software",
      excerpt: "Calculate the real return on investment of implementing professional project management tools in your organization.",
      author: "Lisa Rodriguez",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Business",
      image: "💰"
    },
    {
      title: "Mastering Stakeholder Communication",
      excerpt: "Best practices for keeping stakeholders informed, engaged, and satisfied throughout the project lifecycle.",
      author: "James Wilson",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Communication",
      image: "🗣️"
    },
    {
      title: "Agile Project Management in Non-Tech Industries",
      excerpt: "How construction, marketing, and other traditional industries are adopting agile methodologies for better results.",
      author: "Anna Thompson",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Agile",
      image: "🏗️"
    }
  ];

  const categories = ["All", "Strategy", "Technology", "Methodology", "Remote Work", "Business", "Communication", "Agile"];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="hero-bg text-center py-20 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 animate-scale-in">
            <span className="text-orange-400 mr-2">📚</span>
            <span className="text-sm text-gray-300">Expert insights and industry trends</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Project Management Insights
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with expert advice, industry insights, and practical guides from project management professionals.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="animate-fade-in-up stagger-2">
        <div className="max-w-6xl mx-auto">
          <div className="pro-card p-8 md:p-12 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-sm">Featured</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                  <span>By {featuredPost.author}</span>
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <button className="btn-primary">
                  Read Article
                  <span className="ml-2">→</span>
                </button>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-4 animate-float">{featuredPost.image}</div>
                <div className="text-gray-400 text-sm">Featured Article</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Category Filter */}
      <section className="animate-fade-in-up stagger-3">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  index === 0 
                    ? 'btn-primary' 
                    : 'btn-secondary hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="animate-fade-in-up stagger-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="pro-card p-6 hover-lift animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 animate-float">{post.image}</div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold gradient-text mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Newsletter Signup */}
      <section className="animate-fade-in-up stagger-5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pro-card p-12">
            <div className="text-5xl mb-6 animate-float">📧</div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest project management insights, tips, and industry trends delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"
              />
              <button className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="text-center py-20 animate-fade-in-up stagger-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Ready to Transform Your Projects?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Put these insights into practice with ProjectAccel's comprehensive project management platform.
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
        </div>
      </section>
    </div>
  );
}