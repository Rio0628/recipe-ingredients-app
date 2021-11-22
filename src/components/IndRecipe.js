import React from 'react';

const IndRecipe = (props) => {
    let indIngrdts = [], indIngrdtsEdit = [];

    for (let i = 0; i < props.recipe.ingredients.length; i++) {
        indIngrdts.push( <p className='indIngrdt' key={'indIngrdnt ' + i}>{props.recipe.ingredients[i]}</p> );
    }

    for (let i = 0; i < props.recipe.ingredients.length; i++) {
        indIngrdtsEdit.push( <div className='indIngrdtAdd' key={'indIngrdntEdit ' + i}>{props.recipe.ingredients[i]}<p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div> );
    }

    return (
        <div className='indRecipeCntr' onClick={props.onClick}>
           <div className='indRecipeClsd' recipe={props.recipe._id}>
                <p className='recipeName'>Recipe</p>

                <div className='editBtn' recipe={props.recipe._id} onClick={props.onClick}>Edit</div>
                <div className='removeBtn' recipe={props.recipe._id} onClick={props.onClick}>Remove</div>
           </div>
            
           <div className='indRecipeOpen' recipe={props.recipe._id}>
                <p className='recipeName'>Recipe</p>

                <p className='ingrdtsHeading'>Ingredients</p>

                <div className='ingrdtsCntr'>
                   {indIngrdts}
                </div>

                <div className='editBtn' onClick={props.onClick} recipe={props.recipe._id}>Edit</div>
                <div className='removeBtn' onClick={props.onClick} recipe={props.recipe._id}>Remove</div>
           </div>

           <div className='indRecipeEdit'>
                <p className='recipeName'>Recipe</p>
        
                <div className='addIngrdtCntr'>
                    <input placeholder='Add Ingredient...' className='addIngrdtInput' onChange={props.onChange}/>
                    <div className='addIngrdtBtn' onClick={props.onClick}>Add</div>
                </div>

                <div className='ingrdtsCntr'>
                    {indIngrdtsEdit}
                </div>

                <div className='confirmBtn' recipe={props.recipe._id} onClick={props.onClick}>Confirm</div>
                <div className='cancelBtn' onClick={props.onClick}>Cancel</div>
           </div>
        </div>
    )
}

export default IndRecipe; 