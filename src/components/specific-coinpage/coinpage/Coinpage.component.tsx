import React from 'react';
import { useParams } from 'react-router-dom';
import CoinValues from './coin-details/CoinValues.component';

const Coinpage = () => {
  const { coinId } = useParams();

  return (
    <div className='coinpage-wrapper'>
      <CoinValues coinId={coinId} />
    </div>
  );
};

export default Coinpage;