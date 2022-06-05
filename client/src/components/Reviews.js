import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import { getReviews, postReview, resolveReviews, destroyReview } from '../services/reviewService';

export default function Reviews(props) {
  
  const [resolve, setResolve] = useState([false]);

  const [reviews, setReviews] = useState([]);

  function compare(a, b) {
    if (b.date > a.date) return 1;
    if (b.date < a.date) return -1;
    return 0;
  }

  return (
    <>
    <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
    <div className='basket_header'>
      { props.user.isAdmin?
      <h1>All Reviews</h1>
      :
      <h1>Reviews</h1>
      }
    </div >
        {/* This should be show in ascending order --> make sure sending date property over and write a sort in the order single component */}
        <div className='order_outer'>
        {
        reviews.length &&
          <div >
            <div className='order_elements'>
              {/* <ReviewList resolve={props.resolve} setResolve={setResolve} user={props.user} reviews={reviews}  />  */}
            </div>
          </div>
        }
      </div>
    </>
  )
}