import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

import './FiveRecipes.scss';

const FiveRecipes = ({ randomRecipe, setRecipeLink, setLinkClicked }) => {

  // const mounted = useRef(true)
  // useEffect(() => {
  //  console.log('mounted', mounted)
  // }, [])

  const handleClick = (event) => {
    setRecipeLink(event.target.innerText)
    setLinkClicked(true)
  }

  console.log({ randomRecipe })
  return (
    <div className='foodContainer'>
      {map(randomRecipe, (value, index) => {
        const food = value.meals[0]
        return (
          <div className = 'recipe-container' key = { index } >
            { console.log(value.meals[0]) }
            <Link to = { '/recipe/' + food.strMeal } >
              <h1
                className='title'
                onClick={handleClick}
                key={index}
              >
                {food.strMeal}
              </h1>
          </Link>
                <img className='recipe-img' alt='food' src={food.strMealThumb} />
          </div>
            
          )
      })}

    </div>
  )
}

export default FiveRecipes;
