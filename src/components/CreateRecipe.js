import React from 'react';

const CreateRecipe = () => {
    return (
        <div className='createRecipeCntr'>
            <input placeholder='Enter Recipe Name...' className='recipeNameInput'/>
            
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

            
            <div className='createCnclBtns'>
                <div className='createBtn'>Create</div>
                <div className='cancelBtn'>Cancel</div>
            </div>
        </div>
    );
}

export default CreateRecipe;