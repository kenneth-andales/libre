import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './tailwindstyles.css';
import './App.css';
import Footer from './components/Footer';
import NotFound from './views/NotFound';

const Features = lazy(() => import('./views/Features'));
const AboutUs = lazy(() => import('./views/AboutUs'));
const Help = lazy(() => import('./views/Help'));

function App() {

  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter basename='/libre'>
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound/>} />
          <Route path="/" element={<Features />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
