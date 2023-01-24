import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

export default function Loader() {
  return (
    <div className='loader'>
      <BounceLoader color='#FA921F' loading={true} size={60} />
    </div>
  );
}