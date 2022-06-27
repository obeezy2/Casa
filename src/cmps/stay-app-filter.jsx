import React from "react"

import { stayService } from "../services/stay.service"

export function StayAppFilter({ onChangeFilter }) {
  const filterNames = stayService.getLabels()

  const handleSetFilter = (label) => {
    onChangeFilter({ label })
  }


  return (
    <div className={`icon-filters`}>
      {filterNames.map((filter) => {
        return (
          <div key={filter}
            className="filter-whole" onClick={() => handleSetFilter(filter)}>
            <div className="center-div">
              <img
                src={require(`../assets/img/filters/${filter}.jpg`)}
                alt=""
              ></img>
            </div>
            <p className="detail-filter">{filter}</p>
          </div>
        )
      })}

    </div>
  )
}
