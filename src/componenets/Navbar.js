import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <Link to='/'>
    <div className='navbar'>
      <FaCoins className='icon'></FaCoins>
      <h1>Coin <span className='icon'>Search</span></h1>
    </div>
    </Link>
      
  )
}

export default Navbar