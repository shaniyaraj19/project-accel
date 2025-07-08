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
      <section className="text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Project Management Insights
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Stay ahead with expert advice, industry insights, and practical guides from project management professionals.
        </p>
      </section>
    </div>
  );
}
