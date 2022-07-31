export const exerciseOptions = {
  method: 'GET',
  //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,//'ad1239e518mshd7884167f75af45p116ca8jsn0b4579a7d86a',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fitnessCalculatorOptions = {
  method: 'GET',
  //url: 'https://fitness-calculator.p.rapidapi.com/bmi',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};


export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}