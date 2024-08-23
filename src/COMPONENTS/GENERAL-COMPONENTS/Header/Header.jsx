import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { appContext } from "../../../App"


const Header = () => {
  const { windowWidth, logoOne, logoTwo, showNav, setShowNav } = useContext(appContext)

  return (
    <header className="site-header">
      <div className="header-div">
        <div className="header-logo-div">
          <img
            src={windowWidth < 650 ? logoOne :
              windowWidth >= 650 && windowWidth < 800 ? logoTwo
                : logoOne
            }
            alt="Site Logo" />
        </div>

        {windowWidth >= 650 ?
          <div className="header-menu">
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

            <Link to='/cart' className='cart-link'>
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>
          :
          <button className='toggle-menu'
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? <CloseIcon /> : <MenuIcon />}
          </button>
        }
      </div>
    </header>
  )
}

export default Header