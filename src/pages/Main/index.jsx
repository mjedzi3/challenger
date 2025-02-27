import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="h5">
        Navigate to the <strong>Demo</strong> tab in the navbar to explore the features.
      </Typography>
    </Box>
  );
};

export default Home;