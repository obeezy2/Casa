import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { stayService } from "../services/stay.service";
import { StayInfo } from "../cmps/stay-info";
import { Reserve } from "../cmps/stay-reserve";
import { StayReview } from "../cmps/stay-review";
import { Map } from "../cmps/map";
import starIcon from '../assets/img/svgs/star.svg'
import { AddReview } from '../cmps/add-review'
import { useSelector } from "react-redux";


function numberWithCommas(n) {
  var parts = n.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}
export const StayDetails = () => {
  const params = useParams();
  const { user } = useSelector((storeState) => storeState.userModule)
  const [stay, setStay] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
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
  const addGuestReview = (review) => {
    review.createdAt = Date.now() / 1000
    stay.reviews.unshift(review)
  }
  if (!stay) {
    return <section className="stay-details-container">Loading</section>;
  }
  return (
    <section className="stay-details-container details-page-layout">
      <div className="stay-title-info-container">
        <h1 className="stay-name">{stay.name}</h1>
        <div className="short-desc">
          <div className="stats">
            <span className="stats-star"><img width='14px' src={starIcon}></img>     {((stay.reviewScores.rating / 100) * 5).toFixed(2)} ·</span>
            <span className="reviews"> {stay.reviews.length} reviews</span>
            <span className="seperate-dott">·</span>
            {stay.host.isSuperhost && (
              <span className="super-host">
                Superhost
                <span className="seperate-dott">·</span>
              </span>
            )}
            <span className="address">{stay.address.street}</span>
          </div>
          <div className="quick-actions">
            <div className="share-btn">
              <img src={require("../assets/img/Icons/upload.png")} alt="" />
              Share
            </div>
            <div className="save-btn">
              <img src={require("../assets/img/Icons/save.png")} alt="" />
              Save
            </div>
          </div>
        </div>
      </div>
      <div className="img-layout">
        <div className="stay-imgs-container">
          <img
            className="main-img-container"
            src={require(`../assets/img/houses/${stay.imgUrls[0]}`)}
            alt=""
          />
          {stay.imgUrls.map((imgUrl, idx) => {
            if (idx === 0) return;
            let style = null;
            if (idx === 2) style = { borderTopRightRadius: "12px" };
            if (idx === 4) style = { borderBottomRightRadius: "12px" };
            return (
              <img
                style={style}
                className="secondary-img-container"
                key={idx}
                src={require(`../assets/img/houses/${stay.imgUrls[idx]}`)}
                alt=""
              />
            );
          })}
        </div>
      </div>

      <div className="info-reserve">
        <StayInfo stay={stay} />
        <Reserve
          stayId={stay._id}
          stayPrice={stay.price}
          numOfGuest={stay.capacity}
          hostId={stay.host['_id']}

        />
      </div>
      <StayReview reviewScores={stay.reviewScores} reviews={stay.reviews} />
      <div className="date-selection"></div>
      <div>
        <AddReview addGuestReview={addGuestReview} loggedinUser={user} />

      </div>
      <div className="map-container">
        < Map lat={stay.address.location.lat} lan={stay.address.location.lan} zoom={3} />
      </div>
    </section>
  );
};
//maybe useref after new review will render
