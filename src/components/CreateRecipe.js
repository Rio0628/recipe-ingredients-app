import React from 'react';

const CreateRecipe = (props) => {
   let crrntIngredientsCntr = [];

   if (props.crrntCreateIngrdnts) {
       for (let i = 0; i < props.crrntCreateIngrdnts.length; i++) {
            crrntIngredientsCntr.push( <div className='indIngrdtAdd'>{props.crrntCreateIngrdnts[i]}<p className='removeIngrdtBtn' id='removeCreateIngrdt' ingredient={props.crrntCreateIngrdnts} onClick={props.onClick}>X</p></div> );
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