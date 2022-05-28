import { stayService } from "../services/stay.service";
import React from "react";
export const StayInfo = ({ stay }) => {
  if (!stay) return <section className="stay-main-info-container"></section>;
  const amenities = stayService.amenities;
  return (
    <section className="stay-main-info-container">
      <div className="short-info-container">
        <h2>
          {stay.roomType} hosted by {stay.host.fullname}
        </h2>
        <h4 style={{fontWeight:400}}>
          {" "}
          {stay.capacity} guests · {stay.bedrooms} bedrooms · {stay.beds} beds · {stay.bathrooms} baths
        </h4>
        <div className="host-img-container">
          <img src={stay.host.thumbnailUrl} alt="" />
        </div>
      </div>
      <div className="summary">
        <p>{stay.summary}</p>
      </div>
      <div className="amenities">
        {amenities.map((amenity, idx) => {
          return (
            <h4
              key={idx}
              style={
                stay.amenities.includes(amenity)
                  ? {}
                  : { textDecoration: "line-through" }
              }
            >
              {amenity}
            </h4>
          );
        })}
      </div>
      
    </section>
  );
};
