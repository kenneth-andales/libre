import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import FooterLogo from '../assets/S-Full-White-Horizontal@2x.png';
import Group93 from '../assets/features/Group-93.png';
import '../styles/_footer.scss';

export default function Footer() {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='footer'>
      <hr/>
      <section className='footer-sec'>
        <div className='footer-sec1'>
          <h1>Membership in <b style={{ color: '#FA921F' }}>Libre </b>is Free</h1>
        </div>
        <div className='footer-img'>
          <img src={Group93} alt="Group 93" />
        </div>
      </section>
      <footer>
        <div className='footer-left'>
          <img src={FooterLogo} alt='S' />
        </div>
        <div className='footer-right'>
          <Link onClick={onClick} to='/features'>Features</Link>
          <Link onClick={onClick} to='/about-us'>About Us</Link>
          <Link onClick={onClick} to='/help'>Help</Link>
          <Link onClick={onClick} to='/help'>Terms and Conditions</Link>
          <Link onClick={onClick} to='/help'>Privacy & Policy</Link>
        </div>
      </footer>
    </div>
  );
}
