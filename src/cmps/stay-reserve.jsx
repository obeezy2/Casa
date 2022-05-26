import { useState } from "react";
import { useSelector } from "react-redux";
// import { orderService } from "../services/order.service";
import { SearchByDate as DatePicker } from "./stay-filter-search-dates";


export const Resevre = ({ stayId, stayPrice, numOfGuest }) => {
  const  user  = useSelector((storeState) => storeState.userModule.user);
  const [dates, setDates] = useState(null);

  const onSetDate = ({ startDate, endDate }) => {
    const startDateStamp = new Date(startDate._d).getTime();
    const endDateStamp = new Date(endDate._d).getTime();
    // setNumOfDays((endDateStamp - startDateStamp) / 86400000);
    setDates({ endDateStamp,startDateStamp });
  };

  const onReserve = async () => {
    // if (!user) {
    //   // navigate to login
    //   return;
    // }
    // if(!dates.endDate||!dates.startDate){
    //   return
    //   // focus on the date picker
    // }
    // const order = {
    //   user,
    //   stayId,
    // };
  };

  return (
    <section className="reserve-container">
      <div className="reserve-modal">
        <h1>{stayPrice}$ night</h1>
        <div className="order-datepicker-guest">
          <DatePicker onSetDate={onSetDate}/>
        </div>
        <h3 className="reserve-btn" onClick={onReserve}>
          Reserve
        </h3>
        <div className="total-container">
          <h3>Total</h3>
          <h3>{dates!==null?((dates.endDate-dates.startDate)/86400000)*stayPrice+'':'0'}$</h3>
        </div>
      </div>
    </section>
  );
};
