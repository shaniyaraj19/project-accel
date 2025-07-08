@@ .. @@
 import React from 'react';
 export default function Home() {
   return (
     <div className="space-y-16">    
       {/* Hero Section */}
-      <section className="text-center space-y-4">
-        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Deliver Projects On Time, Every Time.</h1>
-        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
+      <section className="text-center space-y-6 py-12 animate-fade-in-up">
+        <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-float">
+          Deliver Projects On Time, Every Time.
+        </h1>
+        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           Plan, track, and collaborate effortlessly with ProjectAccel — your all-in-one project management tool.
         </p>
-        <div className="flex justify-center gap-4 mt-4">
-          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow">Start Free Trial</button>
-          <button className="bg-gray-100 text-blue-600 px-6 py-2 rounded border">Schedule a Demo</button>
+        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
+          <button className="gradient-bg text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
+            Start Free Trial
+          </button>
+          <button className="glass text-white px-8 py-4 rounded-lg border border-gray-600 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 font-semibold">
+            Schedule a Demo
+          </button>
         </div>
       </section>

       {/* Key Benefits */}
-      <section className="text-center">
-        <h2 className="text-2xl font-semibold mb-6">Why Teams Choose ProjectAccel</h2>
-        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
-          <div className="bg-white p-4 rounded shadow">Plan with confidence: Visual timelines & Kanban boards keep everyone aligned.</div>
-          <div className="bg-white p-4 rounded shadow">Boost accountability: Assign tasks, set priorities, track progress.</div>
-          <div className="bg-white p-4 rounded shadow">Control budgets: Monitor time & costs in real time.</div>
-          <div className="bg-white p-4 rounded shadow">Delight clients: Share project portals for transparency.</div>
+      <section className="text-center animate-fade-in-up stagger-2">
+        <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Why Teams Choose ProjectAccel</h2>
+        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
+          <div className="glass p-6 rounded-xl hover-lift animate-fade-in-up stagger-1">
+            <div className="text-4xl mb-4 animate-float">📊</div>
+            <p className="text-gray-300">Plan with confidence: Visual timelines & Kanban boards keep everyone aligned.</p>
+          </div>
+          <div className="glass p-6 rounded-xl hover-lift animate-fade-in-up stagger-2">
+            <div className="text-4xl mb-4 animate-float">🎯</div>
+            <p className="text-gray-300">Boost accountability: Assign tasks, set priorities, track progress.</p>
+          </div>
+          <div className="glass p-6 rounded-xl hover-lift animate-fade-in-up stagger-3">
+            <div className="text-4xl mb-4 animate-float">💰</div>
+            <p className="text-gray-300">Control budgets: Monitor time & costs in real time.</p>
+          </div>
+          <div className="glass p-6 rounded-xl hover-lift animate-fade-in-up stagger-4">
+            <div className="text-4xl mb-4 animate-float">😊</div>
+            <p className="text-gray-300">Delight clients: Share project portals for transparency.</p>
+          </div>
         </div>
       </section>

       {/* How It Works */}
-      <section className="text-center">
-        <h2 className="text-2xl font-semibold mb-6">Simple Workflow. Powerful Results.</h2>
+      <section className="text-center animate-fade-in-up stagger-3">
+        <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Simple Workflow. Powerful Results.</h2>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
-          <div className="p-4 bg-gray-100 rounded">
-            <strong>📌 Plan</strong>
-            <p>Create projects, set tasks & deadlines.</p>
+          <div className="gradient-border p-6 rounded-xl hover-lift animate-fade-in-left stagger-1">
+            <div className="text-5xl mb-4 animate-pulse-custom">📌</div>
+            <h3 className="text-xl font-bold mb-2 gradient-text">Plan</h3>
+            <p className="text-gray-300">Create projects, set tasks & deadlines.</p>
           </div>
-          <div className="p-4 bg-gray-100 rounded">
-            <strong>🚀 Execute</strong>
-            <p>Collaborate with teams & clients.</p>
+          <div className="gradient-border p-6 rounded-xl hover-lift animate-fade-in-up stagger-2">
+            <div className="text-5xl mb-4 animate-pulse-custom">🚀</div>
+            <h3 className="text-xl font-bold mb-2 gradient-text">Execute</h3>
+            <p className="text-gray-300">Collaborate with teams & clients.</p>
           </div>
-          <div className="p-4 bg-gray-100 rounded">
-            <strong>📊 Track & Optimize</strong>
-            <p>Get clear dashboards & reports.</p>
+          <div className="gradient-border p-6 rounded-xl hover-lift animate-fade-in-right stagger-3">
+            <div className="text-5xl mb-4 animate-pulse-custom">📊</div>
+            <h3 className="text-xl font-bold mb-2 gradient-text">Track & Optimize</h3>
+            <p className="text-gray-300">Get clear dashboards & reports.</p>
           </div>
         </div>
       </section>

       {/* Features Snapshot */}
-      <section className="text-center">
-        <h2 className="text-2xl font-semibold mb-6">Everything You Need. Nothing You Don't.</h2>
-        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
-          <div>✔ Gantt & Kanban Views</div>
-          <div>✔ Time Tracking & Timesheets</div>
-          <div>✔ File Sharing & Discussions</div>
-          <div>✔ Budget & Expense Tracking</div>
-          <div>✔ Reports & Dashboards</div>
-          <div>✔ Client Portals</div>
+      <section className="text-center animate-fade-in-up stagger-4">
+        <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Everything You Need. Nothing You Don't.</h2>
+        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
+          <div className="glass p-4 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up stagger-1">
+            <span className="text-green-400">✔</span> Gantt & Kanban Views
+          </div>
+          <div className="glass p-4 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up stagger-2">
+            <span className="text-green-400">✔</span> Time Tracking & Timesheets
+          </div>
+          <div className="glass p-4 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up stagger-3">
+            <span className="text-green-400">✔</span> File Sharing & Discussions
+          </div>
+          <div className="glass p-4 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up stagger-4">
+            <span className="text-green-400">✔</span> Budget & Expense Tracking
+          </div>
+          <div className="glass p-4 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up stagger-5">
+            <span className="text-green-400">✔</span> Reports & Dashboards
+          </div>
+          <div className="glass p-4 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up stagger-6">
+            <span className="text-green-400">✔</span> Client Portals
+          </div>
         </div>
       </section>

       {/* Testimonials */}
-      <section className="text-center max-w-3xl mx-auto">
-        <h2 className="text-2xl font-semibold mb-4">See What Our Customers Are Saying</h2>
-        <blockquote className="italic text-lg text-gray-700">
+      <section className="text-center max-w-4xl mx-auto animate-fade-in-up stagger-5">
+        <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">See What Our Customers Are Saying</h2>
+        <div className="glass p-8 rounded-xl hover-lift">
+        <blockquote className="italic text-xl text-gray-300 mb-4">
           "We cut project delays by 40% and improved client trust overnight. ProjectAccel keeps us on track like nothing else."
         </blockquote>
-        <p className="mt-2 font-semibold">— Priya, Director at TechBridge Solutions</p>
+        <p className="font-semibold gradient-text">— Priya, Director at TechBridge Solutions</p>
+        </div>
       </section>

       {/* Final CTA */}
-      <section className="text-center space-y-4">
-        <h2 className="text-xl font-semibold">Ready to simplify your projects?</h2>
-        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow">Try Free for 14 Days</button>
-        <p className="text-sm text-gray-500">No credit card needed.</p>
+      <section className="text-center space-y-6 py-12 animate-fade-in-up stagger-6">
+        <h2 className="text-2xl md:text-3xl font-semibold gradient-text">Ready to simplify your projects?</h2>
+        <button className="gradient-bg text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
+          Try Free for 14 Days
+        </button>
+        <p className="text-gray-400">No credit card needed.</p>
       </section>
     </div>
   );
 }
   )
 }