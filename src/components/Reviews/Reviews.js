import React, { Component } from "react"

class Reviews extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJU_OKSH_D5YgRFLhOcB3Ru1c&fields=name,reviews,rating,formatted_phone_number&key=AIzaSyCZNXNCNGCISImN_bupjPe-pZft6y7pkxw"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          reviews: response.result.reviews,
        })
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
    console.log(e.target)
    e.target.parentElement.innerHTML="ubu"
  }

  render() {
    return (
      <section id="reviews">
        <div class="section-header">
          <h3>Read Reviews</h3>
          <p>Hear what others have to say.</p>
        </div>
        <div id="reviews-container">
          {this.state.reviews.map(review => {
            const str = review.text
            const shortStr = this.shortenString( str )
            return(
            <div class="review-container">
              <div class="review-meta">
                <img
                  class="profile-photo"
                  src={review.profile_photo_url}
                  alt=""
                />
              </div>
              <div class="review-details">
                <div class="author-name">{review.author_name}</div>
                <div class="review-date">
                  {review.relative_time_description}
                </div>
                <div class="review-rating">
                  <span class="rating-star"></span>
                  <span class="rating-star"></span>
                  <span class="rating-star"></span>
                  <span class="rating-star"></span>
                  <span class="rating-star"></span>
                </div>
                <div id="rc-0" class="review-content">
                  {shortStr}
                  <a 
                    class="review-link" 
                    href="#"
                    onClick={this.readMore}
                  >
                    read more
                  </a>
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
