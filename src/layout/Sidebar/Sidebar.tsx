import { FC, PropsWithChildren } from "react";

import { Link, useLocation } from "react-router-dom";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import RuleIcon from "@mui/icons-material/Rule";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Box, Button, List, ListItem, ListItemButton, ListItemContent, Sheet, Typography } from "@mui/joy";

import { ColorSchemeToggle } from "@/components";

type NavItem = {
    title: string;
    Icon: FC;
    path: string;
};

const navItems: NavItem[] = [
    {
        title: "Home",
        Icon: HomeRoundedIcon,
        path: "/",
    },
    {
        title: "Sad Dashboard",
        Icon: SentimentVeryDissatisfiedIcon,
        path: "/saddashboard",
    },
    {
        title: "Dashboard",
        Icon: SentimentSatisfiedAltIcon,
        path: "/dashboard",
    },
    {
        title: "Request examples",
        Icon: SyncAltIcon,
        path: "/requestExamples",
    },
    {
        title: "Item list",
        Icon: ListOutlinedIcon,
        path: "/list",
    },
    {
        title: "Optimistic updates",
        Icon: ListOutlinedIcon,
        path: "/listOptimistic",
    },
    {
        title: "Pagination",
        Icon: AutoStoriesIcon,
        path: "/pagination",
    },
    {
        title: "Infinite Query",
        Icon: AllInclusiveIcon,
        path: "/infiniteQuery",
    },
    {
        title: "Status",
        Icon: RuleIcon,
        path: "/status",
    },
];

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();

    return (
        <Box display="flex">
            <Sheet
                sx={{
                    gap: 1,
                    position: "sticky",
                    height: "100vh",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    borderRight: "1px solid",
                    borderColor: "divider",
                }}
            >
                <List
                    sx={{
                        gap: 1,
                        "--ListItem-radius": (theme) => theme.vars.radius.sm,
                    }}
                >
                    {navItems.map(({ title, Icon, path }) => (
                        <ListItem key={path}>
                            <ListItemButton component={Link} to={path} selected={location.pathname === path}>
                                <Icon />
                                <ListItemContent>
                                    <Typography level="title-sm">{title}</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Button variant="plain" component={Link} to="/presentation">
                    Presentation
                </Button>
                <ColorSchemeToggle />
            </Sheet>
            <Sheet
                sx={{
                    width: "100%",
                    p: 6,
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    height: "100vh",
                }}
            >
                {children}
            </Sheet>
        </Box>
    );
};

export default Sidebar;
