import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import IndRecipe from './components/IndRecipe';
import CreateRecipe from './components/CreateRecipe';

function App() {
  const [ showSearchbar, setShowSearchbar ] = useState(false);
  const [ showCreateComp, setShowCreateComp ] = useState(false);

  const handleSearchbar = () => {
    setShowSearchbar(!showSearchbar)
  }
  
  const handleClick = (e) => {
    console.log(e.target)

    if (e.target.className === 'createRecipeBtn' || e.target.className === 'createBtn' || e.target.id === 'cnclCreate') {
      setShowCreateComp(!showCreateComp);
    }
  } 

  console.log(showCreateComp)

  return (
    <div className="container">
      <div className='nav-bar'>
        <div className='mainHeader'>
          <p className='appHeading'>Recipes</p>
          
          {showSearchbar ? 
            <div className='searchbarCntr'>
              <input placeholder='Search Recipe' className='searchbar' />
              <FaSearch className='searchBtn' onClick={handleSearchbar}/>
            </div> 
          : <FaSearch className='searchBtnClsd' onClick={handleSearchbar}/> }
          
        </div>

        <div className='createRecipeBtn' onClick={handleClick}>Create Recipe</div>
        
        { showCreateComp ? <CreateRecipe onClick={handleClick}/> : null }
      </div>

      <div className='indRecipesCntr'>
        <IndRecipe />
      </div>

    </div>
  );
}

export default App;
