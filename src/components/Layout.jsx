@@ .. @@
 import { Outlet } from 'react-router-dom';
 import React from 'react';
+import { AnimatePresence } from 'framer-motion';
+import { useLocation } from 'react-router-dom';
 import Navbar from './Navbar';
 import Footer from './Footer';
 import ScrollToTop from './ScrollToTop';
+import PageTransition from './PageTransition';

 function Layout() {
+  const location = useLocation();
+
   return (
     <div className="flex flex-col min-h-screen bg-black text-white">
       <Navbar />
-      <main className="flex-grow container mx-auto px-4 py-6 animate-fade-in-up">
-        <Outlet />
+      <main className="flex-grow">
+        <AnimatePresence mode="wait">
+          <PageTransition key={location.pathname}>
+            <Outlet />
+          </PageTransition>
+        </AnimatePresence>
       </main>
       <Footer />
       <ScrollToTop />
     </div>
   );
 }

 export default Layout;