import { useEffect, useState } from "react";
import { orderService } from "../services/order.service";

export const Resevre = ({ stayId,stayPrice, numOfGuest }) => {
  const [numOfDays, setNumOfDays] = useState(1);
  const[bookedDates,setBookedDates]=useState(null)
  useEffect(()=>{
      loadBookDates()
  },[])

  const loadBookDates= async ()=>{
    try {
        const dates=await orderService.getBookedDates(stayId)
        setBookedDates(dates) 
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <section className="reserve-container">
      <div className="reserve-modal">
        <h1>{stayPrice}$ night</h1>
        <div className="order-datepicker-guest">date-guest grid</div>
        <h3 className="reserve-btn">Reserve</h3>
        <div className="total-container">
          <h3>Total</h3>
          <h3>{numOfDays * stayPrice}$</h3>
        </div>
      </div>
    </section>
  );
};
