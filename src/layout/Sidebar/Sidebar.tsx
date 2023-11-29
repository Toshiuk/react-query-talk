import { FC, PropsWithChildren } from "react";

import { Link } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
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
        title: "Dashboard",
        Icon: DashboardRoundedIcon,
        path: "/dashboard",
    },
];

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Sheet
                sx={{
                    gap: 1,
                    position: "sticky",
                    minHeight: "100vh",
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
                }}
            >
                {children}
            </Sheet>
        </Box>
    );
};

export default Sidebar;
