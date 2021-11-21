import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import IndRecipe from './components/IndRecipe';
import CreateRecipe from './components/CreateRecipe';

function App() {
  const [ currentRecipe, setCurrentRecipe ] = useState({ recipe: '', open: false, editOn: false })
  const [ showSearchbar, setShowSearchbar ] = useState(false);
  const [ showCreateComp, setShowCreateComp ] = useState(false);
  const [ searchInput, setSearchInput ] = useState('');
  const [ newRecipeName, setNewRecipeName ] = useState('');
  const [ newIngredient, setNewIngredient ] = useState('');
  const [ crntRecipeIngrdnts, setCrntRecipeIngrdnts ] = useState();

  const indRecipeCntr = [];
    
  const handleChange = (e) => {
    console.log(e.target)

    if (e.target.className === 'searchbar') {
      setSearchInput(e.target.value);
    }

    if (e.target.className === 'recipeNameInput') {
      setNewRecipeName(e.target.value);
    }

    if (e.target.className === 'addIngrdtInput') {
      setNewIngredient(e.target.value);
    }
  }
  
  const handleSearchbar = () => {
    setShowSearchbar(!showSearchbar)
  }
  
  const handleClick = (e) => {
    console.log(e.target)

    if (e.target.className === 'createRecipeBtn' || e.target.className === 'createBtn' || e.target.id === 'cnclCreate') {
      setShowCreateComp(!showCreateComp);
    }
  } 

  for (let i = 0; i < 2; i++) {
    indRecipeCntr.push( <IndRecipe currentRecipe={currentRecipe} number={i} onClick={handleClick} key={'recipe ' + i}/> )
  }

  console.log(currentRecipe)

  return (
    <div className="container">
      <div className='nav-bar'>
        <div className='mainHeader'>
          <p className='appHeading'>Recipes</p>
          
          {showSearchbar ? 
            <div className='searchbarCntr'>
              <input placeholder='Search Recipe' className='searchbar' onChange={handleChange}/>
              <FaSearch className='searchBtn' onClick={handleSearchbar}/>
            </div> 
          : <FaSearch className='searchBtnClsd' onClick={handleSearchbar}/> }
          
        </div>

        <div className='createRecipeBtn' onClick={handleClick}>Create Recipe</div>
        
        { showCreateComp ? <CreateRecipe onClick={handleClick} onChange={handleChange}/> : null }
      </div>

      <div className='indRecipesCntr'>
        {indRecipeCntr}
      </div>

    </div>
  );
}

export default App;
