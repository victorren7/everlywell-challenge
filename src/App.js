import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import FiveRecipes from './components/FiveRecipes';
import RecipePage from './components/RecipePage';
import backgroundImg from './assets/everlywell-bg.jpg';
import everlywellLogo from './assets/everlywell-logo.png';


function App() {

  const [randomRecipe, setRandomRecipe] = useState([])
  const [recipeLink, setRecipeLink] = useState()
  const [linkClicked, setLinkClicked] = useState(false)
  // const []

  let recipes = [];

  useEffect(() => {

    for (let i = 0; i < 5; i++) {
      getRandomRecipes()
    }
    setRandomRecipe(recipes)

    return () => console.log('unmounting')

  }, [getRandomRecipes, recipes])


  const getRandomRecipes = async () => {

      await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
          recipes.push(response.data);
        })

  }

  console.log({randomRecipe})

  console.log({ recipes })  


  return (
    <BrowserRouter>
      {linkClicked === false ?
        <div className="App">
          <img className='hero' alt='hero' src={backgroundImg} />
          <img className='logo' alt='hero' src={everlywellLogo} />
          <FiveRecipes
            randomRecipe={randomRecipe}
            setRecipeLink={setRecipeLink}
            recipeLink={recipeLink}
            setLinkClicked={setLinkClicked}
          />
        </div>
        :
        <RecipePage
          recipeLink={recipeLink}
          randomRecipe={randomRecipe}
        />
      }
      <Switch>
        <Route exact path='/' component={FiveRecipes} />
        <Route path='/recipe' component={RecipePage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
