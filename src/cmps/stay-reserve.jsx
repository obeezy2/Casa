import React from "react";
import { connect } from "react-redux";
import { orderService } from "../services/order.service";
import { SearchByDate as DatePicker } from "./stay-filter-search-dates";

export class _Reserve extends React.Component {
  state = {
    dates: null,
  };

  onSetDate = ({ startDate, endDate }) => {
    const startDateStamp = new Date(startDate._d).getTime();
    const endDateStamp = new Date(endDate._d).getTime();
    // setNumOfDays((endDateStamp - startDateStamp) / 86400000);
    this.setState({ dates: { endDateStamp, startDateStamp } });
  };

  onReserve = async () => {
    const { user, stayId } = this.props;
    const { dates } = this.state;
    debugger;
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
    const { dates } = this.state;
    return (
      <section className="reserve-container">
        <div className="reserve-modal">
          <h1>${stayPrice} <span className="night-container">night</span></h1>
          <div className="order-datepicker-guest">
            <DatePicker onSetDate={this.onSetDate} />
          </div>
          <h3 className="reserve-btn" onClick={this.onReserve}>
            Reserve
          </h3>
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
