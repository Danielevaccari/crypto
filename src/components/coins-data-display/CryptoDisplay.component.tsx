import React, { useEffect, useState } from 'react';
import Coinlist from './coinlist/Coinlist.component';
import { CoinAPI } from '../../services/coingecko/coingeckoApi.service';
import { Coin } from '../../models/coin.interface';

const CryptoDisplay: React.FC = () => {
  const [coins, setcoins] = useState<Array<Coin>>([]);
  const [loading, setloading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, seterror]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    // Fetch coindata and set to state
    CoinAPI.getCoins().then(data => {
      setcoins(data);
    });
  }, []);
  console.log(coins);

  return (
    <div className='coinlist-wrapper'>
      {loading && <Coinlist coinData={coins} />}
    </div>
  );
};

export default CryptoDisplay;