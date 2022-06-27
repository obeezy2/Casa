import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { SearchByDate } from "./stay-filter-search-dates"
import { AddGuestsFilter } from "./stay-search-addGuest-filter"
import { setFilterBy } from "../store/action/stay.action.js"

import SearchIcon from "@mui/icons-material/Search"

export const StaySearch = () => {
  const [isSearchExpanded, setSearchExpand] = useState(false)
  const [currExpand, setExpand] = useState('')
  const [searchBy, setSearchBy] = useState({})
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let location = useLocation()
  const { filterBy } = useSelector((storeState) => storeState.stayModule)


  const onSetSearchLocation = (ev) => {
    ev.preventDefault()
    setSearchBy({ ...searchBy, stayLocation: ev.target.value })
  }

  const onQuickSearchByLocation = (stayLocation) => {
    dispatch(setFilterBy({ ...searchBy, stayLocation }))
    navigate("/stays")

  }

  const onSearch = (ev = null) => {
    if (ev) ev.preventDefault()
    dispatch(setFilterBy(searchBy))
    navigate("/stays")
  }

  useEffect(() => {
    setSearchExpand(false)
    if (location.pathname === "/") {
      setSearchBy({})
      document.querySelector(".main-container").addEventListener("click", setSearchExpand(false))
    }
    return () => {
      document.removeEventListener("click", setSearchExpand())
    }
  }, [location])

  return (
    <section className="app-filter-container">
      <div className="app-filter">
        <div
          className="filter-btn-container filter-btn-location"
          onClick={() => {
            setSearchExpand(!isSearchExpanded)
            setExpand("Anywhere")
          }}
        >
          <div className="filter-btn">
            {currExpand === "Anywhere" && isSearchExpanded ? (
              <div>
                Where
                <form onSubmit={onSearch}>
                  <input
                    className="destination-input"
                    type="text"
                    onClick={(e) => e.stopPropagation()}
                    onChange={(event) => {
                      onSetSearchLocation(event)
                    }}
                    placeholder="Search Your Destinations"
                  />
                </form>
              </div>
            ) : (
              searchBy.stayLocation ||
              (searchBy.region && (
                <div>
                  {" "}
                  Where <p>{searchBy.stayLocation || searchBy.region}</p>{" "}
                </div>
              )) ||
              (location.pathname !== '/') && filterBy?.stayLocation || "Anywhere"

            )}
          </div>
        </div>
        <span className="filter-span"></span>
        <div
          className="filter-btn-container filter-btn-dates"
          onClick={() => {
            setSearchExpand(!isSearchExpanded)
            setExpand("Any week")
            console.log(currExpand)
          }}
        >
          <div className="filter-btn">
            {currExpand === "Any week" && isSearchExpanded ? (
              <div>
                <p>When</p>
                <p>Any week</p>
              </div>
            ) : (
              (searchBy.startDate && searchBy.endDate) && (
                <div className="check-in-container">
                  <div className=" check">
                    {" "}
                    <p>Check in</p>{" "}
                    {new Date(searchBy.startDate).toLocaleDateString()}
                  </div>
                  <div className=" check">
                    <p>Check out</p>
                    {new Date(searchBy.endDate).toLocaleDateString()}{" "}
                  </div>{" "}
                </div>
              )
              || `Any week`
            )}
          </div>
        </div>
        <span className="filter-span"></span>
        <div className="filter-btn-container filter-btn-guests">
          <div
            className="filter-btn"
            onClick={() => {
              setSearchExpand(!isSearchExpanded)
              setExpand("Add guests")
            }}
          >
            {currExpand === "Add guests" && isSearchExpanded ? (
              <div>
                <p>Who</p>
                <p>Add guests</p>
              </div>
            ) : (
              (searchBy.guestsNumber && (
                <p>{searchBy.guestsNumber} guests</p>
              )) || <p className="add-guests-paragraph">Add guests</p>
            )}
          </div>
          <div className="search">
            <div className="search-icon" onClick={() => onSearch()}>
              <SearchIcon className="search-icon-svg" />
            </div>
          </div>
        </div>
      </div>
      {isSearchExpanded && (
        <div className="filter-expand">
          {currExpand === "Anywhere" && (
            <div>
              <SearchByDestination
                onQuickSearchByLocation={onQuickSearchByLocation}
              />
            </div>
          )}
          {currExpand === "Any week" && (
            <div>
              <SearchByDate
                onSetDates={(start, end) =>
                  setSearchBy({
                    ...searchBy,
                    dates: {
                      startDate: start.getTime(),
                      endDate: end.getTime(),
                    },
                  })
                }
              />
            </div>
          )}
          {currExpand === "Add guests" && (
            <div>
              <AddGuestsFilter
                setGuests={(guests) =>
                  setSearchBy({ ...searchBy, guestsCount: guests })
                }
                maxGuests={Infinity}
              />
            </div>
          )}
        </div>
      )}
    </section>
  )
}





function SearchByDestination(props) {
  const [region, setRegion] = useState("")
  useEffect(() => {
    if (region === "") return
    props.onQuickSearchByLocation(region)
  }, [region])
  return (
    <div className="destination-search-container">
      <div className="regions-container">
        <Destination region={"Spain"} setRegion={setRegion} />
        <Destination region={"United States"} setRegion={setRegion} />
        <Destination region={"Canada"} setRegion={setRegion} />
        <Destination region={"Hong Kong"} setRegion={setRegion} />
        <Destination region={"Brazil"} setRegion={setRegion} />
        <Destination region={"Portugal"} setRegion={setRegion} />
      </div>
    </div>
  )
}
function Destination(props) {
  return (
    <div
      className="region-image-container"
      onClick={() => props.setRegion(props.region)}
    >
      <img
        src={require(`../assets/img/filter/${props.region}.png`)}
        alt=""
        className="region-image"
      />
      <p>{props.region}</p>
    </div>
  )
}
