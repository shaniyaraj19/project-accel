@@ .. @@
 import React from 'react';
 export default function Contact() {
   return (
-    <div className="space-y-16 max-w-3xl mx-auto">
+    <div className="space-y-16 max-w-4xl mx-auto">
       {/* Header */}
-      <section className="text-center">
-        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk</h1>
-        <p className="text-lg text-gray-600">
+      <section className="text-center animate-fade-in-up">
+        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Let's Talk</h1>
+        <p className="text-xl text-gray-300">
           Whether you have questions, need support, or want a demo — we're here to help.
         </p>
       </section>

       {/* Contact Info */}
-      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
-        <div className="bg-white p-6 rounded shadow">
-          <h2 className="text-lg font-semibold mb-2">📩 Email</h2>
-          <p className="text-sm">support@projectaccel.com</p>
+      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in-up stagger-2">
+        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-1">
+          <div className="text-4xl mb-4 animate-float">📩</div>
+          <h2 className="text-xl font-semibold mb-3 gradient-text">Email</h2>
+          <p className="text-gray-300">support@projectaccel.com</p>
         </div>
-        <div className="bg-white p-6 rounded shadow">
-          <h2 className="text-lg font-semibold mb-2">💬 Chat with Us</h2>
-          <p className="text-sm">Live chat available Mon–Fri, 9am–6pm IST</p>
+        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-2">
+          <div className="text-4xl mb-4 animate-float">💬</div>
+          <h2 className="text-xl font-semibold mb-3 gradient-text">Chat with Us</h2>
+          <p className="text-gray-300">Live chat available Mon–Fri, 9am–6pm IST</p>
         </div>
-        <div className="bg-white p-6 rounded shadow">
-          <h2 className="text-lg font-semibold mb-2">📞 Phone</h2>
-          <p className="text-sm">+91 98765 43210</p>
+        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-3">
+          <div className="text-4xl mb-4 animate-float">📞</div>
+          <h2 className="text-xl font-semibold mb-3 gradient-text">Phone</h2>
+          <p className="text-gray-300">+91 98765 43210</p>
         </div>
-        <div className="bg-white p-6 rounded shadow">
-          <h2 className="text-lg font-semibold mb-2">📍 Address</h2>
-          <p className="text-sm">#101, Startup Street, Bengaluru, India</p>
+        <div className="glass p-8 rounded-xl hover-lift animate-fade-in-up stagger-4">
+          <div className="text-4xl mb-4 animate-float">📍</div>
+          <h2 className="text-xl font-semibold mb-3 gradient-text">Address</h2>
+          <p className="text-gray-300">#101, Startup Street, Bengaluru, India</p>
         </div>
       </section>

       {/* Contact Form */}
-      <section className="bg-gray-50 p-6 rounded shadow">
-        <h2 className="text-xl font-semibold mb-4 text-center">Send Us a Message</h2>
+      <section className="glass p-8 rounded-xl animate-fade-in-up stagger-3">
+        <h2 className="text-2xl font-semibold mb-6 text-center gradient-text">Send Us a Message</h2>
         <form className="space-y-4">
           <div>
-            <label className="block text-sm font-medium mb-1">Name</label>
-            <input type="text" className="w-full border px-3 py-2 rounded" required />
+            <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
+            <input type="text" className="w-full bg-gray-800 border border-gray-600 px-4 py-3 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors" required />
           </div>
           <div>
-            <label className="block text-sm font-medium mb-1">Email</label>
-            <input type="email" className="w-full border px-3 py-2 rounded" required />
+            <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
+            <input type="email" className="w-full bg-gray-800 border border-gray-600 px-4 py-3 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors" required />
           </div>
           <div>
-            <label className="block text-sm font-medium mb-1">Message</label>
-            <textarea className="w-full border px-3 py-2 rounded min-h-[100px]" required></textarea>
+            <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
+            <textarea className="w-full bg-gray-800 border border-gray-600 px-4 py-3 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors min-h-[120px]" required></textarea>
           </div>
           <div className="text-center">
-            <button className="bg-blue-600 text-white px-6 py-2 rounded shadow">Submit</button>
+            <button className="gradient-bg text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
+              Submit
+            </button>
           </div>
         </form>
       </section>
     </div>
   );
 }