import { FC, PropsWithChildren } from "react";

import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ListOutlineddIcon from "@mui/icons-material/ListOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
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
        title: "Item list",
        Icon: ListOutlineddIcon,
        path: "/list",
    },
];

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
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
                            <ListItemButton component={Link} to={path}>
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
