import React from "react";
import { motion } from "framer-motion";
import {
  MdChecklist,
  MdCalendarToday,
  MdAccessTime,
  MdChatBubbleOutline,
  MdBarChart,
  MdPower
} from "react-icons/md";

export default function Features() {
  const features = [
    {
      icon: <MdChecklist size={40} className="mb-2 text-gray-100" />,
      title: "Task Management",
      description:
        "Organize work your way. Use Kanban boards, task lists, or calendar views to plan and execute seamlessly.",
      link: "#"
    },
    {
      icon: <MdCalendarToday size={40} className="mb-2 text-gray-100" />,
      title: "Timeline & Gantt",
      description:
        "Visualize every milestone. Stay ahead with clear dependencies and critical paths.",
      link: "#",
      image: "../assets/time.png"
    },
    {
      icon: <MdAccessTime size={40} className="mb-2 text-gray-100" />,
      title: "Time & Budget Tracking",
      description:
        "Log hours, control expenses, and keep your project budgets healthy.",
      link: "#"
    },
    {
      icon: <MdChatBubbleOutline size={40} className="mb-2 text-gray-100" />,
      title: "Collaboration",
      description:
        "Comment on tasks, share files, and keep your team & clients on the same page.",
      link: "#"
    },
    {
      icon: <MdBarChart size={40} className="mb-2 text-gray-100" />,
      title: "Reports & Dashboards",
      description:
        "Know exactly where your projects stand — progress, costs, workloads.",
      link: "#",
      image: "../assets/analytics.png"
    },
    {
      icon: <MdPower size={40} className="mb-2 text-gray-100" />,
      title: "Integrations",
      description: "Connect with Slack, Teams, Google Drive, and more.",
      link: "#"
    }
  ];

  const integrations = [
    { name: "Microsoft Teams", logo: "👥" },
    { name: "Slack", logo: "💬" },
    { name: "GitHub", logo: "🐙" },
    { name: "Figma", logo: "🎨" },
    { name: "Google Workspace", logo: "📧" },
    { name: "Jira", logo: "🔧" }
  ];

  return (
    <div className="space-y-20 bg-black text-white">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Designed for Teams That Deliver
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Feature-rich, flexible, and built to help you simplify projects, reduce delays, and scale efficiently.
          </p>
        </div>
      </motion.section>

     
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Core Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to plan, execute, and deliver projects with confidence.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 h-[400px] flex flex-col justify-end"
              style={{
                backgroundImage: `url(${feature.image || ""})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-5">
                <h3 className="text-xl font-bold leading-snug">{feature.title}</h3>
                <p className="text-md text-gray-300 mt-2">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Seamless Integrations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with your favorite tools and streamline your workflow with 150+ integrations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6 text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-1 text-lg mx-auto">
                {item.logo}
              </div>
              <div className="text-xs font-medium whitespace-nowrap text-white mt-2">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
