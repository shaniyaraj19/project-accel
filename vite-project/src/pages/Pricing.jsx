// // File: src/pages/Pricing.jsx
// import { useState } from 'react';

// export default function Pricing() {
//   const [isYearly, setIsYearly] = useState(false);

//   const toggleBilling = () => setIsYearly(prev => !prev);

//   return (
//     <div className="space-y-16">
//       {/* Hero Section */}
//       <section className="text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Plans for Every Team</h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Choose a plan that fits your size, goals, and growth — start with confidence.
//         </p>
//         <div className="flex justify-center items-center gap-4 mt-6">
//           <span className={!isYearly ? 'font-bold text-blue-600' : ''}>Monthly</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" checked={isYearly} onChange={toggleBilling} />
//             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//           </label>
//           <span className={isYearly ? 'font-bold text-blue-600' : ''}>Yearly</span>
//         </div>
//       </section>

//       {/* Pricing Table */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//         <div className="bg-white p-6 rounded shadow border">
//           <h2 className="text-xl font-semibold mb-2">Starter</h2>
//           <p className="text-gray-500 mb-4">Ideal for small teams</p>
//           <div className="text-3xl font-bold mb-4">
//             {isYearly ? '₹9990' : '₹999'}<span className="text-base font-normal">{isYearly ? '/yr' : '/mo'}</span>
//           </div>
//           <ul className="text-sm space-y-2">
//             <li>✅ Up to 5 projects</li>
//             <li>✅ Core PM features</li>
//             <li>✅ Kanban boards</li>
//             <li>✅ Reports</li>
//           </ul>
//         </div>

//         <div className="relative">
//           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow">Best Value</div>
//           <div className="bg-blue-50 p-6 rounded shadow-lg border-2 border-blue-600">
//           <h2 className="text-xl font-semibold mb-2 text-blue-700">Growth</h2>
//           <p className="text-gray-500 mb-4">Best for growing businesses</p>
//           <div className="text-3xl font-bold mb-4">
//             {isYearly ? '₹24990' : '₹2499'}<span className="text-base font-normal">{isYearly ? '/yr' : '/mo'}</span>
//           </div>
//        </div>
//     </div>

//           <ul className="text-sm space-y-2">
//             <li>✅ Unlimited projects</li>
//             <li>✅ Advanced dashboards</li>
//             <li>✅ Time & budget tracking</li>
//             <li>✅ File sharing</li>
//           </ul>
//         </div>

//         <div className="bg-white p-6 rounded shadow border">
//           <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
//           <p className="text-gray-500 mb-4">Custom workflows & support</p>
//           <div className="text-3xl font-bold mb-4">Contact Us</div>
//           <ul className="text-sm space-y-2">
//             <li>✅ SLA guarantees</li>
//             <li>✅ Dedicated success manager</li>
//             <li>✅ Custom integrations</li>
//             <li>✅ Priority support</li>
//           </ul>
//         </div>
//       </section>

//       {/* CTA Buttons */}
//       <section className="text-center mt-12 space-x-4">
//         <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">Start Free Trial</button>
//         <button className="bg-gray-100 text-blue-600 px-6 py-3 rounded border">Talk to Sales</button>
//       </section>
//     </div>
//   );
// }




import React, { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => setIsYearly((prev) => !prev);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Plans for Every Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your size, goals, and growth — start with confidence.
        </p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <span className={!isYearly ? 'font-bold text-blue-600' : ''}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={toggleBilling}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span className={isYearly ? 'font-bold text-blue-600' : ''}>Yearly</span>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Starter */}
        <div className="bg-white p-6 rounded shadow border">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-500 mb-4">Ideal for small teams</p>
          <div className="text-3xl font-bold mb-4">
            {isYearly ? '₹9990' : '₹999'}
            <span className="text-base font-normal">{isYearly ? '/yr' : '/mo'}</span>
          </div>
          <ul className="text-sm space-y-2">
            <li>✅ Up to 5 projects</li>
            <li>✅ Core PM features</li>
            <li>✅ Kanban boards</li>
            <li>✅ Reports</li>
          </ul>
        </div>

        {/* Growth */}
        <div className="relative bg-blue-50 p-6 rounded shadow-lg border-2 border-blue-600">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow">
            Best Value
          </div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Growth</h2>
          <p className="text-gray-500 mb-4">Best for growing businesses</p>
          <div className="text-3xl font-bold mb-4">
            {isYearly ? '₹24990' : '₹2499'}
            <span className="text-base font-normal">{isYearly ? '/yr' : '/mo'}</span>
          </div>
          <ul className="text-sm space-y-2">
            <li>✅ Unlimited projects</li>
            <li>✅ Advanced dashboards</li>
            <li>✅ Time & budget tracking</li>
            <li>✅ File sharing</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-6 rounded shadow border">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-500 mb-4">Custom workflows & support</p>
          <div className="text-3xl font-bold mb-4">Contact Us</div>
          <ul className="text-sm space-y-2">
            <li>✅ SLA guarantees</li>
            <li>✅ Dedicated success manager</li>
            <li>✅ Custom integrations</li>
            <li>✅ Priority support</li>
          </ul>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="text-center mt-12 space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">Start Free Trial</button>
        <button className="bg-gray-100 text-blue-600 px-6 py-3 rounded border">Talk to Sales</button>
      </section>
    </div>
  );
}
