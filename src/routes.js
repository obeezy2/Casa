import React from 'react'
import { Homepage } from './views/Homepage'
import { StayApp } from "./views/stay-app"
import { HostPage } from "./views/host-page";
import { StayDetails } from "./views/stay-details";
import { StayEdit } from "./views/stay-edit";
import { Login } from './views/login'
import { Signup } from './views/signup'
import { Privacy } from './cmps/privacy';

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <Homepage />
    },
    {
        path: 'stays',
        component: <StayApp />
    },
    {
        path: 'host',
        component: <HostPage />
    },
    {
        path: 'stay/details/:stayId',
        component: <StayDetails />
    },
    {
        path: 'stay/edit',
        component: <StayEdit />
    },
    {
        path: '/login',
        component: <Login />,
    },
    {
        path: '/signup',
        component: <Signup />,
    },
    {
        path: '/privacy',
        component: <Privacy />,
    },

]

export default routes
