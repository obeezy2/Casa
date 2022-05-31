import React from "react";
import { useDispatch } from "react-redux";


export function FilterIcons({onChangeFilter}) {
    const dispatch=useDispatch()
//   const imgs = [];
  const filterNames = [
    "Design",
    "Beach",
    "Amazing Pools",
    "Islands",
    "National Parks",
    "Cabins",
    // "OMG!",
    "Camping",
    "Tiny Homes",
    "Lakefront",
    "Arctic",
    "Amazing views",
    "Desert",
  ];
//   for (var i = 1; i < 13; i++) {
//     imgs.push(i);
//   }

const handleSetFilter=(label)=>{
    onChangeFilter({label})
}

  return (
    <div className={`icon-filters`}>
      {filterNames.map((filter) => {
        return (
          <div className="filter-whole" onClick={()=>handleSetFilter(filter)}>
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
