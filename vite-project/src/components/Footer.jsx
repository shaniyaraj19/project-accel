import React from 'react';
function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="container mx-auto px-4 py-6 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} ProjectAccel. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/security">Security</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;