import React from 'react';

export default function Security() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto px-4 py-16 bg-black text-white animate-fade-in-up" id="top">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Security at ProjectAccel</h1>
        <p className="text-lg text-gray-400">
          Keeping your data secure is our top priority.
        </p>
      </section>

      {[
        {
          title: "1. Data Encryption",
          content: "All data is encrypted in transit using TLS and at rest using AES-256 standards.",
        },
        {
          title: "2. Infrastructure",
          content: "Our servers are hosted in top-tier data centers with 24/7 monitoring and physical security.",
        },
        {
          title: "3. Access Controls",
          content: "Role-based access control ensures that only authorized users can access specific resources.",
        },
        {
          title: "4. Backups & Redundancy",
          content: "We run automated daily backups and maintain redundant systems to prevent data loss.",
        },
        {
          title: "5. Responsible Disclosure",
          content: "If you discover a security vulnerability, report it to ",
          isEmail: true,
        },
      ].map((item, idx) => (
        <section key={idx}>
          <h2 className="text-xl font-semibold mb-2 gradient-text">{item.title}</h2>
          <p className="text-sm text-gray-400">
            {item.isEmail ? (
              <>
                {item.content}
                <strong>security@projectaccel.com</strong>
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
