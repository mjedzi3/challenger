import React from "react";
import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import ThemeToggleButton from "./ThemeToggleButton";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.grey[200],
        color: theme.palette.text.primary,
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          flexWrap="wrap"
        >
          <Typography variant="body1" fontWeight="bold">
            © {new Date().getFullYear()} Demo Site | Made by: Michael Jedziniak
          </Typography>

          {/* Dark Mode Toggle */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">Toggle Theme</Typography>
            <ThemeToggleButton />
          </Stack>
        </Stack>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Bottom Section */}
        <Typography variant="caption" display="block" textAlign="center">
          Built with React & Material UI
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
