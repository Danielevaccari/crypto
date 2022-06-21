import React from 'react';
import CoinlistItem from './coinlistitem/CoinlistItem.component';
import { ICoin } from '../../../models/coin.interface';

interface Props {
  coinData: Array<ICoin>
}

const Coinlist: React.FC<Props> = ({ coinData }) => {

  return (
    <div>
      {coinData ? coinData.map((coin) => {
        return (
          <div className='coin-item-container' key={coin.id}>
            <CoinlistItem coin={coin} />
          </div>
        );
      }) :
        ''}
    </div>
  );
};

export default Coinlist;
