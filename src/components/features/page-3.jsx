import React from 'react';
import Group300 from '../../assets/features/Group-300.png';
import '../../styles/_features.scss';

export default function PageThree() {
  return (
    <div className='feature-page-3'>
      <section className='feature-page3-img'>
        <img src={Group300} />
      </section>
      <section className='feature-page3-text'>
        <div>
          <h1><b style={{ color: '#FA921F' }}>LIBRE</b> is a virtual warehouse of blessings!</h1>
        </div>
      </section>
    </div>
  );
}