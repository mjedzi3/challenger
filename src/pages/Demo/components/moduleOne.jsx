import React from 'react';
import useHealth from '../../../hooks/Health/useHealth';
import { Box, CircularProgress, Button, Grid, Typography, Link } from '@mui/material';
import CardContainer from '../../../components/CardContainer';

const ModuleOne = () => {
  const {data, loading, error} = useHealth();
  const module1 = data?.[0]?.module1;

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <>
      {data?.[0] ? (
      <Box textAlign="center">
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Grid 
          container 
          spacing={3} 
          justifyContent="center" 
          alignItems="center"
          maxWidth="lg"
        >
          {module1.subContent.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
              <CardContainer img={item.imageUrl} title={item.title} description={item.description} />
            </Grid>
          ))}
        </Grid>
        </Box>
        {/* Link at the bottom */}
        <Button component={Link} href={module1.linkUrl} variant="contained" color="primary" sx={{ mt: 2 }}>
          {module1.linkTitle}
        </Button>
      </Box>
      ) : (
        <Typography> No data available for Module 1 </Typography>
      )}
    </>
);
};

export default ModuleOne;
