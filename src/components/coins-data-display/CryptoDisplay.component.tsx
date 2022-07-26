import React, { useEffect, useState } from 'react';
import Coinlist from './coinlist/Coinlist.component';
import { CoinAPI } from '../../services/coingecko/coingeckoApi.service';
import { ICoin } from '../../models/coin.interface';

const enum Column {
  Name,
  Price,
  MarketChange,
  MarketCap
}

const CryptoDisplay: React.FC = () => {
  const [coins, setcoins] = useState<Array<ICoin>>([]);
  const [filteredcoins, setfilteredcoins] = useState<Array<ICoin>>([]);
  const [column, setcolumn] = useState<Column>(Column.MarketCap);
  const [loading, setloading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, seterror]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    // Fetch coindata and set to state
    CoinAPI.getCoins().then(data => {
      setcoins(data);
      setfilteredcoins(data);
    });
  }, []);

  // if coins array changes, update filteredcoins
  useEffect(() => {
    setfilteredcoins(coins);
  }, [coins])

  // compares coins to the search input and sets the result to filteredcoins
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const lowerCase = event.target.value.toLowerCase();
    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(lowerCase));
    sortByColumn(column, searchedCoins);

    setfilteredcoins(searchedCoins);
  };

  const handleColumn = (clickedColumn: Column): void => {
    let filteredcoinsCopy = [...filteredcoins];

    if (column === clickedColumn) {
      filteredcoinsCopy.reverse();
    } else {
      sortByColumn(clickedColumn, filteredcoinsCopy);
    }

    setfilteredcoins(filteredcoinsCopy);
    setcolumn(clickedColumn);
  };

  // sorts the ICoin array by the given column (clickedColumn).
  const sortByColumn = (clickedColumn: Column, array: Array<ICoin>): void => {
    switch(clickedColumn) {
      case Column.Name:
        array.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      case Column.Price:
        array.sort((a, b) => {
          return b.current_price - a.current_price;
        });
        break;
      case Column.MarketChange:
        array.sort((a, b) => {
          return b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h;
        });
        break;
      case Column.MarketCap:
        array.sort((a, b) => {
            return b.market_cap - a.market_cap;
        });
    }
  }

  return (
    <div className='coinlist-wrapper'>
      <input className='searchbar' onChange={handleSearch} placeholder="Search for a coin..." ></input>
      <div>
        <button onClick={(e) => handleColumn(Column.Name)} value={Column.Name} >Name</button>
        <button onClick={(e) => handleColumn(Column.Price)} value={Column.Price} >Current Price</button>
        <button onClick={(e) => handleColumn(Column.MarketChange)} value={Column.MarketChange} >Market Cap Change</button>
        <button onClick={(e) => handleColumn(Column.MarketCap)} value={Column.MarketCap} >Market Cap</button>
      </div>
      {loading && <Coinlist coinData={filteredcoins} />}
    </div>
  );
};

export default CryptoDisplay;