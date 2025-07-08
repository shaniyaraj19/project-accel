// File: src/pages/Security.jsx
import React from 'react';
export default function Security() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto" id="top">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Security at ProjectAccel</h1>
        <p className="text-lg text-gray-600">
          Keeping your data secure is our top priority.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Data Encryption</h2>
        <p className="text-sm text-gray-700">
          All data is encrypted in transit using TLS and at rest using AES-256 standards.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Infrastructure</h2>
        <p className="text-sm text-gray-700">
          Our servers are hosted in top-tier data centers with 24/7 monitoring and physical security.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Access Controls</h2>
        <p className="text-sm text-gray-700">
          Role-based access control ensures that only authorized users can access specific resources.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Backups & Redundancy</h2>
        <p className="text-sm text-gray-700">
          We run automated daily backups and maintain redundant systems to prevent data loss.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Responsible Disclosure</h2>
        <p className="text-sm text-gray-700">
          If you discover a security vulnerability, report it to <strong>security@projectaccel.com</strong>
        </p>
      </section>

      <p className="text-xs text-gray-500 text-center">Last updated: July 2025</p>
    </div>
  );
}