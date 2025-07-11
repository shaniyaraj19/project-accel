import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

export default function Blog() {
  const blogPosts = [
    {
      title: "The Art of Project Planning",
      category: "Planning",
      excerpt: "Learn the essential steps to create a robust project plan that sets your team up for success.",
      author: "Sarah Johnson",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "/images/blog/planning.jpg"
    },
    {
      title: "Agile vs. Waterfall: Choosing the Right Methodology",
      category: "Methodologies",
      excerpt: "Compare the two most popular project management approaches and discover which one suits your needs.",
      author: "Mike Chen",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      image: "/images/blog/methodologies.jpg"
    },
    {
      title: "Risk Management Strategies",
      category: "Risk Management",
      excerpt: "Identify, assess, and mitigate project risks effectively with these proven strategies.",
      author: "David Smith",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      image: "/images/blog/risk.jpg"
    }
  ];

  return (
    <div className="bg-black text-white container mx-auto px-4">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <ScrollReveal direction="up" delay={0.2} duration={1}>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Project Management Insights
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Stay ahead with expert advice, industry insights, and practical guides from project management professionals.
          </p>
        </ScrollReveal>
      </section>

      {/* Blog List Section */}
      <section className="py-20">
        <StaggerContainer className="w-full max-w-4xl mx-auto space-y-10">
          {blogPosts.map((post, index) => (
            <StaggerItem
              key={index}
              direction="up"
              className="flex flex-col md:flex-row bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-md overflow-hidden hover-glow group"
            >
              {/* Image */}
              <div className="md:w-1/3 h-52 md:h-auto">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-5 flex flex-col justify-center space-y-2">
                <motion.span 
                  className="uppercase text-xs text-purple-400 font-semibold tracking-wide"
                  whileHover={{ scale: 1.05 }}
                >
                  {post.category}
                </motion.span>
                <motion.h2 
                  className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {post.title}
                </motion.h2>
                <p className="text-sm text-slate-300">{post.excerpt}</p>
                <div className="text-xs text-slate-400">
                  By {post.author} • {post.date} • {post.readTime}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}