import React from 'react'
import CoinItem from './CoinItem'
import {Link} from 'react-router-dom'
import './coins.css'
import Coin from '../Routes/Coin'

const Coins = (props) => {
  return (
    <div className='container'>
        <div className="heading">
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24hour</p>
            <p className='hide'>Volume</p>
            <p className='hide'>Market Cap</p>
        </div>
       {props.coins.map((coins) =>{
            return (
                <Link to={`/coin/${coins.id}`} key={coins.id}>
                <CoinItem coins={coins} />
            </Link>
            )
       })}
    </div>
  )
}
// to={`/coins/${coins.id}`}
export default Coins