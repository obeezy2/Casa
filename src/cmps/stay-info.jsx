import { stayService } from "../services/stay.service";
import { useState } from "react";
export const StayInfo = ({ stay }) => {
  const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState(false);

  if (!stay) return <section className="stay-main-info-container"></section>;
  const amenities = stayService.amenities;
  return (
    <section className="stay-main-info-container">
      <div className="short-info-container">
        <div className="txt-info">
          <h2>
            {stay.roomType} hosted by {stay.host.fullname}
          </h2>
          <h4>
            {" "}
            {stay.capacity} guests · {stay.bedrooms} bedrooms · {stay.beds} beds
            · {stay.bathrooms} baths
          </h4>
        </div>
        <div className="host-img-container">
          <img src={stay.host.thumbnailUrl} alt="" />
        </div>
      </div>
      <div className="summary">
        <p>{stay.summary}</p>
      </div>
      <div className="amenities-container">
        <div
          className="amenities"
          style={isAmenitiesExpanded ? { height: "fit-content" } : null}
        >
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
        <div
          className="amenities-btn"
          onClick={() => {
            setIsAmenitiesExpanded(!isAmenitiesExpanded);
          }}
        >
          <h3>{isAmenitiesExpanded ? "Show less" : "Show more"}</h3>
        </div>
      </div>
    </section>
  );
};
