import React, { useContext } from 'react'
import { appContext } from '../../../App'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Footer.css"

const Footer = () => {
  const { logoTwo } = useContext(appContext)

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-img-div">
          <img src={logoTwo} alt="" />
          <span>
            LITTLE LEMON
          </span>
        </div>

        <div className="footer-links">
          <div>
            <b>Menu</b>

            <ul>
              <li>Early Bird</li>
              <li>Special Occassions</li>
              <li>Holiday Seasons</li>
              <li>Lunch</li>
            </ul>
          </div>

          <div>
            <b>Reservations</b>

            <ul>
              <li>Reservations</li>
              <li>Order</li>
              <li>Delivery</li>
            </ul>
          </div>

          <div>
            <b>Contact</b>

            <ul>
              <li>+234 749205738</li>
              <li>+24 463939463</li>
              <li>littlelemon@gmail.com</li>
            </ul>

            <span>
              <FacebookIcon />
              <InstagramIcon />
              <WhatsAppIcon />
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer