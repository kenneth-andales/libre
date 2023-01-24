import React from 'react';
import Giver from '../../assets/about-us/givers.png';
import Giver1 from '../../assets/about-us/giver1.png';
import Giver2 from '../../assets/about-us/giver2.png';
import Giver3 from '../../assets/about-us/giver3.png';
import Giver4 from '../../assets/about-us/giver4.png';
import Giver5 from '../../assets/about-us/giver5.png';

export default function PageTwo() {
  return (
    <div className='about-us-container-2'>
      <section>
        <div className='giver-sec-1'>
          <img src={Giver} />
        </div>
        <h1>declutter and find a new home for your pre-loved stuff.</h1>
      </section>
      <section className='giver-sec-2'>
        <div className='giver-sec-2-1'>
          <img src={Giver1} className='giver-img-sec1-1'/>
          <img src={Giver2} className='giver-img-sec1-2' />
        </div>
        <div className='giver-sec-2-2'>
          <img src={Giver3} className='giver-img-sec2-1'/>
          <img src={Giver4} className='giver-img-sec2-2'/>
          <img src={Giver5} className='giver-img-sec2-3'/>
        </div>
      </section>
    </div>
  );
}
