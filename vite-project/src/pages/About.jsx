import React from 'react';

export default function About() {
  return (
    <div className="space-y-16">
      {/* Headline */}
      <section className="text-center animate-fade-in-up pt-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
          Built to Make Projects Simple, 
          <br/>
          Transparent, and Successful.
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We believe managing projects should be easier — not overwhelming.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-2">
        <div className="bg-white/5 p-8 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg">
            At ProjectAccel, our mission is to help teams plan smarter, collaborate better, and deliver projects on time, every time.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-3">
        <div className="bg-white/5 p-8 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            The Story Behind ProjectAccel
          </h2>
          <p className="mb-4 text-gray-300 text-lg">
            We started ProjectAccel because we faced the same challenges you do — missed deadlines, unclear responsibilities, surprise costs.
          </p>
          <p className="text-gray-300 text-lg">
            As a team of tech builders, project managers, and process geeks, we wanted a tool that was powerful yet easy to use, flexible but structured. When we couldn’t find it, we built it.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto text-center animate-fade-in-up stagger-4">
        <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-1">
            <div className="text-4xl mb-4 animate-float">💡</div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Clarity
            </h3>
            <p className="text-gray-300">We simplify work so teams always know what's next.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-2">
            <div className="text-4xl mb-4 animate-float">🤝</div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Accountability
            </h3>
            <p className="text-gray-300">We make ownership visible so nothing falls through the cracks.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-3">
            <div className="text-4xl mb-4 animate-float">🚀</div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Results
            </h3>
            <p className="text-gray-300">We help businesses hit deadlines and control budgets.</p>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-5">
        <div className="bg-white/5 p-8 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Today
          </h2>
          <p className="text-gray-300 text-lg">
            Today, hundreds of teams — from startups to large agencies to construction firms — trust ProjectAccel to manage their day-to-day work.
            Whether launching a new product, building a home, or running a marketing campaign, they rely on us to keep projects moving.
          </p>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="text-center mt-12 animate-fade-in-up stagger-6">
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Join Us
        </h2>
        <p className="mb-6 text-gray-300 text-lg">We're growing and always looking for great people to join our team.</p>
        <button className="bg-gradient-to-r from-white to-gray-400 text-black px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
          Explore Careers
        </button>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-12 animate-fade-in-up stagger-7">
        <p className="mb-4 text-xl text-gray-300">Your projects deserve more than spreadsheets and scattered chats.</p>
        <p className="mb-8 text-lg text-gray-400">With ProjectAccel, they get a system that drives clarity, ownership, and results.</p>
        <button className="bg-gradient-to-r from-white to-gray-400 text-black px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
          Try ProjectAccel Free
        </button>
      </section>
    </div>
  );
}
