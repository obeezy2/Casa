import React from "react"
import { connect } from "react-redux"

import { orderService } from "../services/order.service"
import { showUserMsg } from "../services/event-bus.service"
import { SearchByDate as DatePicker } from "./stay-filter-search-dates"
import { AddGuestsFilter } from "./stay-search-addGuest-filter"

export class _Reserve extends React.Component {
  state = {
    dates: null,
    isDateModalOpen: false,
    isGuestModalOpen: false,
    guestCount: 0,
    price: this.props.stayPrice,
  }

  componentDidMount() {
    let btn = document.querySelector(".mouse-cursor-gradient-tracking")
    btn.addEventListener("mousemove", (e) => {
      let rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      btn.style.setProperty("--x", x + "px")
      btn.style.setProperty("--y", y + "px")
    })
  }
  componentWillUnmount() {
    let btn = document.querySelector(".mouse-cursor-gradient-tracking")
    btn.removeEventListener("mousemove", (e) => {
      let rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      btn.style.setProperty("--x", x + "px")
      btn.style.setProperty("--y", y + "px")
    })
  }

  setGuestCount = (guestCount) => {
    this.setState({ ...this.state, guestCount })
  }

  onSetDates = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr)
    const endDate = new Date(endDateStr)
    if (startDate.getDate() === endDate.getDate()) return
    const startDateStamp = startDate.getTime()
    const endDateStamp = endDate.getTime()
    this.setState({
      dates: { endDateStamp, startDateStamp },
      isDateModalOpen: !this.state.isDateModalOpen,
    })
  }

  onReserve = async () => {
    const { user, stayId, hostId } = this.props
    const { dates, price } = this.state
    if (!user) {
      showUserMsg("Please login", "not-logged-in")
      return
    }
    if (!dates.endDateStamp || !dates.startDateStamp) {
      showUserMsg("Please select dates")
      return
      // focus on the date picker
    }
    try {
      await orderService.addOrder({
        price: ((dates.endDateStamp - dates.startDateStamp) / 86400000) * price,
        user,
        hostId,
        stayId,
        startDate: dates.startDateStamp,
        endDate: dates.endDateStamp,
      })
      showUserMsg("Inquiry Sent")

      //navigate to user trips
    } catch (err) {
      if (err === "not availble") showUserMsg("No available dates")
    }
  }

  render() {
    // void function () {

    //   let btn = document.querySelector('.reserve-btn');
    //   btn.addEventListener('mousemove', e => {
    //     let rect = e.target.getBoundingClientRect();
    //     let x = e.clientX - rect.left;
    //     let y = e.clientY - rect.top;
    //     btn.style.setProperty('--x', x + 'px');
    //     btn.style.setProperty('--y', y + 'px');
    //     console.log(x, y)
    //   });
    // }();
    const { dates, isDateModalOpen, isGuestModalOpen, price } = this.state
    return (
      <section className="reserve-container">
        <div className="reserve-modal">
          <h1>
            ${price} <span className="night-container">night</span>
          </h1>
          <div
            className={`order-datepicker-guest ${
              isDateModalOpen || isGuestModalOpen ? "active" : ""
            }`}
          >
            <div
              className="date-picker-modal"
              onClick={() =>
                this.setState({
                  ...this.state,
                  isDateModalOpen: !isDateModalOpen,
                })
              }
            >
              <h3 className="start-date">
                {dates
                  ? new Date(dates.startDateStamp).toLocaleDateString()
                  : "Check in"}
              </h3>
              <h3 className="end-date">
                {dates
                  ? new Date(dates.endDateStamp).toLocaleDateString()
                  : "Check out"}
              </h3>
              <div
                className="modal-container"
                onClick={(ev) => ev.stopPropagation()}
              >
                {isDateModalOpen && <DatePicker onSetDates={this.onSetDates} />}
              </div>
            </div>
            <h3 className="guests-title" onClick={() => {
                    this.setState({
                      ...this.state,
                      isGuestModalOpen: !isGuestModalOpen,
                    })
                  }}>Guests</h3>
            {isGuestModalOpen && (
              <div className="guest-modal-container">
                <AddGuestsFilter
                  setGuests={this.setGuestCount}
                  maxGuests={this.props.numOfGuest}
                />
                <h3
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      isGuestModalOpen: !isGuestModalOpen,
                    })
                  }}
                >
                  Close
                </h3>
              </div>
            )}
          </div>
          <h3
            className="reserve-btn mouse-cursor-gradient-tracking"
            onClick={this.onReserve}
          >
            Reserve
          </h3>
          <h4>You won't be charged yet.</h4>
          <div className="total-container">
            <h3>Total</h3>
            <h3>
              $
              {dates !== null
                ? ((dates.endDateStamp - dates.startDateStamp) / 86400000) *
                    price +
                  ""
                : "0"}
            </h3>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userModule.user,
  }
}

const mapDispatchToProps = {}

export const Reserve = connect(mapStateToProps, mapDispatchToProps)(_Reserve)
