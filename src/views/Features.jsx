import React from 'react';
import PageOne from '../components/features/page-1';
import PageTwo from '../components/features/page-2';
import PageThree from '../components/features/page-3';
import PageFour from '../components/features/page-4';
import '../styles/_features.scss';

export default function Features() {
  return (
    <div className='feature-container'>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
    </div>
  );
}