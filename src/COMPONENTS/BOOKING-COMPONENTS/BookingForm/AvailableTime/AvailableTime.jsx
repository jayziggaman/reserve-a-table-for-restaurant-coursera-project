import React from 'react'

const AvailableTime = ({time}) => {
  return (
    <option value={time}>
      {time}
    </option>
  )
}

export default AvailableTime