@@ .. @@
 import React from 'react';
 function Footer() {
   return (
   )
 }
-    <footer className="bg-gray-100 border-t mt-10">
-      <div className="container mx-auto px-4 py-6 text-sm text-center">
-        <p>&copy; {new Date().getFullYear()} ProjectAccel. All rights reserved.</p>
-        <div className="flex justify-center gap-4 mt-2">
-          <a href="/privacy">Privacy Policy</a>
-          <a href="/terms">Terms of Service</a>
-          <a href="/security">Security</a>
+    <footer className="bg-gray-800 border-t border-gray-700 mt-10">
+      <div className="container mx-auto px-4 py-8 text-sm text-center">
+        <p className="text-gray-300 mb-4">&copy; {new Date().getFullYear()} ProjectAccel. All rights reserved.</p>
+        <div className="flex justify-center gap-6 mt-2">
+          <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform">Privacy Policy</a>
+          <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform">Terms of Service</a>
+          <a href="/security" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform">Security</a>
         </div>
       </div>
     </footer>
   );
 }

 export default Footer;