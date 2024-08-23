import React from 'react'
import { Link } from 'react-router-dom'
import "./Special.css"

const Special = ({ special }) => {
  const { name, about, price, image } = special
  
  return (
    <article className="special">
      <div className="special-img-div">
        <img src={image} alt="Meal Image" />
      </div>

      <div className="special-text-div">
        <div className="special-name-price">
          <h3>{name}</h3>
          <span>{price}</span>
        </div>

        <p>
          {about}
        </p>

        <Link>
          Order a Delivery
        </Link>
      </div>
    </article>
  )
}

export default Special