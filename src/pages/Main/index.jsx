import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="h5">
        Navigate to the <strong>Demo</strong> tab in the navbar to explore the features.
      </Typography>
      <Typography variant="h6" mt={4} gutterBottom>
        New Features:
      </Typography>
      <List
        sx={{ 
          maxWidth: 400, 
          margin: '0 auto', 
          textAlign: 'left' 
        }}
      >
        <ListItem>
          <ListItemText 
            primary="Dark Mode" 
            secondary="Toggle between light and dark themes for the entire site." 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Draggable Elements" 
            secondary="Rearrange cards by dragging and dropping them to customize your view." 
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Footer Component"
            secondary="Includes the Dark Mode toggle and provides additional information."
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Home;