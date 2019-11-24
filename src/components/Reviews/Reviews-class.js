import React, { Component } from "react"
import './Reviews.css'

class Reviews extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      reviewsContent: []
    }
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJU_OKSH_D5YgRFLhOcB3Ru1c&fields=name,reviews,rating,formatted_phone_number&key=AIzaSyCZNXNCNGCISImN_bupjPe-pZft6y7pkxw"
    )
      .then(response => response.json())
      .then(response => {
        const reviews = response.result.reviews
        console.log(reviews)
        let reviewsContent = [];
        reviews.map((review) => {
          reviewsContent.push(review.text)
        })
        console.log(reviewsContent)
        for(let i = 0; i < reviewsContent.length; i++){
          this.setState({
            reviews: reviews,
            reviewsContent: reviewsContent
          })
        }
      })
  }

  shortenString = ( str ) => {
		if ( str.length > 125 ) {
			str = str.slice( 0, 125 );
		} else {
			str = str
		}
		return str
	}

  readMore = e => {
    e.preventDefault()
    console.log(e.target.parentNode.id)
    e.target.parentElement.innerHTML=this.state.reviewsContent[e.target.parentNode.id]
  }

  render() {
    return (
      <section id="reviews">
      <div class="section-header">
      <h3>Read Reviews</h3>
      <p>Hear what others have to say.</p>
      </div>
        <div id="reviews-container">
          {this.state.reviews.map((review, i) => {
            const str = review.text
            const shortStr = this.shortenString( str )
            return(
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
                  <button 
                    className="review-link" 
                    href="#"
                    onClick={this.readMore}
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
          )})}
        </div>
        </section>
    )
  }
}

export default Reviews
