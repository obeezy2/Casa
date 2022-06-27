import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import AnalyticsIcon from "@mui/icons-material/Analytics";
export const DashboardData = [
    {
        title: "Your Listings",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "Incoming Orders",
        icon: <MoveToInboxIcon />,
        link: "/mailbox",
    },
    {
        title: "Analytics",
        icon: <AnalyticsIcon />,
        link: "/analytics",
    },
];
