import React, { useContext } from 'react'
import "./BookingConfirmation.css"
import confirmationImg from "../../images/confirmation-img.png"
import { appContext } from '../../App'

const BookingConfirmation = () => {
  const { navigate } = useContext(appContext)

  return (
    <main className="booking-confirmation-main">
      <section className="confirmation info">
        <img src={confirmationImg} alt="Confirmation Image" />

        <p>Table Sucessfully Booked</p>
      </section>

      <section className="route-to-home">
        <button
          onClick={() => {
            navigate('/', {replace: true
            })
          }}
        >
          Back to home
        </button>
      </section>
    </main>
  )
}

export default BookingConfirmation