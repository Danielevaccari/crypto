import React, { useEffect } from 'react';
import { ICryptoCoin } from '../../../../interfaces/interfaces';
import { CoinAPI } from '../../../../services/coingecko/coingeckoApi.service';

const DOMPurify = require('dompurify')(window);

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
    <>
      <div className='coinpage-coin-values'>
        <div className='coinpage-coin-header'>
          <div className='coinpage-coin-header-left'>
            <img src={cryptoCoin?.image.large} alt='coin-img' style={{ height: '50px', width: '50p', boxShadow: '0px 0px 5px #c8d6e5', borderRadius: '50%' }}></img>
          </div>
          <div className='coinpage-coin-header-middle'>
            {cryptoCoin?.name}
          </div>
          <div className='coinpage-coin-header-right'>
            {cryptoCoin?.market_data.current_price.eur}
          </div>
        </div>
        <div className='coinpage-coin-info' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cryptoCoin?.description['en']) }} />
      </div>
    </>
  );
};

export default CoinDetails;
