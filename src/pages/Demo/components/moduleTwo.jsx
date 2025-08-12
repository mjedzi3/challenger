import React from 'react';
import useHealth from '../../../hooks/Health/useHealth';
import { Box, Typography, CircularProgress  } from '@mui/material';
import HeroImage from '../../../components/HeroImage';

const ModuleTwo = () => {
  const {data, loading, error} = useHealth();
  const module2 = data?.[1]?.module2;

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
          <HeroImage
          img={module2.imageUrl}
          title={module2.title}
          subtext={module2.subtitle}
          button={{ text: module2.linkTitle, link: module2.linkUrl }}
          />
        </Box>
      ) : (<Typography> No data available for Module 2 </Typography>)}
    </>
);
};

export default ModuleTwo;
