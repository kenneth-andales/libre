import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../assets/S-Full-White-Horizontal@2x.png';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Squash as Hamburger } from 'hamburger-react';
import '../styles/_navbar.scss';

export default function Navbar() {
  const [showToggle, setShowToggle] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  useEffect(() => {
    if (!isMobile) {
      setShowToggle(false);
    }
  }, [isMobile]);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='navbar'>
      <div className='left-side'>
        <img src={NavLogo} alt='S' />
      </div>
      <div className='right-side'>
        <div className='links' id={showToggle
          ? 'hidden'
          : ''}>
          <Link onClick={onClick} style={{ paddingRight: '20px' }} to='/features'>Features</Link>
          <Link onClick={onClick} style={{ paddingRight: '20px' }} to='/about-us'>About Us</Link>
          <Link onClick={onClick} to='/help'>Help</Link>
        </div>
        { isMobile && <Hamburger size={25} onToggle={() => setShowToggle(!showToggle)} color='white'>open</Hamburger>}
      </div>
    </div>
  );
}