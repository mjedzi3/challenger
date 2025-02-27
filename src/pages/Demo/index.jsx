import React from 'react';
import useHealth from '../../hooks/Health/useHealth';
import { Box, Typography } from '@mui/material';
import ModuleOne from './components/moduleOne';
import ModuleTwo from './components/moduleTwo';


const Demo = () => {
  const { data, load, error } = useHealth();

  console.log(data?.[0]?.module1);

  return (
    <Box>
      {/* <Typography variant="h4" gutterBottom>
        This is the Demo Page!
      </Typography> */}

      <Box mb={4}>
        <ModuleTwo />
      </Box>

      <Box mb={4}>
        <ModuleOne />
      </Box>
    </Box>
  );
};

export default Demo;