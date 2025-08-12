import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import Routes from './routes/routes'; // Import the routes

const App = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Router>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes />
        </Box>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;