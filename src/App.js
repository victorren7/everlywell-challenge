import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import FiveRecipes from './components/FiveRecipes';
import RecipePage from './components/RecipePage';
import backgroundImg from './assets/everlywell-bg.jpg';
import everlywellLogo from './assets/everlywell-logo.png';


function App() {

  const [randomRecipe, setRandomRecipe] = useState([]);
  const [recipeLink, setRecipeLink] = useState();
  const [linkClicked, setLinkClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  
  useEffect(() => {
    let recipes = [];
    
    const getRandomRecipes = async () => {
      setIsLoading(true);
      await axios.get
        ('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
          recipes.push(response.data);
          setRandomRecipe(recipes)
          setIsLoading(false);
        })
    };

    const asyncFunc = async () => {
      for (let i = 0; i < 5; i++) {
        await getRandomRecipes()
      };
    };

    asyncFunc();

  }, [])

  return (
    <BrowserRouter>
      {linkClicked === false ?
        <div className="App">
          <img className='hero' alt='hero' src={backgroundImg} />
          <img className='logo' alt='hero' src={everlywellLogo} />
          {isLoading ?
            <div>Loading</div>
            :
          
          <FiveRecipes
            randomRecipe={randomRecipe}
            setRecipeLink={setRecipeLink}
            recipeLink={recipeLink}
            setLinkClicked={setLinkClicked}
          />
          }
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
};

export default App;
