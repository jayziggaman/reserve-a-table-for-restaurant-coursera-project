import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import "./Review.css"

const Review = ({ review }) => {
  const { name, image, comment, stars, location } = review

  const arr = []

  for (let i = 0; i < (stars); i++) {
    if (stars > 0) {
      arr.push('star')
    }
  }


  // console.log(arr)
  
  return (
    <div className="review">
      <div className="review-stars">
        {arr.map(star => {
          return (
            <span>
              <StarOutlinedIcon
                style={{
                  color: '#F4CE14'
                }}
              />
            </span>
          )
        })}
      </div>

      <div className="review-name-img-location">
        <div className="review-img-div">
          <img src={image} alt="" />
        </div>

        <div className="review-name-location">
          <p className='review-name'>{name}</p>
          <p className='review-location'>{location}</p>
        </div>
      </div>

      <p className='review-comment'>
        "{comment}"
      </p>
    </div>
  )
}

export default Review