import React from 'react';

export default function Terms() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto px-4 py-16 bg-black text-white animate-fade-in-up">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Terms of Service</h1>
        <p className="text-lg text-gray-400">
          Please read these terms carefully before using ProjectAccel.
        </p>
      </section>

      {[
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.",
        },
        {
          title: "2. Account Responsibilities",
          content:
            "You are responsible for maintaining the confidentiality of your account and for all activities under it.",
        },
        {
          title: "3. Use Restrictions",
          content:
            "You may not use our platform for any unlawful or unauthorized purposes.",
        },
        {
          title: "4. Service Availability",
          content:
            "We strive to maintain uptime, but availability may be affected by maintenance or technical issues.",
        },
        {
          title: "5. Termination",
          content:
            "We reserve the right to suspend or terminate accounts that violate these terms.",
        },
        {
          title: "6. Modifications",
          content:
            "We may update these terms from time to time. Continued use constitutes acceptance of those changes.",
        },
        {
          title: "7. Contact",
          content: "For questions regarding these terms, contact ",
          isEmail: true,
        },
      ].map((item, idx) => (
        <section key={idx}>
          <h2 className="text-xl font-semibold mb-2 gradient-text">{item.title}</h2>
          <p className="text-sm text-gray-400">
            {item.isEmail ? (
              <>
                {item.content}
                <strong>legal@projectaccel.com</strong>
              </>
            ) : (
              item.content
            )}
          </p>
        </section>
      ))}

      <p className="text-xs text-gray-500 text-center">Last updated: July 2025</p>
    </div>
  );
}
