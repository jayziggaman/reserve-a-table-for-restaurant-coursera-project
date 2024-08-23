import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Special from './Special/Special'
import specialOne from "../../../images/dish-1.jpg"
import specialTwo from "../../../images/dish-2.png"
import specialThree from "../../../images/dish-3.png"
import "./Specials.css"

const Specials = () => {
  const [specials, setSpecials] = useState([
    {
      id: 'one',
      name: 'Greek Salad',
      price: '$12.99',
      image: specialOne,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },

    {
      id: 'two',
      name: 'Bruschetta',
      price: '$8.99',
      image: specialTwo,
      about: 'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetable.'
    },
    
    {
      id: 'three',
      name: 'Lemon Cake',
      price: '$15.00',
      image: specialThree,
      about: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
  ])

  return (
    <section className="specials-section">
      <section className="section-content">
        <header className="specials-header">
          <h2>This Week's Specials</h2>

          <Link to='menu'>
            Menu
          </Link>
        </header>

        <section className="specials">
          {specials.map(special => {
            const { id } = special
            
            return (
              <Special
                key={id} special={special}
              />
            )
          })}
        </section>
        
      </section>
    </section>
  )
}

export default Specials