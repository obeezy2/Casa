import { useEffect, useState } from "react"
import { NavLink as Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"

import { StaySearch } from "./stay-search.jsx"
import { setFilterBy } from "../store/action/stay.action"
import logoImg from "../assets/img/logo/new-logo.svg"
import logoImg2 from "../assets/img/logo/whitelogo.png"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { userService } from "../services/user.service"
import {
  socketService,
  SOCKET_EVENT_NEW_ORDER,
} from "../services/socket.service"
import { showUserMsg } from "../services/event-bus.service"

export function AppHeader() {
  const user = userService.getLoggedinUser()
  console.log(user)
  const [headerClass, setHeaderClass] = useState("")
  const [img, setImg] = useState(logoImg2)
  let location = useLocation()
  const dispatch = useDispatch()

  const changeColors = (ev) => {
    if (ev.path[1].scrollY === 0) {
      setHeaderClass("home-page home-page-layout")
      setImg(logoImg2)
    }
    if (ev.path[1].scrollY > 1) {
      setHeaderClass("home-page-layout")
      setImg(logoImg)
    }
  }

  const emitNewOrder = () => {
    showUserMsg("New order in your dashboard!")
    const newUser = userService.setNotification(true)
  }

  useEffect(() => {
    if (user) {
      socketService.login(user._id)
    }

    socketService.on(SOCKET_EVENT_NEW_ORDER, emitNewOrder)

    if (location.pathname === "/") {
      window.addEventListener("scroll", changeColors)
      setHeaderClass("home-page home-page-layout")
      setImg(logoImg2)
    } else 
    if (location.pathname.includes("/stay/details")) {
      setHeaderClass("details-page-layout")
      setImg(logoImg)
    } else {
      setHeaderClass("general-layout")
      setImg(logoImg)
    }
    return () => {
      window.removeEventListener("scroll", changeColors)
      setHeaderClass("")
      setImg(logoImg)
    }
  }, [location.pathname])

  return (
    <header className={`app-header ${headerClass}`}>
      <div className="search-bar ">
        {" "}
        <StaySearch />
      </div>

      <Link
        className="explore"
        to="/stays"
        onClick={() => {
          dispatch(setFilterBy(null))
        }}
      >
        Explore
      </Link>
      {user ? (
        <Link className="host" to="/dashboard">
          Host Dashboard
        </Link>
      ) : (
        <Link className="host" to="/host">
          Become a host
        </Link>
      )}

      {!user ? (
        <Link className="user" to="/login">
          <AccountCircleIcon />{" "}
        </Link>
      ) : (
        <Link className="user" to="/userdashboard">
          {user?.notification && <div className="notification"></div>}
          <img className="user-pic" src={user.imgUrl}></img>{" "}
        </Link>
      )}

      <div className="logo">
        <img className="img-logo" src={img}></img>
        <Link to="/">
          {" "}
          <h1 className="text">casa </h1>
        </Link>
      </div>
    </header>
  )
}
