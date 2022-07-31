import React from 'react';
import { Typography,Box,Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader  from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px' , xs: '0'}}} p="20px">
      <Typography variant='h4' mb={5}>
        Similar <span style={{ color: '#ff2625', textTransform: 'capitalize'}}>Target</span> Muscle Exercises
      </Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}} mb={5}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar
      data={targetMuscleExercises}/> : <Loader/>}

    </Stack>
    <Typography variant='h4' mb={5}>
    Similar <span style={{ color: '#ff2625', textTransform: 'capitalize'}}>Equipment</span> Muscle Exercises 
    </Typography>
    <Stack direction="row" sx={{p:'2', position:'relative'}}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar
      data={equipmentExercises}/> : <Loader/>}

    </Stack>
    </Box>
  )
}

export default SimilarExercises
