import React from 'react';
import LibreImg from '../../assets/features/Libre-is-free.svg';
import Group62 from '../../assets/features/Group-62.svg';
import GroupGroup319 from '../../assets/features/Group-319@2x.png';
import Group93 from '../../assets/features/Group-93.png';
import '../../styles/_features.scss';

export default function PageOne() {
  return (
    <div className='feature-page-1'>
      <section className="feature-1">
        <h1><b style={{ color: '#FA921F' }}>Libre</b> is free!</h1>
      </section>
      <section className="feature-2">
        Libre is an online community in the Philippines where members (called “Givers”) can give items they wish to share and where members (called <strong>“Takers”</strong>) may get items that could be of use to them.
      </section>
      <section className="feature-3">
        <h1>All for FREE</h1>
      </section>
      <section className='feature-4'>
        <img src={GroupGroup319} alt="Group Group 319" />
      </section>
      <section className="feature-5">
        <img src={Group93} alt="Group 93" />
      </section>
    </div>
  );
}