import React from 'react';
import { Link } from 'react-router-dom';
import { ICoin } from '../../../../models/coin.interface';
import { numberFormatter } from '../../../../utils/numberFormat.util';

interface Props {
  coin: ICoin
}

const CoinlistItem: React.FC<Props> = ({ coin }) => {

  return (
    <Link className='coin-item-link' to={'/coins/' + coin.id} >
      <div className='coin-item-s1'>
        <img className='coin-item-img' src={coin.image} alt='coin-img' />
      </div>

      <div className='coin-item-s2'>
        {coin.name}
      </div>
      <div className='coin-item-s3'>
        {Intl.NumberFormat('US-en', { style: 'currency', currency: 'eur' }).format(coin['current_price'])}

      </div>
      <div className='coin-item-s4' style={{ color: coin['market_cap_change_percentage_24h'] < 0 ? 'red' : 'green' }}>
        {(coin['market_cap_change_percentage_24h']).toFixed(2) + ' '}%
      </div>
      <div className='coin-item-s5'>
        {numberFormatter((coin['market_cap']), 1)}
      </div>
    </Link >
  );
};

export default CoinlistItem;