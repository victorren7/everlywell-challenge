import axios from 'axios';

export async function getRandomRecipes() { 
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
      
      return response.data;
    }) 
}