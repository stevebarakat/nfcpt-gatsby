import React, { useEffect, useState } from "react"
import "./Reviews.css"

const Reviews = () => {
  const [state, setState] = useState({
    reviews: [],
    reviewsContent: [],
  })
  const url =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJU_OKSH_D5YgRFLhOcB3Ru1c&fields=name,reviews,rating,formatted_phone_number&key=AIzaSyCZNXNCNGCISImN_bupjPe-pZft6y7pkxw"

  async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    const reviews = data.result.reviews
    let reviewsContent = []
    reviews.map(review => {
      reviewsContent.push(review.text)
    })
    for (let i = 0; i < reviewsContent.length; i++) {
      setState({
        reviews: reviews,
        reviewsContent: reviewsContent,
      })
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const shortenString = str => {
    if (str.length > 125) {
      str = str.slice(0, 125)
    } else {
      str = str
    }
    return str
  }

  const readMore = e => {
    e.preventDefault()
    console.log(e.target.parentNode.id)
    e.target.parentElement.innerHTML =
      state.reviewsContent[e.target.parentNode.id]
  }
  return (
    <section id="reviews">
      <div class="section-header">
        <h3>Read Reviews</h3>
        <p>Hear what others have to say.</p>
      </div>
      <div id="reviews-container">
        {state.reviews.map((review, i) => {
          const str = review.text
          const shortStr = shortenString(str)
          return (
            <div key={i} className="review-container">
              <div className="review-meta">
                <img
                  className="profile-photo"
                  src={review.profile_photo_url}
                  alt=""
                />
              </div>
              <div className="review-details">
                <div className="author-name">{review.author_name}</div>
                <div className="review-date">
                  {review.relative_time_description}
                </div>
                <div className="review-rating">
                  <span className="rating-star"></span>
                  <span className="rating-star"></span>
                  <span className="rating-star"></span>
                  <span className="rating-star"></span>
                  <span className="rating-star"></span>
                </div>
                <div id={i} className="review-content">
                  {shortStr}
                  <button className="review-link" href="#" onClick={readMore}>
                    read more
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews
