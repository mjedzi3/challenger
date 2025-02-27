import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

/**
 * Navbar Component
 * ----------------
 * This component provides a navigation bar at the top of the application.
 * It includes links to the Home and Demo pages using React Router.
 *
 * Features:
 * - Uses Material-UI's AppBar and Toolbar for styling.
 * - Displays the website title on the left.
 * - Provides navigation buttons to switch between pages.
 * - Stays fixed at the top using the "sticky" position.
 *
 * Usage:
 * Simply include <Navbar /> at the top level of your application to enable navigation.
 */
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Challenge Website
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/demo" sx={{ ml: 5 }}>
          Demo
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;