import React, { useEffect } from 'react';
import { CoinAPI } from '../../../../services/coingecko/coingeckoApi.service';

interface Props {
  coinId: string | undefined
}

const CoinDetails: React.FC<Props> = ({ coinId }) => {
  useEffect(() => {
    CoinAPI.getSpecificCoin(coinId).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className='coinpage-coin-values'>

    </div>
  );
};

export default CoinDetails;
