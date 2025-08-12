import React, { createContext, useMemo, useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
        mode,
        ...(mode === "light"
            ? {
                background: { default: "#f5f5f5", paper: "#ffffff" },
                text: { primary: "#000000" }
            }
            : {
                background: { default: "#121212", paper: "#1e1e1e" },
                text: { primary: "#ffffff" }
            }),
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
