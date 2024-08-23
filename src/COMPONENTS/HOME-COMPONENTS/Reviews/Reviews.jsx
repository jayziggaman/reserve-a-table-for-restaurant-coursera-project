import React, { useState } from 'react'
import reviewOne from "../../../images/review-1.jpg"
import reviewTwo from "../../../images/review-2.jpg"
import reviewThree from "../../../images/review-3.jpg"
import reviewFour from "../../../images/review-4.jpg"
import Review from './Review/Review'
import "./Reviews.css"

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 'one',
      stars: 5,
      location: 'Lagos, Nigeria',
      name: 'Divine Ikubor',
      comment: 'Really enjoyed the atmosphere.',
      image: reviewOne
    },

    {
      id: 'two',
      stars: 5,
      location: 'Phoenix, Arizona, US',
      name: 'Robert Kiyosaki',
      comment: 'The greek salad was excellent!',
      image: reviewTwo
    },

    {
      id: 'three',
      stars: 5,
      location: 'Enugu, Nigeria',
      name: 'Ochiagha Ozor',
      comment: 'You have to try the Greek Salad!',
      image: reviewThree
    },

    {
      id: 'four',
      stars: 5,
      location: 'Dubai, UAE',
      name: 'Iman Gadzhi',
      comment: 'Awesome place peaceful atmosphere with delicious food',
      image: reviewFour
    }
  ])

  return (
    <section className="reviews-section">
      <section className="section-content">
        <header className='reviews-header'>
          <h2>
            What our customers say!
          </h2>
        </header>

        <section className="reviews">
          {reviews.map(review => {
            const { id } = review
            
            return (
              <Review
                key={id} review={review}
              />
            )
          })}
        </section>
      </section>
    </section>
  )
}

export default Reviews