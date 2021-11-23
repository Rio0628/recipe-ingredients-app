import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import IndRecipe from './components/IndRecipe';
import CreateRecipe from './components/CreateRecipe';
import api from './api';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAPIloading: false,
      showSearchbar: false,
      showCreateComp: false,
      currentRecipeIsOpen: false,
      currentRecipeIsEditOn: false,
      recipes: [],
      currentRecipe: { recipe: '', open: false, editOn: false },
    }
  }

  async apiLoading () {
    await this.setState({ isAPIloading: true });
  
    if ( this.state.isAPIloading === true ) {
      await api.getAllRecipes().then(recipes => this.setState({ recipes: recipes.data.data } )).catch(err => this.setState({recipes: ''}) ) 
      this.setState({ isAPIloading: false });
    }
  }

  componentDidMount () {
    this.apiLoading();
  }
  
  render () {
    let indRecipeCntr = [];

    
    const handleChange = (e) => {
      console.log(e.target)

      if (e.target.className === 'searchbar') {
        this.setState({ searchInput: e.target.value });
      }

      if (e.target.className === 'recipeNameInput') {
        this.setState({ newRecipeName: e.target.value });
      }

      if (e.target.className === 'addIngrdtInput') {
        this.setState({ newIngredient: e.target.value });
      }
    }
    
    const handleSearchbar = () => {
      this.setState({ showSearchbar: !this.state.showSearchbar });
    }
    
    const handleClick = async (e) => {
      console.log(e.target)

      if (e.target.className === 'createRecipeBtn' || e.target.className === 'createBtn' || e.target.id === 'cnclCreate') {
        this.setState({ showCreateComp: !this.state.showCreateComp });
      }

      if (e.target.className === 'indRecipeClsd' || e.target.className === 'indRecipeOpen') {
        this.setState({ currentRecipeID: e.target.getAttribute('recipe') });
        this.setState({ currentRecipeIsOpen: true });
      }

      if (e.target.className === 'indRecipeOpen') {
        this.setState({ currentRecipeIsOpen: false });
      }

      if (e.target.className === 'editBtn') {
        await this.setState({ currentRecipeID: e.target.getAttribute('recipe') });
        
        const recipe = this.state.recipes.filter(recipe => recipe._id === this.state.currentRecipeID);
      
        this.setState({ currentEditIngrdts: recipe[0].ingredients });
        
        this.setState({ currentRecipeIsEditOn: true })
        this.setState({ currentRecipeIsOpen: false });
      }

      if (e.target.className === 'addIngrdtBtn') {
        this.setState(prevState => ({ currentEditIngrdts: [...prevState.currentEditIngrdts, this.state.newIngredient]}))
        
      }

      if (e.target.className === 'removeIngrdtBtn') {
        const updatedList = this.state.currentEditIngrdts.filter(ingredient => ingredient !== e.target.getAttribute('ingredient'))
        this.setState({ currentEditIngrdts: updatedList });
      }

      if (e.target.className === 'confirmBtn') {
        // getRecipeById
        const id = e.target.getAttribute('recipe');
        const name = e.target.getAttribute('recipeName');
        const ingredients = this.state.currentEditIngrdts
        const payload = {name: name, ingredients: ingredients}

        await api.updateRecipeById(id, payload).then(res => alert('Recipe Updated Successfully'))
        this.apiLoading();

        this.setState({ currentRecipeIsEditOn: false});
        this.setState({ currentRecipeIsOpen: true });
      }

      if (e.target.id === 'cancelEdit') {
        this.setState({ currentRecipeIsEditOn: false });
        this.setState({ currentRecipeIsOpen: true });
      }

      if (e.target.className === 'removeBtn') {
        await this.setState({ currentRecipeId: e.target.getAttribute('recipe')});
        // console.log(e.target.getAttribute('recipe'))
        await api.deleteRecipeById(this.state.currentRecipeId);

        this.apiLoading();
      }
    } 

    for (let i = 0; i < this.state.recipes.length; i++) {
      indRecipeCntr.push( <IndRecipe currentRecipeID={this.state.currentRecipeID} currentRecipeIsOpen={this.state.currentRecipeIsOpen} currentRecipeIsEditOn={this.state.currentRecipeIsEditOn} currentEditIngrdts={this.state.currentEditIngrdts} recipe={this.state.recipes[i]} onClick={handleClick} onChange={handleChange} key={'recipe ' + i}/> )
    }

    console.log(this.state.currentEditIngrdts)
    console.log(this.state.recipes)
    // console.log(indRecipeCntr)

    return (
      <div className="container">
        <div className='nav-bar'>
          <div className='mainHeader'>
            <p className='appHeading'>Recipes</p>
            
            {this.state.showSearchbar ? 
              <div className='searchbarCntr'>
                <input placeholder='Search Recipe' className='searchbar' onChange={handleChange}/>
                <FaSearch className='searchBtn' onClick={handleSearchbar}/>
              </div> 
            : <FaSearch className='searchBtnClsd' onClick={handleSearchbar}/> }
            
          </div>

          <div className='createRecipeBtn' onClick={handleClick}>Create Recipe</div>
          
          {this.state.showCreateComp ? <CreateRecipe onClick={handleClick} onChange={handleChange}/> : null }
        </div>

        <div className='indRecipesCntr'>
          {indRecipeCntr}
        </div>

      </div>
    );
  }
}

export default App;
