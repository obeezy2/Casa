import React from 'react'
import { DashboardData } from './dashboarddata'

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { stayService } from "../services/stay.service"
import { orderService } from "../services/order.service"
import { useSelector } from "react-redux"
import { StayEdit } from "../views/stay-edit"
export const UserDashboard = () => {
    const { user } = useSelector((storeState) => storeState.userModule)
    const host = {
        hostId: user._id,
    }
    const [selected, setSelected] = useState(1)
    const [hostListings, setHostListings] = useState("")
    const [hostOrders, setNewOrders] = useState("")
    console.log("orders", hostOrders)
    console.log("listings", hostListings)

    const handleClick = (divNum) => () => {
        setSelected(divNum)
    }
    const getStays = async () => {
        try {
            const stays = await stayService.query(host)
            setHostListings(stays)
        } catch {
            throw new Error("Cannot get stays")
        }
    }
    const getOrders = async () => {
        try {
            const orders = await orderService.query(host)
            setNewOrders(orders)
        } catch {
            throw new Error("Cannot get orders")
        }
    }
    const getDate = (date) => {
        var a = new Date(date * 1000)
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
        ]
        var month = months[a.getMonth()]
        var date = a.getDate()
        var time = date + " " + month
        return time
    }

    const declineRequest = async (order) => {
        order.status = "Declined"
        await orderService.updateOrder(order)
        getOrders()
    }

    const approveRequest = async (order) => {
        order.status = "Approved"
        await orderService.updateOrder(order)
        getOrders()
    }

    useEffect(() => {
        getStays()
        getOrders()
    }, [])


    return (
        <div className='userdash'>
            <div className='side-bar'>
                <ul className='sidebar-list'>
                    {DashboardData.map((val, key) => {

                        return (
                            <li onClick={handleClick(key + 1)}
                                className={selected === key + 1 ? "subject active" : "subject"}
                            >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                            </li>

                        )

                    })}

                </ul>

            </div>
        </div>
    )


}