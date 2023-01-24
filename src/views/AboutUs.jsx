import React from 'react';
import PageOne from '../components/about-us/page-1';
import PageTwo from '../components/about-us/page-2';
import PageThree from '../components/about-us/page-3';

export default function AboutUs() {
  return (
    <div className='about-us-container'>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
    </div>
  );
}