import React from 'react'
import "./App.css";
//below import is for route between pages
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FitnessCalculator from './pages/FitnessCalculator';

const App = () => {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path="/fitnessCalculator" element={<FitnessCalculator/>} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App
