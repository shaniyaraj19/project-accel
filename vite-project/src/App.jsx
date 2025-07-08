// import { Routes, Route } from 'react-router-dom';
// import React from 'react';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import Features from './pages/Features';
// import UseCases from './pages/UseCases';
// import CaseStudies from './pages/CaseStudies';
// import Pricing from './pages/Pricing';
// import Blog from './pages/Blog';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Privacy from './pages/Privacy';
// import Terms from './pages/Terms';
// import Security from './pages/Security';
// // import NotFound from './pages/NotFound';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="features" element={<Features />} />
//         <Route path="use-cases" element={<UseCases />} />
//         <Route path="case-studies" element={<CaseStudies />} />
//         <Route path="pricing" element={<Pricing />} />
//         <Route path="blog" element={<Blog />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="privacy" element={<Privacy />} />
//         <Route path="terms" element={<Terms />} />
//         <Route path="security" element={<Security />} />
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Route>
//     </Routes>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import UseCases from './pages/UseCases';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="security" element={<Security />} /> 
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

