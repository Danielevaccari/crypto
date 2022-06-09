import React, { useEffect, useState } from 'react';
import Coinlist from './coinlist/Coinlist.component';
import { CoinAPI } from '../../services/coingecko/coingeckoApi.service';
import { Coin } from '../../models/coin.interface';

const CryptoDisplay: React.FC = () => {
  const [coins, setcoins] = useState<Array<Coin>>([]);
  const [filteredcoins, setfilteredcoins] = useState<Array<Coin>>([]);
  const [loading, setloading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, seterror]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    // Fetch coindata and set to state
    CoinAPI.getCoins().then(data => {
      setcoins(data);
      setfilteredcoins(data);
    });
  }, []);

  // compares coins to the search input and sets the result to filteredcoins
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let lowerCase = event.target.value.toLowerCase();
    let searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(lowerCase));

    setfilteredcoins(searchedCoins);
  };

  return (
      <div className='coinlist-wrapper'>
        <input className='searchbar' onChange={handleSearch} placeholder="Search for a coin..." ></input> 
        {loading && <Coinlist coinData={filteredcoins} />}
      </div>
  );
};

export default CryptoDisplay;