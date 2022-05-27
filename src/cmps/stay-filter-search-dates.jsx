import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export class SearchByDate extends React.Component {
  state = {
    startDate: null,
    endDate: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const {endDate}=this.state
    const {startDate}=this.state
    const {onSetDate}=this.props
    if (endDate!==null && startDate!==null && onSetDate!==undefined) {
      if(prevState.endDate!==endDate||prevState.startDate!==startDate)
      this.props.onSetDate(this.state);
    }
  }

  render() {
    return (
      <div>
        <h2>choose dates</h2>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
      </div>
    );
  }
}
