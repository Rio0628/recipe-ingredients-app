import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import IndRecipe from './components/IndRecipe';
import CreateRecipe from './components/CreateRecipe';

function App() {
  

  return (
    <div className="container">
      <div className='nav-bar'>
        <div className='mainHeader'>
          <p className='appHeading'>Recipes</p>
          <FaSearch className='searchBtnClsd'/>

          {/* <div className='searchbarCntr'>
            <input placeholder='Search Recipe' className='searchbar' />
            <FaSearch className='searchBtn'/>
          </div> */}
        </div>

        <div className='createRecipeBtn'>Create Recipe</div>
      </div>

      <div className='indRecipesCntr'>
        <IndRecipe />
        <IndRecipe />
      </div>
    </div>
  );
}

export default App;
