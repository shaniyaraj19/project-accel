// import React from 'react';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import { Link } from 'react-router-dom';
// import { MdBarChart, MdTrackChanges, MdAttachMoney, MdGroups, MdChecklist, MdCheckCircle } from 'react-icons/md';
// import { FaRocket } from 'react-icons/fa';

// const fadeIn = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.6, type: 'spring' }
//   })
// };

// export default function Home() {
//   React.useEffect(() => {
//     AOS.init({ once: true, duration: 800 });
//   }, []);

//   return (
//     <div
//       className="relative bg-black text-white overflow-hidden"
//     >
//       <div className="relative z-10 space-y-16">

        
//         <section
//           className="relative text-center space-y-6 py-12 overflow-hidden"
//         >
//           <div className="relative z-10">
//             <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
//               Deliver Projects
//               <br />
//               On Time, Every Time.
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Plan, track, and collaborate effortlessly with ProjectAccel — your all-in-one project management tool.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//               <Link to="/start-free-trial" className="bg-gradient-to-r from-white to-gray-400 text-black px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-center">
//                 Start Free Trial
//               </Link>
//               <Link to="/schedule-demo" className="bg-white/10 text-white px-8 py-4 rounded-lg border border-gray-600 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 font-semibold text-center">
//                 Schedule a Demo
//               </Link>
//             </div>

//             <div className="inline-flex items-center px-4 py-2 mt-10 rounded-full shimmer-glow text-sm text-gray-300 backdrop-blur-sm border border-white/50 hover:border-white hover:scale-[1.02] hover:brightness-125 transition-all duration-300">
//               <span className="text-green-400 mr-2">🚀</span>
//               Trusted by <span className="mx-1 text-white font-semibold">10,000+</span> teams worldwide
//             </div>
//           </div>
//         </section>

       
//         <section
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             Why Teams Choose ProjectAccel
//           </h2>
//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 max-w-2xl mx-auto"
//           >
//             {[
//               [<MdBarChart size={40} className="mb-4 text-gray-100" />, "Plan with confidence: Visual timelines & Kanban boards keep everyone aligned."],
//               [<MdTrackChanges size={40} className="mb-4 text-gray-100" />, "Boost accountability: Assign tasks, set priorities, track progress."],
//               [<MdAttachMoney size={40} className="mb-4 text-gray-100" />, "Control budgets: Monitor time & costs in real time."],
//               [<MdGroups size={40} className="mb-4 text-gray-100" />, "Delight clients: Share project portals for transparency."]
//             ].map(([icon, text], i) => (
//               <div
//                 key={i}
//                 className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
//               >
//                 <div className="text-4xl mb-4 animate-float">{icon}</div>
//                 <p className="text-gray-300">{text}</p>
//               </div>
//             ))}
//           </div>
//         </section>

     
//         <section
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             Simple Workflow. Powerful Results.
//           </h2>
//           <div
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto"
//           >
//             {[
//               [<MdChecklist size={40} className="mb-3 text-gray-100" />, "Plan", "Create projects, set tasks & deadlines."],
//               [<FaRocket size={40} className="mb-3 text-gray-100" />, "Execute", "Collaborate with teams & clients."],
//               [<MdBarChart size={40} className="mb-3 text-gray-100" />, "Track & Optimize", "Get clear dashboards & reports."]
//             ].map(([icon, title, desc], i) => (
//               <div
//                 key={i}
//                 className="border border-white/20 p-4 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
//               >
//                 <div className="text-4xl mb-3 animate-pulse-custom">{icon}</div>
//                 <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
//                 <p className="text-gray-300 text-sm">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

       
//         <section
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             Everything You Need. Nothing You Don't.
//           </h2>
//           <div
//             className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
//           >
//             {[
//               "Gantt & Kanban Views",
//               "Time Tracking & Timesheets",
//               "File Sharing & Discussions",
//               "Budget & Expense Tracking",
//               "Reports & Dashboards",
//               "Client Portals"
//             ].map((text, i) => (
//               <div
//                 key={i}
//                 className="bg-white/10 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
//               >
//                 <MdCheckCircle size={22} className="text-gray-100" /> {text}
//               </div>
//             ))}
//           </div>
//         </section>

       
//         <section
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             See What Our Customers Are Saying
//           </h2>
//           <div
//             className="bg-white/10 p-8 rounded-xl"
//           >
//             <blockquote className="italic text-xl text-gray-300 mb-4">
//               "We cut project delays by 40% and improved client trust overnight. ProjectAccel keeps us on track like nothing else."
//             </blockquote>
//             <p className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               — Priya, Director at TechBridge Solutions
//             </p>
//           </div>
//         </section>

        
//         <section
//           className="text-center space-y-6 py-12"
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Ready to simplify your projects?
//           </h2>
//           <button className="bg-gradient-to-r from-white to-gray-400 text-black px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
//             Try Free for 14 Days
//           </button>
//           <p className="text-gray-400">No credit card needed.</p>
//         </section>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdBarChart, MdTrackChanges, MdAttachMoney, MdGroups, MdChecklist, MdCheckCircle } from 'react-icons/md';
import { FaRocket } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Home() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="relative z-10 space-y-20">

        {/* Hero Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative text-center space-y-6 py-12"
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Deliver Projects<br />On Time, Every Time.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Plan, track, and collaborate effortlessly with ProjectAccel — your all-in-one project management tool.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/start-free-trial" className="bg-gradient-to-r from-white to-gray-400 text-black px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
              Start Free Trial
            </Link>
            <Link to="/schedule-demo" className="bg-white/10 text-white px-8 py-4 rounded-lg border border-gray-600 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 font-semibold">
              Schedule a Demo
            </Link>
          </div>
          <div className="inline-flex items-center px-4 py-2 mt-10 rounded-full shimmer-glow text-sm text-gray-300 backdrop-blur-sm border border-white/50 hover:border-white hover:scale-[1.02] hover:brightness-125 transition-all duration-300">
            <span className="text-green-400 mr-2">🚀</span>
            Trusted by <span className="mx-1 text-white font-semibold">10,000+</span> teams worldwide
          </div>
        </motion.section>

        {/* Key Benefits */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Why Teams Choose ProjectAccel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              [<MdBarChart size={40} className="mb-4 text-gray-100" />, "Plan with confidence: Visual timelines & Kanban boards keep everyone aligned."],
              [<MdTrackChanges size={40} className="mb-4 text-gray-100" />, "Boost accountability: Assign tasks, set priorities, track progress."],
              [<MdAttachMoney size={40} className="mb-4 text-gray-100" />, "Control budgets: Monitor time & costs in real time."],
              [<MdGroups size={40} className="mb-4 text-gray-100" />, "Delight clients: Share project portals for transparency."]
            ].map(([icon, text], i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <p className="text-gray-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Simple Workflow. Powerful Results.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              [<MdChecklist size={40} className="mb-3 text-gray-100" />, "Plan", "Create projects, set tasks & deadlines."],
              [<FaRocket size={40} className="mb-3 text-gray-100" />, "Execute", "Collaborate with teams & clients."],
              [<MdBarChart size={40} className="mb-3 text-gray-100" />, "Track & Optimize", "Get clear dashboards & reports."]
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-white/20 p-4 rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-3 animate-pulse-custom">{icon}</div>
                <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Snapshot */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Everything You Need. Nothing You Don't.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Gantt & Kanban Views",
              "Time Tracking & Timesheets",
              "File Sharing & Discussions",
              "Budget & Expense Tracking",
              "Reports & Dashboards",
              "Client Portals"
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              >
                <MdCheckCircle size={22} className="text-gray-100" /> {text}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            See What Our Customers Are Saying
          </h2>
          <div className="bg-white/10 p-8 rounded-xl">
            <blockquote className="italic text-xl text-gray-300 mb-4">
              "We cut project delays by 40% and improved client trust overnight. ProjectAccel keeps us on track like nothing else."
            </blockquote>
            <p className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              — Priya, Director at TechBridge Solutions
            </p>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6 py-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to simplify your projects?
          </h2>
          <button className="bg-gradient-to-r from-white to-gray-400 text-black px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
            Try Free for 14 Days
          </button>
          <p className="text-gray-400">No credit card needed.</p>
        </motion.section>

      </div>
    </div>
  );
}
