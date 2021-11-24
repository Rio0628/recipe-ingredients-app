import React from 'react';

const CreateRecipe = (props) => {
   let crrntIngredientsCntr = [];

    // For statement to show ingredients of the create view of a certain recipe only if there are ingredients within the recipe 
   if (props.crrntCreateIngrdnts) {
       for (let i = 0; i < props.crrntCreateIngrdnts.length; i++) {
            crrntIngredientsCntr.push( <div className='indIngrdtAdd' key={'createIngredient ' + i}>{props.crrntCreateIngrdnts[i]}<p className='removeIngrdtBtn' id='removeCreateIngrdt' ingredient={props.crrntCreateIngrdnts[i]} onClick={props.onClick}>X</p></div> );
       }
   }
   
    return (
        <div className='createRecipeCntr'>
            <input placeholder='Enter Recipe Name...' className='recipeNameInput' onChange={props.onChange}/>
            
            <div className='addIngrdtCntr'>
                <input placeholder='Add Ingredient...' className='addIngrdtInput' onChange={props.onChange}/>
                <div className='addIngrdtBtn' id='addIngrdtCreate' onClick={props.onClick}>Add</div>
            </div>

            <div className='ingrdtsCntr'>
                {crrntIngredientsCntr}
            </div>
            
            <div className='createCnclBtns'>
                <div className='createBtn' onClick={props.onClick}>Create</div>
                <div className='cancelBtn' id='cnclCreate' onClick={props.onClick}>Cancel</div>
            </div>
        </div>
    );
}

export default CreateRecipe;