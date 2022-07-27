import React, { useEffect, useState } from 'react';
import Coinlist from './coinlist/Coinlist.component';
import { CoinAPI } from '../../services/coingecko/coingeckoApi.service';
import { ICoin } from '../../models/coin.interface';
import { TiSortAlphabetically } from 'react-icons/ti'
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IconContext } from "react-icons";

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

  const handleColumn = (event: React.MouseEvent<HTMLButtonElement>, clickedColumn: Column): void => {
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
      <div id="column-div" className='column-buttons'>
        <button className={"column-button" + (column === Column.Name ? "-active" : "")} onClick={(e) => handleColumn(e, Column.Name)} >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <TiSortAlphabetically />
          </IconContext.Provider>
          <h4>Name</h4>
        </button>
        <button className={"column-button" + (column === Column.Price ? "-active" : "")} onClick={(e) => handleColumn(e, Column.Price)} >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <FaMoneyBillAlt />
          </IconContext.Provider>
          <h4>Current Price</h4>
        </button>
        <button className={"column-button" + (column === Column.MarketChange ? "-active" : "")} onClick={(e) => handleColumn(e, Column.MarketChange)} >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <BsGraphUp />
          </IconContext.Provider>
          <h4>Market Cap Change</h4>
        </button>
        <button className={"column-button" + (column === Column.MarketCap ? "-active" : "")} onClick={(e) => handleColumn(e, Column.MarketCap)} >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <GrMoney />
          </IconContext.Provider>
          <h4>Market Cap</h4>
        </button>
      </div>
      {loading && <Coinlist coinData={filteredcoins} />}
    </div>
  );
};

export default CryptoDisplay;