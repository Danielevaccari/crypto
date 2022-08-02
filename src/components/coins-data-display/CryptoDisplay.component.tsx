import * as React from 'react';
import Coinlist from './coinlist/Coinlist.component';
import { CoinAPI } from '../../services/coingecko/coingeckoApi.service';
import { ICoin } from '../../models/coin.interface';
import { Column } from '../../utils/enums';
import { TiSortAlphabetically } from 'react-icons/ti'
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IconContext } from "react-icons";

const CryptoDisplay: React.FC = () => {
  const [coins, setcoins] = React.useState<Array<ICoin>>([]);
  const [filteredcoins, setfilteredcoins] = React.useState<Array<ICoin>>([]);
  const [column, setcolumn] = React.useState<Column>(Column.MarketCap);
  const [loading, setloading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, seterror]: [string, (error: string) => void] = React.useState('');

  React.useEffect(() => {
    // Fetch coindata and set to state
    CoinAPI.getCoins().then(data => {
      setcoins(data);
      setfilteredcoins(data);
    });
  }, []);

  // compares coins to the search input and sets the result to filteredcoins
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const lowerCase = event.target.value.toLowerCase();
    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(lowerCase));

    setfilteredcoins(searchedCoins);
  };

  const handleColumn = (event: React.MouseEvent<HTMLButtonElement>, clickedColumn: Column): void => {
    let filteredcoinsCopy = [...filteredcoins];
    let coinsCopy = [...coins];

    if (column === clickedColumn) {
      filteredcoinsCopy.reverse();
      coinsCopy.reverse();
    } else {
      sortByColumn(clickedColumn, filteredcoinsCopy);
      sortByColumn(clickedColumn, coinsCopy);
    }

    setfilteredcoins(filteredcoinsCopy);
    setcoins(coinsCopy);
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
        <IconContext.Provider value={{ size: "1.5em" }}>
          <button className={"column-button" + (column === Column.Name ? "-active" : "")} onClick={(e) => handleColumn(e, Column.Name)} >
            <TiSortAlphabetically />
            <h4>Name</h4>
          </button>
          <button className={"column-button" + (column === Column.Price ? "-active" : "")} onClick={(e) => handleColumn(e, Column.Price)} >
            <FaMoneyBillAlt />
            <h4>Current Price</h4>
          </button>
          <button className={"column-button" + (column === Column.MarketChange ? "-active" : "")} onClick={(e) => handleColumn(e, Column.MarketChange)} >
            <BsGraphUp />
            <h4>Market Cap Change</h4>
          </button>
          <button className={"column-button" + (column === Column.MarketCap ? "-active" : "")} onClick={(e) => handleColumn(e, Column.MarketCap)} >
            <GrMoney />
            <h4>Market Cap</h4>
          </button>
        </IconContext.Provider>
      </div>
      {loading && <Coinlist coinData={filteredcoins} />}
    </div>
  );
};

export default CryptoDisplay;