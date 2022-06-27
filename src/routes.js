import React from "react";
import { Homepage } from "./views/home-page";
import { StayApp } from "./views/stay-app";
import { HostPage } from "./views/host-page";
import { StayDetails } from "./views/stay-details";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import { Privacy } from "./views/privacy";
import { DashBoard } from "./views/dashboard";
import { UserDashboard } from "./views/user-dashboard";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: "/",
        component: <Homepage />,
    },
    {
        path: "stays",
        component: <StayApp />,
    },
    {
        path: "host",
        component: <HostPage />,
    },
    {
        path: "stay/details/:stayId",
        component: <StayDetails />,
    },

    {
        path: "/login",
        component: <Login />,
    },
    {
        path: "/signup",
        component: <Signup />,
    },
    {
        path: "/privacy",
        component: <Privacy />,
    },
    {
        path: "/dashboard",
        component: <DashBoard />,
    },
    {
        path: "/userdashboard",
        component: <UserDashboard />,
    },
];

export default routes;
