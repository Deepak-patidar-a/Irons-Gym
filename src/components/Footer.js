import React from 'react';
import { Typography,Box,Stack } from '@mui/material';
import Logo from '../assets/images/Logo-2.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{flexDirection : {lg: 'row'},
    alignItems:'center'}} justifyContent="center" px="40px" pt="24px">
       <img src={Logo} rel="icon" type="image/x-icon" alt="logo" style={{ width: '80px', height: '60px' }} /> 
      <Typography variant="h6" sx={{ fontSize: { lg: '30px', xs: '20px' } }} fontWeight='700' fontStyle='italic' style={{ color: '#ff2625', textTransform: 'capitalize'}} mt="20px" pb="20px" pl="0">Irons Gym</Typography>
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="30px" textAlign="center" pb="10px" fontStyle='italic'>Made with ❤️ by Deepak</Typography>
    <Typography textAlign="center" pb="10px"  fontStyle='italic'>@Copyright2022</Typography>
  </Box>
  )
}

export default Footer
