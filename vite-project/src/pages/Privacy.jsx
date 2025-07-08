// File: src/pages/Privacy.jsx
import React from 'react';
export default function Privacy() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Your privacy is important to us. This policy explains how we handle your data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="text-sm text-gray-700">
          We collect personal information you provide, such as your name, email address, and any content submitted through forms or signups.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. How We Use It</h2>
        <p className="text-sm text-gray-700">
          We use your data to operate our service, respond to inquiries, provide support, and improve our platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
        <p className="text-sm text-gray-700">
          We do not sell your data. We may share it with service providers only for the purpose of delivering ProjectAccel services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Security</h2>
        <p className="text-sm text-gray-700">
          We implement industry-standard security practices to safeguard your information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
        <p className="text-sm text-gray-700">
          We use cookies to improve your experience, remember preferences, and analyze usage trends.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p className="text-sm text-gray-700">
          You can request access to your personal data, correct inaccuracies, or delete your account by contacting support.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
        <p className="text-sm text-gray-700">
          If you have questions about this policy, email us at <strong>privacy@projectaccel.com</strong>
        </p>
      </section>

      <p className="text-xs text-gray-500 text-center">Last updated: July 2025</p>
    </div>
  );
}