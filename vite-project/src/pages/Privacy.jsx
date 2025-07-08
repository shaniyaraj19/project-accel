import React from 'react';

export default function Privacy() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto px-4 py-16 bg-black text-white animate-fade-in-up">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
        <p className="text-lg text-gray-400">
          Your privacy is important to us. This policy explains how we handle your data.
        </p>
      </section>

      {[
        {
          heading: "1. Information We Collect",
          content:
            "We collect personal information you provide, such as your name, email address, and any content submitted through forms or signups.",
        },
        {
          heading: "2. How We Use It",
          content:
            "We use your data to operate our service, respond to inquiries, provide support, and improve our platform.",
        },
        {
          heading: "3. Data Sharing",
          content:
            "We do not sell your data. We may share it with service providers only for the purpose of delivering ProjectAccel services.",
        },
        {
          heading: "4. Security",
          content:
            "We implement industry-standard security practices to safeguard your information.",
        },
        {
          heading: "5. Cookies",
          content:
            "We use cookies to improve your experience, remember preferences, and analyze usage trends.",
        },
        {
          heading: "6. Your Rights",
          content:
            "You can request access to your personal data, correct inaccuracies, or delete your account by contacting support.",
        },
        {
          heading: "7. Contact",
          content:
            'If you have questions about this policy, email us at ',
        },
      ].map((section, idx) => (
        <section key={idx}>
          <h2 className="text-xl font-semibold mb-2 gradient-text">{section.heading}</h2>
          <p className="text-sm text-gray-400">
            {section.heading.startsWith('7.') ? (
              <>
                {section.content}
                <strong>privacy@projectaccel.com</strong>
              </>
            ) : (
              section.content
            )}
          </p>
        </section>
      ))}

      <p className="text-xs text-gray-500 text-center">Last updated: July 2025</p>
    </div>
  );
}
