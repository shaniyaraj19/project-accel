@@ .. @@
 import { Outlet } from 'react-router-dom';
 import React from 'react';
 import Navbar from './Navbar';
 import Footer from './Footer';

 function Layout() {
   return (
-    <div className="flex flex-col min-h-screen">
+    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
       <Navbar />
-      <main className="flex-grow container mx-auto px-4 py-6">
+      <main className="flex-grow container mx-auto px-4 py-6 animate-fade-in-up">
         <Outlet />
       </main>
       <Footer />
     </div>
   );
 }

 export default Layout;