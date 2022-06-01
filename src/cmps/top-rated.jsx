import React from "react"
import { Link } from "react-router-dom"
import hongkong from "../assets/img/logo/hongkong.jpg"
import rio from "../assets/img/logo/rio.jpg"
import barcelona from "../assets/img/logo/barcelona.jpg"
import newyork from "../assets/img/logo/newyork.webp"

export function TopRated({onSetFilter}) {
  return (
    <section className="top-rated">
      <h1 className="header-top-rated">Top Rated Destinations</h1>

      <section className="pop-cities">
        <div className="card" onClick={()=>onSetFilter('Hong Kong')}>
          <img src={`${hongkong}`} />

          <div className="city-details">
            <h3 className="color-city">Hong Kong</h3>
            <h4>
              <span>Hong kong</span>
            </h4>
          </div>
        </div>
        <div className="card" onClick={()=>onSetFilter('Rio de Janeiro')}>
          <img src={`${rio}`} />

          <div className="city-details">
            <h3 className="color-city">Rio de Janeiro</h3>
            <h4>
              <span>Brazil</span>
            </h4>
          </div>
        </div>
        <div className="card" onClick={()=>onSetFilter('Barcelona')}>
          <img src={`${barcelona}`} />

          <div className="city-details">
            <h3 className="color-city">Barcelona</h3>
            <h4>
              <span>Spain</span>
            </h4>
          </div>
        </div>
        <div className="card" onClick={()=>onSetFilter('New York')}>
          <img src={`${newyork}`} />

          <div className="city-details">
            <h3 className="color-city">New York</h3>
            <h4>
              <span>United States</span>
            </h4>
          </div>
        </div>
      </section>
    </section>
  )
}
