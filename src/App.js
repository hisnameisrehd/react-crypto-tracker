import './App.css';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Coin from './components/Coin';

// api url
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loadMore, setLoadMore] = useState(5);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        alert('Catch error');
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const loadMoreCoins = () => {
    setLoadMore((prevValue) => prevValue + 5);
  };

  return (
    <div className='App'>
      <div className='search'>
        <form>
          <input
            type='text'
            placeholder='Search a coin'
            onChange={handleSearch}
          />
        </form>
      </div>
      {searchedCoins.slice(0, loadMore).map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}

      <button onClick={loadMoreCoins}>Load More</button>
    </div>
  );
}

export default App;
