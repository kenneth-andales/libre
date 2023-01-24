import React from 'react';
import EasyNav from '../../assets/features/EasyNav.svg';
import UpdatedItems from '../../assets/features/UpdatedItems.svg';
import FreeNoPrice from '../../assets/features/FreeNoPrice.svg';
import NoOutsideTrans from '../../assets/features/NoOutsideTrans.svg';
import ReceiverShouldersShipping from '../../assets/features/ReceiverShouldersShipping.svg';
import ReliableComm from '../../assets/features/ReliableComm.svg';
import DetailedItem from '../../assets/features/DetailedItem.svg';
import Transparent from '../../assets/features/Transparent.svg';
import '../../styles/_features.scss';

export default function PageFour() {
  return (
    <div className='feature-page-4'>
      <section className='feature-page4-img'>
        <section>
          <img src={EasyNav} />
          <h1>Easy Navigation</h1>
        </section>
        <section>
          <img src={UpdatedItems} />
          <h1>Updated Items</h1>
        </section>
        <section>
          <img src={FreeNoPrice} />
          <h1>Free No Price</h1>
        </section>
        <section>
          <img src={NoOutsideTrans} />
          <h1>No Outside Transaction</h1>
        </section>
        <section>
          <img src={ReceiverShouldersShipping} />
          <h1>Receiver Shoulders the <br/> Shipping Fee</h1>
        </section>
        <section>
          <img src={ReliableComm} />
          <h1>Reliable Communication</h1>
        </section>
        <section>
          <img src={DetailedItem} />
          <h1>Detailed Item Info</h1>
        </section>
        <section>
          <img src={Transparent} />
          <h1>Transparency</h1>
        </section>
      </section>
    </div>
  );
}