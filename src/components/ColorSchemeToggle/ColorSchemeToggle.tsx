import { FC } from "react";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";

const ColorSchemeToggle: FC = () => {
    const { mode, setMode } = useColorScheme();

    const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

    return (
        <IconButton size="sm" variant="outlined" color="neutral" onClick={toggleMode}>
            {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeIcon />}
        </IconButton>
    );
};

export default ColorSchemeToggle;
