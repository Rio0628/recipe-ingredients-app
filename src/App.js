import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function App() {
  

  return (
    <div className="container">
      <div className='nav-bar'>
        <div className='mainHeader'>
          <p className='appHeading'>Recipes</p>
          {/* <FaSearch className='searchBtnClsd'/> */}

          <div className='searchbarCntr'>
            <input placeholder='Search Recipe' className='searchbar' />
            <FaSearch className='searchBtn'/>
          </div>
        </div>

        <div className='createRecipeBtn'>Create Recipe</div>
      </div>

      <h1>Hello Wrold</h1>
    </div>
  );
}

export default App;
