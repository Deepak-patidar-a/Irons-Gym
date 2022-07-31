import React from 'react';
import { Box } from '@mui/material';
import Bmi from '../components/Bmi';


const FitnessCalculator = () => {


  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }} style={{ margin: '0 20px' }}>
        <Bmi/>
    </Box>
  )
}

export default FitnessCalculator
