import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { stayService } from "../services/stay.service";
import { StayInfo } from "../cmps/stay-info";
import { Reserve } from "../cmps/stay-reserve";
import { StayReview } from "../cmps/stay-review";
import { Gmap } from "../cmps/map";
import starIcon from '../assets/img/svgs/star.svg'

export const StayDetails = () => {
  const params = useParams();
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

  if (!stay) {
    return <section className="stay-details-container">Loading</section>;
  }
  return (
    <section className="stay-details-container details-page-layout">
      <div className="stay-title-info-container">
        <h1 className="stay-name">{stay.name}</h1>
        <div className="short-desc">
          <div className="stats">
            <span><img width='14px' src={starIcon}></img>     {(stay.reviewScores.rating / 100).toFixed(1) * 5} ·</span>
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
      {/* <div className="host-info"> */}
      {/* <img src={stay.host.pictureUrl} alt="" />
        <h2>hosted by {stay.host.fullname}</h2> */}
      {/* </div> */}
      <div className="map-container">
       < Gmap />
      </div>
    </section>
  );
};
//maybe useref after new review will render
