import React from 'react';

const CreateRecipe = (props) => {
    return (
        <div className='createRecipeCntr'>
            <input placeholder='Enter Recipe Name...' className='recipeNameInput' onChange={props.onChange}/>
            
            <div className='addIngrdtCntr'>
                <input placeholder='Add Ingredient...' className='addIngrdtInput' onChange={props.onChange}/>
                <div className='addIngrdtBtn'>Add</div>
            </div>

            <div className='ingrdtsCntr'>
                <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
                <div className='indIngrdtAdd'>Ingredient <p className='removeIngrdtBtn' onClick={props.onClick}>X</p></div>
            </div>

            
            <div className='createCnclBtns'>
                <div className='createBtn' onClick={props.onClick}>Create</div>
                <div className='cancelBtn' id='cnclCreate' onClick={props.onClick}>Cancel</div>
            </div>
        </div>
    );
}

export default CreateRecipe;