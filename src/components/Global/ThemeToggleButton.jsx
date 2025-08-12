import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "../../context/ThemeContext";
import { useTheme } from "@mui/material/styles";

const ThemeToggleButton = () => {
  const theme = useTheme();
  const { toggleTheme } = useThemeMode();

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggleButton;
