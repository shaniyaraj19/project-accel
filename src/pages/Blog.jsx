@@ .. @@
 import React from 'react';
+import { motion } from 'framer-motion';
+import ScrollReveal from '../components/ScrollReveal';
+import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

 export default function Blog() {
@@ .. @@
   ];

   return (
-    <div className="bg-black text-white">
+    <div className="bg-black text-white container mx-auto px-4">
       {/* Hero Section - Full Screen */}
-     <section className="min-h-screen flex flex-col items-center justify-start pt-20 px-4 text-center">
-
-        <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
-          Project Management Insights
-        </h1>
-        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
-          Stay ahead with expert advice, industry insights, and practical guides from project management professionals.
-        </p>
+      <section className="min-h-screen flex flex-col items-center justify-center text-center">
+        <ScrollReveal direction="up" delay={0.2} duration={1}>
+          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
+            Project Management Insights
+          </h1>
+        </ScrollReveal>
+        
+        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
+          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
+            Stay ahead with expert advice, industry insights, and practical guides from project management professionals.
+          </p>
+        </ScrollReveal>
       </section>

       {/* Blog List Section */}
-      <div className="px-4 py-12 flex justify-center">
-        <div className="w-full max-w-4xl space-y-10">
+      <section className="py-20">
+        <StaggerContainer className="w-full max-w-4xl mx-auto space-y-10">
           {blogPosts.map((post, index) => (
-            <div
+            <StaggerItem
               key={index}
-              className="flex flex-col md:flex-row bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-md overflow-hidden"
+              direction="up"
+              className="flex flex-col md:flex-row bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-md overflow-hidden hover-glow group"
             >
               {/* Image */}
               <div className="md:w-1/3 h-52 md:h-auto">
-                <img
+                <motion.img
                   src={post.image}
                   alt={post.title}
-                  className="w-full h-full object-cover"
+                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                 />
               </div>

               {/* Content */}
               <div className="md:w-2/3 p-5 flex flex-col justify-center space-y-2">
-                <span className="uppercase text-xs text-purple-400 font-semibold tracking-wide">{post.category}</span>
-                <h2 className="text-xl font-bold text-white">{post.title}</h2>
+                <motion.span 
+                  className="uppercase text-xs text-purple-400 font-semibold tracking-wide"
+                  whileHover={{ scale: 1.05 }}
+                >
+                  {post.category}
+                </motion.span>
+                <motion.h2 
+                  className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors"
+                  whileHover={{ x: 5 }}
+                >
+                  {post.title}
+                </motion.h2>
                 <p className="text-sm text-slate-300">{post.excerpt}</p>
                 <div className="text-xs text-slate-400">
                   By {post.author} • {post.date} • {post.readTime}
                 </div>
               </div>
-            </div>
+            </StaggerItem>
           ))}
-        </div>
-      </div>
+        </StaggerContainer>
+      </section>
     </div>
   );
 }