import { useState } from "react";
import starIcon from '../assets/img/svgs/star.svg'
export const StayReview = ({ reviewScores, reviews }) => {
  const [isReviewsExpanded, setIsReviewsExpanded] = useState(false)
  return (
    <div className="reviews-container">
      <h1>
        <img width='14px' src={starIcon}></img>      {(reviewScores.rating / 100) * 5} · {reviews.length} reviews
      </h1>
      <div className="rating-breakdown">
        <h4 className="cleanliness">Cleanliness  </h4><span className="c-review">{reviewScores.cleanliness / 2}</span>
        <h4 className="communication">Communication </h4> <span className="communi-review">{reviewScores.communication / 2}</span>
        <h4 className="check-in">Check-in  </h4><span className="checkin-review">{reviewScores.checkin / 2}</span>
        <h4 className="accuracy">Accuracy  </h4><span className="acc-review">{reviewScores.accuracy / 2}</span>
        <h4 className="location">Location  </h4><span className="loc-review" >{reviewScores.location / 2}</span>
        <h4 className="value">Value  </h4><span className="val-review">{reviewScores.value / 2}</span>
      </div>
      <div className="review-cards-container" style={
        isReviewsExpanded ? { height: "fit-content" } : null
      }>
        {reviews.map(review => {
          return <div key={review.by._id} className="review-card">
            <div className="writer-info-container">
              <div className="writer-img-container">
                <img src={review.by.imgUrl} alt="" />
              </div>
              <h3>{review.by.fullname}</h3>
            </div>
            <p>{review.txt}</p>
          </div>
        })}
      </div>
      <div className="reviews-btn"
        onClick={() => {
          setIsReviewsExpanded(!isReviewsExpanded);
        }}
      >
        <h3>{isReviewsExpanded ? 'Show less' : 'Show more'}</h3>
      </div>
    </div >
  );
};
