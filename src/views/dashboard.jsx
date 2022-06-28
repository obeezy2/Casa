import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { stayService } from "../services/stay.service";
import { orderService } from "../services/order.service";
import { useSelector } from "react-redux";
import {
  socketService,
  SOCKET_EVENT_NEW_ORDER,
} from "../services/socket.service";
import { DashboardData } from "./dashboard-data";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { showUserMsg } from "../services/event-bus.service";
export const DashBoard = () => {
  const { user } = useSelector((storeState) => storeState.userModule);
  const host = {
    hostId: user._id,
  };
  const [selected, setSelected] = useState(1);
  const [hostListings, setHostListings] = useState("");
  const [hostOrders, setNewOrders] = useState("");

  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
  const getStays = async () => {
    try {
      const stays = await stayService.query(host);
      setHostListings(stays);
    } catch {
      throw new Error("Cannot get stays");
    }
  };
  const getOrders = async () => {
    try {
      const orders = await orderService.query(host);
      setNewOrders(orders);
      console.log(orders);
    } catch {
      throw new Error("Cannot get orders");
    }
  };
  const getDate = (date) => {
    var a = new Date(date * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + " " + month;
    return time;
  };

  const declineRequest = async (order) => {
    order.status = "Declined";
    await orderService.updateOrder(order);
    getOrders();
    showUserMsg("Order Declined")

  };

  const approveRequest = async (order) => {
    order.status = "Approved";
    await orderService.updateOrder(order);
    getOrders();
    showUserMsg("Order Approved")

  };

  useEffect(() => {
    socketService.on(SOCKET_EVENT_NEW_ORDER, getOrders);
    getStays();
    getOrders();
    return () => {
      socketService.off(SOCKET_EVENT_NEW_ORDER, getOrders);
    };
  }, []);

  return (
    <main className="main-hostpage">
      <section className="dashboard">
        <div className="hostdash">
          <div className="side-bar">
            <ul className="sidebar-list">
              {DashboardData.map((val, key) => {
                return (
                  <li
                    onClick={handleClick(key + 1)}
                    className={
                      selected === key + 1 ? "subject active" : "subject"
                    }
                  >
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="data">
          <div className={selected === 1 ? "settings active" : "settings"}>
            <div>Property Name</div>
            <div>Number of reviews</div>
            <div>Property Price per night</div>
            <div>Property Room type</div>
            <div>Orders</div>
          </div>
          <div
            className={
              selected === 2 ? "ordersettings active" : "ordersettings"
            }
          >
            <div>Property Name</div>
            <div>Ordered by</div>
            <div>Dates</div>
            <div>Guests</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          <div className={selected === 1 ? "listings active" : "listings"}>
            {hostListings &&
              hostListings.map((listing, idx) => {
                console.log(idx);

                return (
                  <div className="listing">
                    <div className="name">
                      <Link to={`/stay/details/${listing._id}`}>
                        {listing.name}
                      </Link>
                    </div>
                    <div className="reviews">{listing.reviews.length}</div>
                    <div className="price">{listing.price}</div>
                    <div className="roomType">{listing.roomType}</div>
                  </div>
                );
              })}
          </div>
          <div className={selected === 2 ? "orders active" : "orders"}>
            {hostOrders &&
              hostOrders.map((order) => {
                console.log(order);

                return (
                  <div className="order">
                    <div className="listingsname">{order.stay.name}</div>
                    <div className="orderby">{order.user.fullname}</div>
                    <div className="dates">
                      <span>{getDate(order.startDate)}</span>{" "}
                      <DoubleArrowIcon /> <span> {getDate(order.endDate)}</span>{" "}
                    </div>
                    <div className="Guests">{order.guestCount}</div>
                    <div className="pending">{order.status}</div>

                    <div className="actions">
                      <button
                        onClick={() => approveRequest(order)}
                        className="host-btn"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => declineRequest(order)}
                        className="host-btn"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={selected === 3 ? "edit active" : "edit"}></div>
        </div>
      </section>
    </main>
  );
};
