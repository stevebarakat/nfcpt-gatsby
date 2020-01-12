import React from "react";
import { graphql } from "gatsby";

const PlacesPage = ({ data }) => {
  const place = data.googlePlacesPlace;
  const reviews = place.childrenGooglePlacesReview.map(r => (
    <div>
      <img height="50" width="50" src={r.profile_photo_url} />
      <strong>
        {r.author_name} - {r.rating}
      </strong>
      <p>{`${r.text.substring(0, 250)} ...`}</p>
    </div>
  ));
  return (
    <div>
      <h1>{place.name}</h1>
      <p>total ratings: {place.user_ratings_total}</p>
      <p>average: {place.rating}</p>
      <h3>Recent Reviews</h3>
      {reviews}
    </div>
  );
};

export const query = graphql`
  query {
    googlePlacesPlace {
      name
      rating
      childrenGooglePlacesReview {
        author_name
        text
        rating
        profile_photo_url
      }
      user_ratings_total
    }
  }
`;

export default PlacesPage;