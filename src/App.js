import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './componenets/Coins'
import Coin from './Routes/Coin'
import Navbar from './componenets/Navbar'


function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Coins coins={coins} />} />
        <Route exact path='/coin/:coinId' element={<Coin />}>
          {/* <Route exact path=':coinId' element={<Coin />} /> */}
        </Route>
      </Routes>

    </>
  );
}

export default App;