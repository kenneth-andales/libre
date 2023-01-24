import React from 'react';
import Feature1 from '../../assets/features/feature1.png';
import Feature2 from '../../assets/features/feature2.png';
import Feature3 from '../../assets/features/feature3.png';
import '../../styles/_features.scss';

export default function PageTwo() {
  return (
    <div className='feature-page-2'>
      <div className='giver-div'>
        <section className="giver-1-text f-text-1">
          <h1>Giver</h1>
          <h3>Want to give away preloved items? <br/> Share here</h3>
        </section>
        <section className="giver-1-img">
          <img src={Feature1} />
        </section>
      </div>
      <div className='taker-div'>
        <section className="taker-1-text f-text-1">
          <h1>Taker</h1>
          <h3>Want to find a preloved item? Search here</h3>
        </section>
        <section className="taker-1-img">
          <div>
            <img src={Feature2} className='feature2'/>
            <img src={Feature3} className='feature3'/>
          </div>
        </section>
      </div>
    </div>
  );
}