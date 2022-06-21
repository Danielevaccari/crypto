import React, { useEffect } from 'react';
import { ICryptoCoin } from '../../../../interfaces/interfaces';
import { CoinAPI } from '../../../../services/coingecko/coingeckoApi.service';

interface Props {
  coinId: string | undefined
}

const CoinDetails: React.FC<Props> = ({ coinId }) => {
  const [cryptoCoin, setCryptoCoin] = React.useState<ICryptoCoin>();
  useEffect(() => {
    if (coinId) {
      CoinAPI.getSpecificCoin(coinId).then((coin) => {
        setCryptoCoin(coin);
      });
    }

  }, []);

  return (
    <div className='coinpage-coin-values'>
      <div className='coinpage-coin-header'>
        {cryptoCoin?.name}
        {' '}
        {cryptoCoin?.market_data.current_price.eur}
      </div>
      <div className='coinpage-coin-info'>
        {cryptoCoin?.description['en']}
      </div>
    </div>
  );
};

export default CoinDetails;
