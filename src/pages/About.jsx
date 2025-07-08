@@ .. @@
 import React from 'react';
 export default function About() {
   return (
     <div className="space-y-16">
       {/* Headline */}
-      <section className="text-center">
-        <h1 className="text-4xl md:text-5xl font-bold mb-4">Built to Make Projects Simple, Transparent, and Successful.</h1>
-        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
+      <section className="text-center animate-fade-in-up">
+        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Built to Make Projects Simple, Transparent, and Successful.</h1>
+        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           We believe managing projects should be easier — not overwhelming.
         </p>
       </section>

       {/* Mission */}
-      <section className="max-w-3xl mx-auto">
-        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
-        <p>
+      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-2">
+        <div className="glass p-8 rounded-xl hover-lift">
+        <h2 className="text-2xl font-semibold mb-4 gradient-text">Our Mission</h2>
+        <p className="text-gray-300 text-lg">
           At ProjectAccel, our mission is to help teams plan smarter, collaborate better, and deliver projects on time, every time.
         </p>
+        </div>
       </section>

       {/* Origin Story */}
-      <section className="max-w-3xl mx-auto">
-        <h2 className="text-xl font-semibold mb-2">The Story Behind ProjectAccel</h2>
-        <p className="mb-4">
+      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-3">
+        <div className="glass p-8 rounded-xl hover-lift">
+        <h2 className="text-2xl font-semibold mb-4 gradient-text">The Story Behind ProjectAccel</h2>
+        <p className="mb-4 text-gray-300 text-lg">
           We started ProjectAccel because we faced the same challenges you do — missed deadlines, unclear responsibilities, surprise costs.
         </p>
-        <p>
+        <p className="text-gray-300 text-lg">
           As a team of tech builders, project managers, and process geeks, we wanted a tool that was powerful yet easy to use, flexible but structured. When we couldn't find it, we built it.
         </p>
+        </div>
       </section>

       {/* Values */}
-      <section className="max-w-4xl mx-auto text-center">
-        <h2 className="text-xl font-semibold mb-6">What We Stand For</h2>
+      <section className="max-w-6xl mx-auto text-center animate-fade-in-up stagger-4">
+        <h2 className="text-3xl font-semibold mb-8 gradient-text">What We Stand For</h2>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
-          <div className="p-4 bg-white rounded shadow">
-            <h3 className="font-bold text-lg mb-1">💡 Clarity</h3>
-            <p className="text-sm">We simplify work so teams always know what's next.</p>
+          <div className="glass p-6 rounded-xl hover-lift animate-fade-in-up stagger-1">
+            <div className="text-4xl mb-4 animate-float">💡</div>
+            <h3 className="font-bold text-xl mb-3 gradient-text">Clarity</h3>
+            <p className="text-gray-300">We simplify work so teams always know what's next.</p>
           </div>
-          <div className="p-4 bg-white rounded shadow">
-            <h3 className="font-bold text-lg mb-1">🤝 Accountability</h3>
-            <p className="text-sm">We make ownership visible so nothing falls through the cracks.</p>
+          <div className="glass p-6 rounded-xl hover-lift animate-fade-in-up stagger-2">
+            <div className="text-4xl mb-4 animate-float">🤝</div>
+            <h3 className="font-bold text-xl mb-3 gradient-text">Accountability</h3>
+            <p className="text-gray-300">We make ownership visible so nothing falls through the cracks.</p>
           </div>
-          <div className="p-4 bg-white rounded shadow">
-            <h3 className="font-bold text-lg mb-1">🚀 Results</h3>
-            <p className="text-sm">We help businesses hit deadlines and control budgets.</p>
+          <div className="glass p-6 rounded-xl hover-lift animate-fade-in-up stagger-3">
+            <div className="text-4xl mb-4 animate-float">🚀</div>
+            <h3 className="font-bold text-xl mb-3 gradient-text">Results</h3>
+            <p className="text-gray-300">We help businesses hit deadlines and control budgets.</p>
           </div>
         </div>
       </section>

       {/* Today */}
-      <section className="max-w-3xl mx-auto">
-        <h2 className="text-xl font-semibold mb-2">Today</h2>
-        <p>
+      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-5">
+        <div className="glass p-8 rounded-xl hover-lift">
+        <h2 className="text-2xl font-semibold mb-4 gradient-text">Today</h2>
+        <p className="text-gray-300 text-lg">
           Today, hundreds of teams — from startups to large agencies to construction firms — trust ProjectAccel to manage their day-to-day work.
           Whether launching a new product, building a home, or running a marketing campaign, they rely on us to keep projects moving.
         </p>
+        </div>
       </section>

       {/* Careers CTA */}
-      <section className="text-center mt-12">
-        <h2 className="text-xl font-semibold mb-2">Join Us</h2>
-        <p className="mb-4">We're growing and always looking for great people to join our team.</p>
-        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">Explore Careers</button>
+      <section className="text-center mt-12 animate-fade-in-up stagger-6">
+        <h2 className="text-2xl font-semibold mb-4 gradient-text">Join Us</h2>
+        <p className="mb-6 text-gray-300 text-lg">We're growing and always looking for great people to join our team.</p>
+        <button className="gradient-bg text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
+          Explore Careers
+        </button>
       </section>

       {/* Final CTA */}
-      <section className="text-center mt-12">
-        <p className="mb-4 text-lg">Your projects deserve more than spreadsheets and scattered chats.</p>
-        <p className="mb-6">With ProjectAccel, they get a system that drives clarity, ownership, and results.</p>
-        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">Try ProjectAccel Free</button>
+      <section className="text-center mt-12 animate-fade-in-up stagger-7">
+        <p className="mb-4 text-xl text-gray-300">Your projects deserve more than spreadsheets and scattered chats.</p>
+        <p className="mb-8 text-lg text-gray-400">With ProjectAccel, they get a system that drives clarity, ownership, and results.</p>
+        <button className="gradient-bg text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
+          Try ProjectAccel Free
+        </button>
       </section>
     </div>
   );
 }
   )
 }