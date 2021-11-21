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
                    <p className='indIngrdt'>Ingredient</p>
                    <p className='indIngrdt'>Ingredient</p>
                    <p className='indIngrdt'>Ingredient</p>
                    <p className='indIngrdt'>Ingredient</p>
                    <p className='indIngrdt'>Ingredient</p>
                </div>

                <div className='editBtn'>Edit</div>
                <div className='removeBtn'>Remove</div>
           </div>

           <div className='indRecipeEdit'>
                <p className='recipeName'>Recipe</p>
        
                <div className='addIngrdtCntr'>
                    <input placeholder='Add Ingredient...' className='addIngrdtInput'/>
                    <div className='addIngrdtBtn'>Add</div>
                </div>

                <div className='ingrdtsCntr'>
                    <div className='indIngrdtAdd'>Ingredient <p>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p>X</p></div>
                </div>

                <div className='confirmBtn'>Confirm</div>
                <div className='cancelBtn'>Cancel</div>
           </div>
        </div>
    )
}

export default IndRecipe; 