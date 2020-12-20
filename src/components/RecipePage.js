import React from 'react';
import { isEmpty, map } from 'lodash';

const RecipePage = ({recipeLink, randomRecipe}) => {

  return (
    <div>
      {map(randomRecipe, (recipe, index) => {
       
        const food = recipe.meals[0]

        if (recipeLink === food.strMeal) {
      
          return (
              //tried mapping but since each ingredient key had a different names I couln't map
            <div key={index}>
              <img alt='food' src={food.strMealThumb }/>
              <h1>{food.strMeal}</h1>
              <ul>
                {!isEmpty(food.strIngredient1) && <li>{food.strIngredient1}</li>}
                {!isEmpty(food.strIngredient2) && <li>{food.strIngredient2}</li>}
                {!isEmpty(food.strIngredient3) && <li>{food.strIngredient3}</li>}
                {!isEmpty(food.strIngredient4) && <li>{food.strIngredient4}</li>}
                {!isEmpty(food.strIngredient5) && <li>{food.strIngredient5}</li>}
                {!isEmpty(food.strIngredient6) && <li>{food.strIngredient6}</li>}
                {!isEmpty(food.strIngredient7) && <li>{food.strIngredient7}</li>}
                {!isEmpty(food.strIngredient8) && <li>{food.strIngredient8}</li>}
                {!isEmpty(food.strIngredient9) && <li>{food.strIngredient9}</li>}
                {!isEmpty(food.strIngredient10) && <li>{food.strIngredient10}</li>}
                {!isEmpty(food.strIngredient11) && <li>{food.strIngredient11}</li>}
                {!isEmpty(food.strIngredient12) && <li>{food.strIngredient12}</li>}
                {!isEmpty(food.strIngredient13) && <li>{food.strIngredient13}</li>}
                {!isEmpty(food.strIngredient14) && <li>{food.strIngredient14}</li>}
                {!isEmpty(food.strIngredient15) && <li>{food.strIngredient15}</li>}
                {!isEmpty(food.strIngredient16) && <li>{food.strIngredient16}</li>}
                {!isEmpty(food.strIngredient17) && <li>{food.strIngredient17}</li>}
                {!isEmpty(food.strIngredient18) && <li>{food.strIngredient18}</li>}
                {!isEmpty(food.strIngredient19) && <li>{food.strIngredient19}</li>}
                {!isEmpty(food.strIngredient20) && <li>{food.strIngredien20}</li>}
              </ul>
              <h3>Instructions</h3>
              <p>{food.strInstructions}</p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default RecipePage;