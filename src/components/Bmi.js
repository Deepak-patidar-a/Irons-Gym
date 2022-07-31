import React, { useState } from 'react'
import { Typography,Box,Stack,TextField,Button } from '@mui/material';
import { fetchData, fitnessCalculatorOptions } from '../utils/FetchData';
import fitnessImage from '../assets/images/figma.jpg';


const Bmi = () => {

    const[ age, setAge] = useState("");
    const[ height, setHeight] = useState("");
    const[ heightInches, setHeightInches] = useState("");
    const[ weight, setWeight] = useState("") ;
    const[calcu,setCalcu]= useState({});

    const heigthInCm =  height * (30.48) + heightInches * (2.54);

  const calculateBmi = async() => {
    try{
        const data= await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${heigthInCm}`, fitnessCalculatorOptions);

    
    const {bmi,health,healthy_bmi_range} = data.data;
    const my=[bmi,health,healthy_bmi_range];
    //console.log(my);
    // console.log(health);
    // console.log(bmi.healthy_bmi_range);
    setCalcu(my);
    // const {bmi,health,}= calcu;

  }catch(error){
    console.log(error);
}
  };

//   useEffect(() => {
//     calculateBmi();
//   },);

    
  return (
    <Stack  gap="60px" sx={{flexDirection : {lg: 'row'}, p: '20px 20px 20px 40px',
    alignItems:'center',mb:"20px"}}>
        <Stack sx={{ gap: {lg:'35px', xs:"20px"}}}>
            <span style={{ fontWeight: 600 ,fontSize: '0.999rem'}} >Advanced Calculator</span>
            <Typography variant='h4' textTransform="capitalize" style={{ fontWeight: 400 }}>Calculate Your BMI</Typography>
            <Box position="relative" mb="20px">
            <span>Your Height:</span>
            <Stack gap="25px" sx={{flexDirection : {lg: 'row'}, pb:'30px', pt:'10px',
            alignItems:'center'}}>
        
        
          <TextField sx={{ input: {
            fontWeight: '700', border: 'none', borderRadius: '4px'}, width: { lg: '250px', xs: '200px'},
          backgroundColor: '#fff', borderRadius: '40px'}}
           height="76px"
          label="Feet" type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
          <TextField sx={{ input: {
            fontWeight: '700', border: 'none', borderRadius: '4px'}, width: { lg: '250px', xs: '200px'},
          backgroundColor: '#fff', borderRadius: '40px'}}
           height="76px"
          label="Inches" type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value )}/>
          </Stack>
          
          
          <Stack gap="25px" sx={{flexDirection : {lg: 'row'}, pb:"100px",
            alignItems:'center'}}>
        <Stack>
        <span>Your Weight:</span> 
          <TextField sx={{ input: {
            fontWeight: '700', border: 'none', borderRadius: '4px'}, width: { lg: '250px', xs: '200px'},
          backgroundColor: '#fff', borderRadius: '40px',mt:'10px'}}
           height="76px"
          label="Kg" type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </Stack>
          <Stack>
          <span>Your Age:</span>
          <TextField sx={{ input: {
            fontWeight: '700', border: 'none', borderRadius: '4px'}, width: { lg: '250px', xs: '200px'},
          backgroundColor: '#fff', borderRadius: '40px',mt:'10px'}}
           height="76px"
          label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </Stack>
          </Stack>
          
          <Stack spacing={7} direction="row">
          <Button className='search-btn' sx={{ bgcolor: '#FF2625',
          color: '#fff', textTransform: 'none', width:{
            lg: '175px', xs: '80px'},
            fontSize:{ lg: '20px' ,xs: '14px'}, height: '56px',
          }} onClick={calculateBmi}> Calculate Now </Button>
          <Box component="div" sx={{ display: 'inline' }} pt="5px">
          <Typography style={{ fontWeight: 600,borderRadius: 2,fontSize: '0.875rem' }}>BMI:{`   `}{calcu[0]}</Typography>
          <Typography style={{ fontWeight: 600,borderRadius: 2,fontSize: '0.875rem'}}>Health:{``}{calcu[1]}</Typography>
          </Box>
          
          </Stack>
          </Box>
        </Stack>
        <img src={fitnessImage} alt="fitness" className='fitnessImage'/>
    </Stack>
  )
}

export default Bmi
