import React, { useEffect, useReducer, useState } from 'react'
import { ACTIONS, fetchAPI } from '../../../PAGES/BookingPage/BookingPage'
import AvailableTime from './AvailableTime/AvailableTime'
import "./BookingForm.css"


const VALIDATE_ACTIONS = {
  DATE: "validate_date",
  TIME: "validate_time",
  GUESTS: "validate_guests"
}

const datePattern = /^\d{4}-\d{2}-\d{2}$/

function reducer(validate, action) {

  switch (action.type) {
    case VALIDATE_ACTIONS.DATE:
      const dateTime = new Date(action.payload).getTime()
      const nowTime = new Date().getTime()

      const conditionI = datePattern.test(action.payload)
      const conditionII = dateTime > nowTime

      return {
        ...validate, date: {
          valid: conditionI && conditionII ? true : false,
          beenTouched: true
        }
      }
    
    case VALIDATE_ACTIONS.TIME:
      return {
        ...validate, time: {
          valid: action.payload === '' ? false : true,
          beenTouched: true
      }}
    
    case VALIDATE_ACTIONS.GUESTS:
      return {
        ...validate, guests: {
          valid: action.payload > 0 && action.payload <= 10 ? true : false,
          beenTouched: true
        }
      }
    
      
  }
}


const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [validate, validateDispatch] = useReducer(reducer, {
    date: {
      vaild: false,
      beenTouched: false
    },

    time: {
      vaild: false,
      beenTouched: false
    },

    guests: {
      vaild: false,
      beenTouched: false
    }
  })
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [numberOfGuests, setNumberOfGuests] = useState('')
  const [occasion, setOccassion] = useState('')
  
  


  useEffect(() => {
  }, [validate])


  useEffect(() => {
    if (date === '') {
      dispatch({ type: ACTIONS.CHANGE_TIME, payload: [] })

    } else {
      const newAvailableTimes = fetchAPI(new Date(date))
      dispatch({ type: ACTIONS.CHANGE_TIME, payload: newAvailableTimes })
    }
  }, [date])
  

  function formSubmit(formData) {
    submitForm(formData)
  }


  function validateDispatchFunction(type, value) {
    if (type === 'date') {
      validateDispatch({
        type: VALIDATE_ACTIONS.DATE,
        payload: value
      })

    } else if (type === 'time') {
      validateDispatch({
        type: VALIDATE_ACTIONS.TIME,
        payload: value
      })
      
    } else if (type === 'guests') {
      validateDispatch({
        type: VALIDATE_ACTIONS.GUESTS,
        payload: value
      })
      
    }
  }



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
          formSubmit(formData)
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date"
          className={validate.date.valid === false && validate.date.beenTouched ? 'error' : ''}
          value={date} onChange={e => {
            setDate(e.target.value)
            if (validate.date.valid === false && validate.date.beenTouched) {
              validateDispatchFunction('date', e.target.value)
            }
          }}
          onBlur={e => validateDispatchFunction('date', e.target.value)}
        />
        {validate.date.valid === false && validate.date.beenTouched &&
          <p className='error'>Pick a valid date for the reservation</p>
        }


        <label htmlFor="res-time">Choose time</label>
        <select id="res-time"
          className={validate.time.valid === false && validate.time.beenTouched ? 'error' : ''}
          value={time} onChange={e => {
            setTime(e.target.value)
            if (validate.time.valid === false && validate.time.beenTouched) {
              validateDispatchFunction('time', e.target.value)
            }
          }}
          onBlur={e => validateDispatchFunction('time', e.target.value)}
        >
          <option value="">Reservation time</option>
          {availableTimes.map(time => {
            return (
              <AvailableTime key={time} time={time} />
            )
          })}
        </select>
        {validate.time.valid === false && validate.time.beenTouched &&
          <p className='error'>Pick a time for the reservation</p>
        }

          
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="From 1 - 10 guests" min="1" max="10" id="guests"
          className={validate.guests.valid === false && validate.guests.beenTouched ? 'error' : ''}
          value={numberOfGuests}
          onChange={e => {
            setNumberOfGuests(parseInt(e.target.value))
            if (validate.guests.valid === false && validate.guests.beenTouched) {
              validateDispatchFunction('guests', e.target.value)
            }
          }}
          onBlur={e => validateDispatchFunction('guests', e.target.value)}
        />
        {validate.guests.valid === false && validate.guests.beenTouched &&
          <p className='error'>You can book for 1 to 10 guests</p>
        }

            
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
          value={occasion} onChange={e => setOccassion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
            
        <button aria-label='on-click'>
          Make your reservation
        </button>
      </form> 
    </>
  )
}

export default BookingForm