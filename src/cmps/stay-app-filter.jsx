import React from "react"

import { stayService } from "../services/stay.service"
import filterSvg from "../assets/img/svgs/2.svg"
import { useState } from "react"
import xIcon from "../assets/img/svgs/x.svg"
export function StayAppFilter({ onChangeFilter }) {
  const filterNames = stayService.getLabels()
  const [modalClass, setModalClass] = useState("filter-modal-container hidden")

  const handleSetFilter = (label) => {
    onChangeFilter({ label })
  }

  const openModal = () => {
    setModalClass("filter-modal-container")
  }
  const closeModal = () => {
    setModalClass("filter-modal-container hidden")
  }

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
        )
      })}
      <div onClick={() => openModal()} className="filter-icon">
        <img className="filter-img" src={filterSvg}></img>Filters
      </div>

      <div className={modalClass}>
        <div className="section-filter">
          {" "}
          <img
            className="x-svg"
            onClick={() => closeModal()}
            src={xIcon}
          ></img>{" "}
          <span>Filters</span>
        </div>
      </div>
    </div>
  )
}
