import React from 'react';
import Taker1 from '../../assets/about-us/taker1.png';
import Taker2 from '../../assets/about-us/taker2.png';
import Taker3 from '../../assets/about-us/taker3.png';
import Taker4 from '../../assets/about-us/taker4.png';
import Taker5 from '../../assets/about-us/taker5.png';
import Taker6 from '../../assets/about-us/taker6.png';
import Taker7 from '../../assets/about-us/taker7.png';
import Taker8 from '../../assets/about-us/taker8.png';
import '../../styles/_about-us.scss';

export default function PageThree() {
  return (
    <div className='about-us-container-3'>
      <section className='taker-sec-1'>
        <img src={Taker1} />
        <img src={Taker2} />
        <img src={Taker3} />
      </section>
      <section className='taker-sec-2'>
        <img src={Taker4} />
        <div className='taker-sec2-img2'>
          <img src={Taker5} />
          <img src={Taker6} />
        </div>
      </section>
      <section className='taker-sec-3'>
        <div>
          <img src={Taker7} className='taker7'/>
          <img src={Taker8} className='taker8'/>
        </div>
        <h1>get whatever you need without spending a cent.</h1>
      </section>
    </div>
  );
}
