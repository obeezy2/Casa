import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { stayService } from "../services/stay.service";
import { orderService } from "../services/order.service";
import { useSelector } from "react-redux";
import { StayEdit } from '../views/stay-edit'
export const DashBoard = () => {

    const { user } = useSelector(storeState => storeState.userModule)
    const host = {
        hostId: user._id
    };
    const [selected, setSelected] = useState(1);
    const [hostListings, setHostListings] = useState("");
    const [hostOrders, setNewOrders] = useState("");
    console.log('orders', hostOrders)
    console.log('listings', hostListings)

    const handleClick = (divNum) => () => {
        setSelected(divNum);
    };
    const getStays = async () => {
        try {
            const stays = await stayService.query(host)
            setHostListings(stays);
        } catch {
            throw new Error("Cannot get stays");
        }
    };
    const getOrders = async () => {
        try {
            const orders = await orderService.query(host);
            setNewOrders(orders);
        } catch {
            throw new Error("Cannot get orders");
        }
    };
    const getDate = (date) => {
        var a = new Date(date * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month
        return time;
    }

    const declineRequest = async (order) => {
        order.status = 'Declined'
        await orderService.updateOrder(order)
        getOrders();

    }

    const approveRequest = async (order) => {
        order.status = 'Approved'
        await orderService.updateOrder(order)
        getOrders();

    }


    useEffect(() => {
        getStays();
        getOrders();

    }, []);

    return (
        <main className="main-hostpage">
            <section className="dashboard">
                <div className="subjects">
                    <div
                        onClick={handleClick(1)}
                        className={selected == 1 ? "subject active" : "subject"}
                    >
                        <span>Listings</span>
                    </div>
                    <div
                        onClick={handleClick(2)}
                        className={selected == 2 ? "subject active" : "subject"}
                    >
                        <span> Orders</span>
                    </div>
                    <div
                        onClick={handleClick(3)}
                        className={selected == 3 ? "subject active" : "subject"}
                    >
                        <span>Add a new listing</span>
                    </div>
                </div>

                <div className="data">
                    <div className={selected == 1 ? "settings active" : "settings"}>
                        <div>Property Name</div>
                        <div>Number of reviews</div>
                        <div>Property Price per night</div>
                        <div>Property Room type</div>
                        <div>Orders</div>
                    </div>
                    <div className={selected == 2 ? "ordersettings active" : "ordersettings"}>
                        <div>Property Name</div>
                        <div>Ordered by</div>
                        <div>From Date</div>
                        <div>To Date</div>
                        <div>Status</div>
                        <div>Actions</div>

                    </div>
                    <div className={selected == 1 ? "listings active" : "listings"}>
                        {hostListings &&
                            hostListings.map((listing, idx) => {
                                console.log(idx)
                                let count = 0;
                                if (hostOrders[idx].stay.name === listing.name) count++
                                console.log('host-order name, listing name', hostOrders[idx].stay.name, listing.name)
                                return (

                                    <div className="listing">
                                        <div className="name">{listing.name}</div>
                                        <div className="reviews">{listing.reviews.length}</div>
                                        <div className="price">{listing.price}</div>
                                        <div className="roomType">{listing.roomType}</div>
                                        <div className="orders">{count}</div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className={selected == 2 ? "orders active" : "orders"}>
                        {hostOrders &&
                            hostOrders.map((order) => {
                                console.log(order)

                                return (
                                    < div className="order" >
                                        <div className="listingsname">{order.stay.name}</div>
                                        <div className="orderby">{order.user.username}</div>
                                        <div className="dates">{getDate(order.startDate)}</div>
                                        <div className="dates">{getDate(order.endDate)}</div>
                                        <div className="pending">
                                            {order.status}</div>
                                        <div className="actions">
                                            <button onClick={() => approveRequest(order)} className="host-btn">Approve</button>
                                            <button onClick={() => declineRequest(order)} className="host-btn">Decline</button>

                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className={selected == 3 ? "edit active" : "edit"}>
                        <StayEdit />
                    </div>
                </div>
            </section>
        </main >
    );
};
