// File: src/pages/About.jsx
import React from 'react';
export default function About() {
  return (
    <div className="space-y-16">
      {/* Headline */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Built to Make Projects Simple, Transparent, and Successful.</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We believe managing projects should be easier — not overwhelming.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p>
          At ProjectAccel, our mission is to help teams plan smarter, collaborate better, and deliver projects on time, every time.
        </p>
      </section>

      {/* Origin Story */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">The Story Behind ProjectAccel</h2>
        <p className="mb-4">
          We started ProjectAccel because we faced the same challenges you do — missed deadlines, unclear responsibilities, surprise costs.
        </p>
        <p>
          As a team of tech builders, project managers, and process geeks, we wanted a tool that was powerful yet easy to use, flexible but structured. When we couldn’t find it, we built it.
        </p>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-6">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-lg mb-1">💡 Clarity</h3>
            <p className="text-sm">We simplify work so teams always know what’s next.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-lg mb-1">🤝 Accountability</h3>
            <p className="text-sm">We make ownership visible so nothing falls through the cracks.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-lg mb-1">🚀 Results</h3>
            <p className="text-sm">We help businesses hit deadlines and control budgets.</p>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Today</h2>
        <p>
          Today, hundreds of teams — from startups to large agencies to construction firms — trust ProjectAccel to manage their day-to-day work.
          Whether launching a new product, building a home, or running a marketing campaign, they rely on us to keep projects moving.
        </p>
      </section>

      {/* Careers CTA */}
      <section className="text-center mt-12">
        <h2 className="text-xl font-semibold mb-2">Join Us</h2>
        <p className="mb-4">We’re growing and always looking for great people to join our team.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">Explore Careers</button>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-12">
        <p className="mb-4 text-lg">Your projects deserve more than spreadsheets and scattered chats.</p>
        <p className="mb-6">With ProjectAccel, they get a system that drives clarity, ownership, and results.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">Try ProjectAccel Free</button>
      </section>
    </div>
  );
}