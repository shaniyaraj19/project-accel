// File: src/pages/Terms.jsx
import React from 'react';
export default function Terms() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600">
          Please read these terms carefully before using ProjectAccel.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-sm text-gray-700">
          By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Account Responsibilities</h2>
        <p className="text-sm text-gray-700">
          You are responsible for maintaining the confidentiality of your account and for all activities under it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Use Restrictions</h2>
        <p className="text-sm text-gray-700">
          You may not use our platform for any unlawful or unauthorized purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Service Availability</h2>
        <p className="text-sm text-gray-700">
          We strive to maintain uptime, but availability may be affected by maintenance or technical issues.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
        <p className="text-sm text-gray-700">
          We reserve the right to suspend or terminate accounts that violate these terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Modifications</h2>
        <p className="text-sm text-gray-700">
          We may update these terms from time to time. Continued use constitutes acceptance of those changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
        <p className="text-sm text-gray-700">
          For questions regarding these terms, contact <strong>legal@projectaccel.com</strong>
        </p>
      </section>

      <p className="text-xs text-gray-500 text-center">Last updated: July 2025</p>
    </div>
  );
}