import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/FetchData';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  
  const[exerciseDetail, setExerciseDetail] = useState({});

  const[exerciseVideos, setExerciseVideos] = useState([]);
  
  const[targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  
  const[equipmentExercises, setEquipmentExercises] = useState([]);
  
  const { id } = useParams();

  //below useEffect has callback function which will be called 
  //whenever the ID change [id]=is dependency array
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchExercisesData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);

        const targetExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetExerciseData);

        const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setEquipmentExercises(equipmentExerciseData);
    }
     fetchExercisesData();
  }, [id]);
  
  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }} style={{ margin: '0 20px' }}>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>

  )
}

export default ExerciseDetail
