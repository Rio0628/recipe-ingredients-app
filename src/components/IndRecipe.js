import React from 'react';

const IndRecipe = (props) => {
    return (
        <div className='indRecipeCntr'>
           <div className='indRecipeClsd'>
                <p className='recipeName'>Recipe</p>

                <div className='editBtn' onClick={props.onClick}>Edit</div>
                <div className='removeBtn' onClick={props.onClick}>Remove</div>
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

                <div className='editBtn' onClick={props.onClick}>Edit</div>
                <div className='removeBtn' onClick={props.onClick}>Remove</div>
           </div>

           <div className='indRecipeEdit'>
                <p className='recipeName'>Recipe</p>
        
                <div className='addIngrdtCntr'>
                    <input placeholder='Add Ingredient...' className='addIngrdtInput' onChange={props.onChange}/>
                    <div className='addIngrdtBtn' onClick={props.onClick}>Add</div>
                </div>

                <div className='ingrdtsCntr'>
                    <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                    <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                </div>

                <div className='confirmBtn' onClick={props.onClick}>Confirm</div>
                <div className='cancelBtn' onClick={props.onClick}>Cancel</div>
           </div>
        </div>
    )
}

export default IndRecipe; 