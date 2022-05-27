import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { stayService } from "../services/stay.service";
import { StayInfo } from "../cmps/stay-info";
import { Reserve } from "../cmps/stay-reserve";
import { StayReview } from "../cmps/stay-review";

export const StayDetails = () => {
  const params = useParams();
  const [stay, setStay] = useState(null);

  useEffect(() => {
    loadStay();
  }, []);

  const loadStay = async () => {
    try {
      const foundStay = await stayService.getById(params.stayId);
      setStay(foundStay);
    } catch (err) {
      console.error(err);
    }
  };

  if (!stay) {
    return <section className="stay-details-container">Loading</section>;
  }
  return (
    <section className="stay-details-container">
      <h1 className="stay-name">{stay.name}</h1>
      <div className="short-desc">
        <div className="stats">
          <span>⭐{(stay.reviewScores.rating / 100) * 5}</span> ·{" "}
          <span>{stay.reviews.length} reviews</span> ·{" "}
          {stay.host.isSuperhost && <span>🌟 Superhost</span>} ·{" "}
          <span>{stay.address.street}</span>
        </div>
        {/* <div className="quick-actions">
            <div className="share-btn">Share</div>
            <div className="save-btn">Save</div>
        </div> */}
      </div>
      <div className="stay-imgs-container">
        <img className="main-img-container" src={stay.imgUrls[0]} alt="" />
        {stay.imgUrls.map((imgUrl, idx) => {
          if (idx === 0) return;
          return (
            <img
              className="secondary-img-container"
              key={idx}
              src={imgUrl}
              alt=""
            />
          );
        })}
      </div>
      <div className="info-reserve">
        <StayInfo stay={stay} />
        <Reserve stayId={stay._id} stayPrice={stay.price} numOfGuest={stay.capacity}/>
      </div>
      <StayReview reviewScores={stay.reviewScores} reviews={stay.reviews} />
      <div className="date-selection"></div>
      <div className="host-info">
        <img src={stay.host.pictureUrl} alt="" />
        <h2>hosted by {stay.host.fullname}</h2>
      </div>
    </section>
  );
};

//maybe useref after new review will render
