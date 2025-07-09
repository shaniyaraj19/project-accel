import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 ">Contact Us</h1>
          <p className="text-gray-400 max-w-md mx-auto">
             Whether you have questions, need support <br /> or want a demo — we're here to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left: Contact Form */}
          <div className="flex flex-col justify-between">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-1 text-left">Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-700 bg-transparent py-2 px-0 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-left">Email</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-700 bg-transparent py-2 px-0 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-left">Message</label>
                  <textarea
                    className="w-full border-b border-gray-700 bg-transparent py-2 px-0 focus:outline-none focus:border-white resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                 className="w-full bg-transparent text-white border border-white py-3 mt-4 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Right: Aligned Bottom Info */}
          <div className="flex flex-col justify-end space-y-10 text-gray-300">
            {/* Info aligned with Send button */}
            <div className="space-y-8">
              <div>
                <h2 className="text-base font-semibold text-white mb-2">Visit us</h2>
                <p>263 Homebush Road<br />Strathfield South 2136</p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-white mb-2">Talk to us</h2>
                <p>+91 98765 43210<br />support@projectaccel.com</p>
              </div>

              <div className="flex gap-6 text-white text-xl pt-4 justify-center md:justify-start">
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
