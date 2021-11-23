import React from 'react';

const IndRecipe = (props) => {
    let indIngrdts = [], indIngrdtsEdit = [], isEditOn = false, isOpen = false;

    for (let i = 0; i < props.recipe.ingredients.length; i++) {
        indIngrdts.push( <p className='indIngrdt' key={'indIngrdnt ' + i}>{props.recipe.ingredients[i]}</p> );
    }

    if (props.currentEditIngrdts) {
        for (let i = 0; i < props.currentEditIngrdts.length; i++) {
            indIngrdtsEdit.push( <div className='indIngrdtAdd' key={'indIngrdntEdit ' + i} >{props.currentEditIngrdts[i]}<p className='removeIngrdtBtn' id='removeIngrdtEdit' ingredient={props.currentEditIngrdts[i]} onClick={props.onClick}>X</p></div> );
        }
    }
    
 

    if (props.recipe._id === props.currentRecipeID) {
        isEditOn = props.currentRecipeIsEditOn;
        isOpen = props.currentRecipeIsOpen;
    }

    // console.log(props.recipe)
    // console.log(props.currentRecipeID)
    // console.log(props.currentRecipeIsOpen)
    // console.log(props.currentRecipeIsEditOn)

    return (
        <div className='indRecipeCntr'>
           
           {!isOpen && !isEditOn ? 
                <div className='indRecipeClsd' recipe={props.recipe._id} onClick={props.onClick}>
                    <p className='recipeName'>{props.recipe.name}</p>

                    <div className='editBtn' recipe={props.recipe._id} onClick={props.onClick}>Edit</div>
                    <div className='removeBtn' recipe={props.recipe._id} onClick={props.onClick}>Remove</div>
                </div>
            : null }

            {isOpen ? 
                <div className='indRecipeOpen' recipe={props.recipe._id} onClick={props.onClick}>
                    <p className='recipeName'>{props.recipe.name}</p>

                    <p className='ingrdtsHeading'>Ingredients</p>

                    <div className='ingrdtsCntr'>
                        {indIngrdts}
                    </div>

                    <div className='editBtn' onClick={props.onClick} recipe={props.recipe._id}>Edit</div>
                    <div className='removeBtn' onClick={props.onClick} recipe={props.recipe._id}>Remove</div>
                </div>
            : null }

            {isEditOn && !isOpen ? 
                <div className='indRecipeEdit'>
                    <p className='recipeName'>{props.recipe.name}</p>
        
                    <div className='addIngrdtCntr'>
                        <input placeholder='Add Ingredient...' className='addIngrdtInput' onChange={props.onChange}/>
                        <div className='addIngrdtBtn' id='addIngrdtBtn' onClick={props.onClick}>Add</div>
                    </div>

                    <div className='ingrdtsCntr'>
                        {indIngrdtsEdit}
                    </div>

                    <div className='confirmBtn' recipeName={props.recipe.name}  recipe={props.recipe._id} onClick={props.onClick}>Confirm</div>
                    <div className='cancelBtn' id='cancelEdit' onClick={props.onClick}>Cancel</div>
                </div>
            : null }
           
            
           

           
        </div>
    )
}

export default IndRecipe; 