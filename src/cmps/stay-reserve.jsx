import React from "react";
import { connect } from "react-redux";
import { orderService } from "../services/order.service";
import { SearchByDate as DatePicker } from "./stay-filter-search-dates";

export class _Reserve extends React.Component {
  state = {
    dates: null,
    isModalOpen: false,
  };

  onSetDates = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    if (startDate.getDate() === endDate.getDate()) return;
    const startDateStamp = startDate.getTime();
    const endDateStamp = endDate.getTime();
    this.setState({
      dates: { endDateStamp, startDateStamp },
      isModalOpen: !this.state.isModalOpen,
    });
  };

  onReserve = async () => {
    const { user, stayId } = this.props;
    const { dates } = this.state;
    if (!user) {
      // navigate to login
      return;
    }
    if (!dates.endDateStamp || !dates.startDateStamp) {
      return;
      // focus on the date picker
    }
    try {
      await orderService.addOrder({
        user,
        stayId,
        startDate: dates.startDateStamp,
        endDate: dates.endDateStamp,
      });
      //navigate to user trips
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { stayPrice } = this.props;
    const { dates, isModalOpen } = this.state;
    return (
      <section className="reserve-container">
        <div className="reserve-modal">
          <h1>
            ${stayPrice} <span className="night-container">night</span>
          </h1>
          <div className="order-datepicker-guest">
            <div
              className="date-picker-modal"
              onClick={() =>
                this.setState({ ...this.state, isModalOpen: !isModalOpen })
              }
            >
              <h2>Choose dates</h2>
              <div
                className="modal-container"
                onClick={(ev) => ev.stopPropagation()}
              >
                {isModalOpen && <DatePicker onSetDates={this.onSetDates} />}
              </div>
            </div>
          </div>
          <h3 className="reserve-btn" onClick={this.onReserve}>
            Reserve
          </h3>
          <h4>You won't be charged yet.</h4>
          <div className="total-container">
            <h3>Total</h3>
            <h3>
              {dates !== null
                ? ((dates.endDateStamp - dates.startDateStamp) / 86400000) *
                stayPrice +
                ""
                : "0"}
              $
            </h3>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userModule.user,
  };
};

const mapDispatchToProps = {};

export const Reserve = connect(mapStateToProps, mapDispatchToProps)(_Reserve);
