import React from "react";
import { useDispatch } from "react-redux";
import filterSvg from '../assets/img/svgs/2.svg'
import { useState } from "react";
import xIcon from '../assets/img/svgs/x.svg'
import { stayService } from "../services/stay.service";

export function FilterIcons({ onChangeFilter }) {
  const dispatch = useDispatch()
  const [modalClass, setModalClass] = useState('filter-modal-container hidden')
  const filterNames = stayService.labels


  const handleSetFilter = (label) => {
    onChangeFilter({ label })
  }

  const openModal = () => {
    setModalClass('filter-modal-container')
  }
  const closeModal = () => {
    setModalClass('filter-modal-container hidden')
  }

  // useEffect(() => {
  //   const header = document.querySelector('.main-header');
  //   const nav = document.querySelector('.main-header-nav');

  //   const headerObserver = new IntersectionObserver(onHeaderObserved, {
  //     rootMargin: "-91px 0px 0px",
  //   });

  //   headerObserver.observe(header);

  //   function onHeaderObserved(entries) {
  //     entries.forEach((entry) => {

  //       console.log('helllooo')
  //       nav.style.position = entry.isIntersecting ? 'static' : 'fixed';
  //     });
  //   }
  // }, []); // <-- empty array means 'run once'

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
      <div onClick={() => openModal()} className="filter-icon"><img className="filter-img" src={filterSvg}></img>Filters</div>

      <div className={modalClass}>

        <div className="section-filter"> <img className="x-svg" onClick={() => closeModal()} src={xIcon}></img> <span>Filters</span></div>




      </div>

    </div>
  );
}
