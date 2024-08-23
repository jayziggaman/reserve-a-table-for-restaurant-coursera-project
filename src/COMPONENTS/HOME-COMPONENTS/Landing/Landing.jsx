import React from 'react'
import "./Landing.css"
import landingImg from "../../../images/landing-img.jpg"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className="landing-section">
      <section className="section-content">
        <div className="landing-text-div">
          <h1>
            <span className='title'>Little Lemon</span>
            <span className='location'>Chicago</span>
          </h1>

          <p>
            We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
          </p>

          <Link to='reservations'>
            Reserve a Table
          </Link>
        </div>

        <div className="landing-img-div">
          <img src={landingImg} alt="Meal Image" />
        </div>
      </section>
    </section>
  )
}

export default Landing