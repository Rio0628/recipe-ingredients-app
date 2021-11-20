import React from 'react';

const IndRecipe = () => {
    return (
        <div className='indRecipeCntr'>
           <div className='indRecipeClsd'>
                <p className='recipeName'>Recipe</p>

                <div className='editBtn'>Edit</div>
                <div className='removeBtn'>Remove</div>
           </div>
            
           <div className='indRecipeOpen'>
                <p className='recipeName'>Recipe</p>

                <p className='ingrdtsHeading'>Ingredients</p>

                <div className='ingrdtsCntr'>
                    <p className='indIngrdt'>Ingredient</p>
                </div>

                <div className='editBtn'>Edit</div>
                <div className='removeBtn'>Remove</div>
           </div>
        </div>
    )
}

export default IndRecipe; 