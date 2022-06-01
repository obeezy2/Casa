import {useState} from "react";
export const StayReview = ({ reviewScores, reviews }) => {
  const [isReviewsExpanded,setIsReviewsExpanded]=useState(false)
  return (
    <div className="reviews-container">
      <h1>
        ⭐{(reviewScores.rating / 100).toFixed(1) * 5} · {reviews.length} reviews
      </h1>
      <div className="rating-breakdown">
        <div className="left-container">
          <h4>Cleanliness - {reviewScores.cleanliness / 2}</h4>
          <h4>Communication - {reviewScores.communication / 2}</h4>
          <h4>Check-in - {reviewScores.checkin / 2}</h4>
        </div>
        <div className="right-container">
          <h4>Accuracy - {reviewScores.accuracy / 2}</h4>
          <h4>Location - {reviewScores.location / 2}</h4>
          <h4>Value - {reviewScores.value / 2}</h4>
        </div>
      </div>
      <div className="review-cards-container" style={
            isReviewsExpanded ? { height: "fit-content"} : null
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
          <h3>{isReviewsExpanded?'Show less':'Show more'}</h3>
        </div>
    </div>
  );
};
