import React,{useState} from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export function SearchByDate(){
  const [date,setDate] = useState({startDate:null,endDate:null})
  return <div>
  <h2>choose dates</h2>
 <DateRangePicker
  startDate={date.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={date.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => setDate({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={date.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => setDate({ focusedInput })} // PropTypes.func.isRequired,
 />
  </div>
}
