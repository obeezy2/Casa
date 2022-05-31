import React from "react";
import { useDispatch } from "react-redux";

import { stayService } from "../services/stay.service";

export function FilterIcons({ onChangeFilter }) {
  const dispatch = useDispatch();
  const filterNames = stayService.getLabels()

  const handleSetFilter = (label) => {
    onChangeFilter({ label });
  };

  return (
    <div className={`icon-filters`}>
      {filterNames.map((filter) => {
        return (
          <div className="filter-whole" onClick={() => handleSetFilter(filter)}>
            <div className="center-div">
              <img
                key={filter}
                src={require(`../assets/img/filters/${filter}.jpg`)}
                alt=""
              ></img>
            </div>
            <p className="detail-filter">{filter}</p>
          </div>
        );
      })}
    </div>
  );
}
