import { Homepage } from './views/Homepage'
import { StayApp } from "./views/stay-app"
import { HostPage } from "./views/host-page";
import { StayDetails } from "./views/stay-details";
import { Login } from './views/login.js'
import { Signup } from './views/signup.js'
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
