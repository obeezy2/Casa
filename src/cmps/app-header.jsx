import { useEffect, useState } from "react";
import { isElement } from "react-dom/test-utils";
import { NavLink as Link, useLocation } from "react-router-dom";
import React from "react";
import { StayFilter } from "./stay-filter.jsx";

import logoImg from "../assets/img/logo/new-logo.svg";
import logoImg2 from "../assets/img/logo/whitelogo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export function AppHeader() {
    const [headerClass,setHeaderClass]=useState('')
    const [color, setColor] = useState("white");
    const [bgColor, setBgColor] = useState("black");
    const [img, setImg] = useState(logoImg2);
    const [logoColor, setLogoColor] = useState("white");
    let location = useLocation();

    const changeColors = (ev) => {

        if (ev.path[1].scrollY === 0) {
            setHeaderClass('home-page home-page-layout')
            setImg(logoImg2);
        }
        if (ev.path[1].scrollY > 1) {
            setHeaderClass('home-page-layout')
            setImg(logoImg);
        }
    };

    useEffect(() => {
        if (location.pathname === "/") {
            window.addEventListener("scroll", changeColors);
            setHeaderClass('home-page home-page-layout')
            setImg(logoImg2);
        }else if(location.pathname.includes('/stay/details')){
            setHeaderClass('details-page-layout')
            setImg(logoImg);
        }
        else {
            setHeaderClass('general-layout')
            setImg(logoImg);
        }
        return () => {
            window.removeEventListener("scroll", changeColors);
            setHeaderClass('')
            setImg(logoImg);
        }

    }, [location.pathname]);

    return (
        <header
            className={`app-header ${headerClass}`}
        >
            <div className="search-bar ">
                {" "}
                <StayFilter />
            </div>

            <Link className="explore" to="/stays">
                Explore
            </Link>
            <Link className="host" to="/host">
                Become a Host
            </Link>
            <Link className="user" to="/login">
                <AccountCircleIcon />
            </Link>
            <div className="logo">
                <img className="img-logo" src={`${img}`}></img>
                <Link to="/">
                    {" "}
                    <h1  className="text">
                        casa{" "}
                    </h1>
                </Link>
            </div>
        </header>
    );
}
