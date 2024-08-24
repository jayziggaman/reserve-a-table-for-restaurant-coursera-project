import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { appContext } from '../../App';
import BookingForm from '../../COMPONENTS/BOOKING-COMPONENTS/BookingForm/BookingForm'
import "./BookingPage.css"


const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

export const submitAPI = function(formData) {
  return true;
};


export const ACTIONS = {
  CHANGE_TIME: 'change-time'
}


const reducer = (availableTimes, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_TIME:
      return availableTimes = action.payload
    
    // default
    //   return availableTimes
  }
}


const BookingPage = () => {
  const { navigate } = useContext(appContext)
  
  const [availableTimes, dispatch] = useReducer(reducer, [])

  const date = new Date()


  useEffect(() => {
    const available = fetchAPI(date)
    dispatch({
      type: ACTIONS.CHANGE_TIME, payload: available
    })
  }, [])


  function submitForm(formData) {
    const result = submitAPI(formData)

    navigate( '/booking-confirmation', {replace: true})
  }


  return (
    <main className="booking-page-main">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  )
}

export default BookingPage