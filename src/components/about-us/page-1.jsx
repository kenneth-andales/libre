import React from 'react';
import '../../styles/_about-us.scss';
import mask1 from '../../assets/about-us/mask1.png';
import mask2 from '../../assets/about-us/mask2.png';
import mask3 from '../../assets/about-us/mask3.png';
import mask4 from '../../assets/about-us/mask4.png';
import mask5 from '../../assets/about-us/mask5.png';

export default function PageOne() {

  return (
    <div className='about-us-container-1'>
      <section className='about-text-1'>
        <h1><span style={{ color: '#FA921F' }}>Libre</span> connects the Giver and the Taker!</h1>
      </section>
      <hr/>
      <p>People behind the Libre App</p>
      <section className='aboutus-people'>
        <section>
          <img src={mask1} alt='Accounts' className='img-accounts'/>
          <h1>Gwyneth</h1>
          <h3>Accounts</h3>
        </section>
        <section>
          <img src={mask2} alt='Developer' className='img-developer'/>
          <h1>Miguel</h1>
          <h3>Developer</h3>
        </section>
        <section>
          <img src={mask3} alt='Co-Founder' className='img-co-founder'/>
          <h1>Angela</h1>
          <h3>Co-Founder</h3>
        </section>
        <section className='founder-sec'>
          <img src={mask4} alt='Founder' className='img-founder'/>
          <h1>Atty. Ray</h1>
          <h3>Founder</h3>
        </section>
        <section className='writer-sec'>
          <img src={mask5} alt='Writer' className='img-writer'/>
          <h1>Patricia</h1>
          <h3>Writer</h3>
        </section>
      </section>
    </div>
  );
}
