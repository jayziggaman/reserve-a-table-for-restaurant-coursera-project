import React, { useState } from 'react'
import AvailableTime from './AvailableTime/AvailableTime'
import "./BookingForm.css"

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = ([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', 
  ])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [numberOfGuests, setNumberOfGuests] = useState(0)
  const [occasion, setOccassion] = useState('')
  


  return (
    <form style="display: grid; max-width: 200px; gap: 20px">
      <label for="res-date">Choose date</label>
      <input type="date" id="res-date"
        value={date} onChange={e => setDate(e.target.value)}
      />

      <label for="res-time">Choose time</label>
      <select id="res-time"
        value={time} onChange={e => setTime(e.target.value)}
      >
        {availableTimes.localeCompare(time => {
          <AvailableTime key={time} time={time} />
        })}
      </select>
        
      <label for="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests"
        value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)}
      />
          
      <label for="occasion">Occasion</label>
      <select id="occasion"
        value={occasion} onChange={e => setOccassion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
          
      <input type="submit" value="Make Your reservation" />
    </form> 
  )
}

export default BookingForm