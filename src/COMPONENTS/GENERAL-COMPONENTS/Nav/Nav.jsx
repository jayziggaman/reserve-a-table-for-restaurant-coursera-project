import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../../../App'
import "./Nav.css"

const Nav = () => {
  const { showNav, setShowNav } = useContext(appContext)
  
  return (
    <nav
      className={showNav ? 'nav' : ''}
    >
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
              
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
              
        <li>
          <Link to='/menu'>
            Menu
          </Link>
        </li>
              
        <li>
          <Link to='/reservations'>
            Reservations
          </Link>
        </li>
              
              
        <li className='order-online'>
          <Link to='/order-online'>
            Order Online
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav