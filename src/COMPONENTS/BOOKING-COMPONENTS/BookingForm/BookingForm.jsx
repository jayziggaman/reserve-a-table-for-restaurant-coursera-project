import React, { useState } from 'react'
import { ACTIONS, fetchAPI } from '../../../PAGES/BookingPage/BookingPage'
import AvailableTime from './AvailableTime/AvailableTime'
import "./BookingForm.css"

const BookingForm = ({
  availableTimes, dispatch, submitForm
}) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [numberOfGuests, setNumberOfGuests] = useState(0)
  const [occasion, setOccassion] = useState('')


  return (
    <>
      <header>
        <h1>
          Booking Form
        </h1>
      </header>
      
      <form
        onSubmit={() => {
          const formData = { date, time, numberOfGuests, occasion }
          submitForm(formData)
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date"
          value={date} onChange={e => {
            setDate(e.target.value)

            const available = fetchAPI(new Date(e.target.value))
            dispatch({type: ACTIONS.CHANGE_TIME, payload: available })
          }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time"
          value={time} onChange={e => setTime(e.target.value)}
        >
          {availableTimes.map(time => {
            return (
              <AvailableTime key={time} time={time} />
            )
          })}
        </select>
          
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"
          value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)}
        />
            
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
          value={occasion} onChange={e => setOccassion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
            
        <input type="submit" value="Make Your reservation" />
      </form> 
    </>
  )
}

export default BookingForm