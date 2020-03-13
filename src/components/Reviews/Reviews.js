import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query ReviewQuery {
      allGooglePlacesReview {
        edges {
          node {
            author_name
            author_url
            profile_photo_url
            rating
            text
            relative_time_description
          }
        }
      }
    }
  `)

  console.log(data.allGooglePlacesReview.edges)

  const shortenString = string => {
    let str = ""
    if (string.length > 125) {
      str = string.slice(0, 125)
    } else {
      str = string
    }
    return str
  }

  return (
    <section id="reviews">
      <div className="section-header">
        <h3>Read Reviews</h3>
        <p>Hear what others have to say.</p>
      </div>
      <div id="reviews-container">
        {data.allGooglePlacesReview.edges.map((review, i) => {
          const readMore = e => {
            e.preventDefault()
            console.log(e.target.parentNode)
            e.target.parentElement.innerHTML = review.node.text
          }
          const str = review.node.text
          const shortStr = shortenString(str)
          return (
            <div key={i} className="review-container">
              <div className="review-meta">
                <img
                  className="profile-photo"
                  src={review.node.profile_photo_url}
                  alt=""
                />
              </div>
              <div className="review-details">
                <div className="author-name">{review.node.author_name}</div>
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
                  <button className="review-link" onClick={readMore}>
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
