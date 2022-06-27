import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { stayService } from "../services/stay.service";
import { orderService } from "../services/order.service";
import { useSelector } from "react-redux";
import {
    socketService,
    SOCKET_EVENT_NEW_ORDER,
} from "../services/socket.service";
import { userService } from "../services/user.service";
import { userData } from "./userdashboard-data";

export const UserDashboard = () => {
    const { user } = useSelector((storeState) => storeState.userModule);

    const [selected, setSelected] = useState(1);
    const [hostOrders, setNewOrders] = useState("");

    const handleClick = (divNum) => () => {
        setSelected(divNum);
    };

    const getOrders = async () => {
        try {
            const orders = await orderService.query();
            orders.filter((order) => {
                return user._id === order.user._id;
            });
            setNewOrders(orders);
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

    useEffect(() => {
        socketService.on(SOCKET_EVENT_NEW_ORDER, getOrders);
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
                            {userData.map((val, key) => {
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
                    <div
                        className={
                            selected === 1 ? "ordersettings active" : "ordersettings"
                        }
                    >
                        <div>Property Name</div>
                        <div>From Date</div>
                        <div>To Date</div>
                        <div>Status</div>
                    </div>

                    <div className={selected === 1 ? "orders active" : "orders"}>
                        {hostOrders &&
                            hostOrders.map((order) => {
                                console.log(order);

                                return (
                                    <div className="order">
                                        <div className="listingsname">{order.stay.name}</div>
                                        <div className="dates">{getDate(order.startDate)}</div>
                                        <div className="dates">{getDate(order.endDate)}</div>
                                        <div className="status">{order.status}</div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className={selected === 2 ? "edit active" : "edit"}></div>
                </div>
            </section>
        </main>
    );
};
