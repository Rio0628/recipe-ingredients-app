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
      crrntCreateIngrdnts: [],
      recipes: [],
      isSearchOn: false,
    }
  }

  async apiLoading () {
    // Method to load all recipes of the database
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
      // Handle the changes within input fields and place them in their respective states 

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
      // Takes care of showing the searchbar Container
      this.setState({ showSearchbar: true });
    }

    const searchRecipe = () => {
      // Main function for searchBtn where it will filter all recipes that have the input of searchInput state
      const searchResult = this.state.recipes.filter(recipe => recipe.name.toLowerCase().search(this.state.searchInput) !== -1 );
      this.setState({ recipes: searchResult });
    
      this.setState({ isSearchOn: true });
      this.setState({ showSearchbar: false });
    }
    
    const handleClick = async (e) => {
    
      if (e.target.className === 'createRecipeBtn' || e.target.className === 'createBtn' || e.target.id === 'cnclCreate') {
        // Brings the createRecipe comp to view
        this.setState({ showCreateComp: !this.state.showCreateComp });
      }

      if (e.target.className === 'indRecipeClsd' || e.target.className === 'indRecipeOpen') {
        // Set the clicked recipe to open and gives the recipe's id value to the currentRecipeID state 
        this.setState({ currentRecipeID: e.target.getAttribute('recipe') });
        this.setState({ currentRecipeIsOpen: true });
      }

      if (e.target.className === 'indRecipeOpen') {
        // Sets the clicked recipe to its closed view
        this.setState({ currentRecipeIsOpen: false });
      }

      if (e.target.className === 'editBtn') {
        // Opens up the edit view of a certain recipe and gathers the ingredients of said recipe for the user to edit 
        await this.setState({ currentRecipeID: e.target.getAttribute('recipe') });
        const recipe = this.state.recipes.filter(recipe => recipe._id === this.state.currentRecipeID);
      
        this.setState({ currentEditIngrdts: recipe[0].ingredients });
        this.setState({ currentRecipeIsEditOn: true })
        this.setState({ currentRecipeIsOpen: false });
      }

      if (e.target.id === 'addIngrdtBtn') {
        // Adds a new ingredient into the current ingredients state and the current ingredients for a recipe
        this.setState(prevState => ({ currentEditIngrdts: [...prevState.currentEditIngrdts, this.state.newIngredient]}))
        
      }

      if (e.target.id === 'removeIngrdtEdit') {
        // Removes a certain ingredient from the recipe that is being edited
        const updatedList = this.state.currentEditIngrdts.filter(ingredient => ingredient !== e.target.getAttribute('ingredient'))
        this.setState({ currentEditIngrdts: updatedList });
      }

      if (e.target.className === 'confirmBtn') {
        // Gathers all of the changes of the edited recipe and updates that certain recipe on the database by the id 
        const id = e.target.getAttribute('recipe');
        const name = e.target.getAttribute('recipeName');
        const ingredients = this.state.currentEditIngrdts
        const payload = {name: name, ingredients: ingredients}

        await api.updateRecipeById(id, payload).then(res => alert(`Recipe Updated Successfully`))
        this.apiLoading();
        this.setState({ currentRecipeIsEditOn: false});
        this.setState({ currentRecipeIsOpen: true });
      }

      if (e.target.id === 'cancelEdit') {
        // Return the certain recipe from the edit view to the open view
        this.setState({ currentRecipeIsEditOn: false });
        this.setState({ currentRecipeIsOpen: true });
      }

      if (e.target.className === 'removeBtn') {
        // Removes a certain recipe from the database
        await this.setState({ currentRecipeId: e.target.getAttribute('recipe')});
        await api.deleteRecipeById(this.state.currentRecipeId);

        this.apiLoading();
      }

      if (e.target.id === 'addIngrdtCreate') {
        // Adds a new ingredient into the ind ingredient container from the Create Recipe component
        // If there is no value within the newIngredient state it will alert the user so there is no empty ingredient being added into the recipe.
        if (this.state.newIngredient) {
          this.setState(prevState => ({ crrntCreateIngrdnts: [...prevState.crrntCreateIngrdnts, this.state.newIngredient]}));
        } else { alert('No Ingredient Decteted!') }

      }

      if (e.target.id === 'removeCreateIngrdt') {
        // Removes a certain ingredient from the new recipe being created
        const updatedList = this.state.crrntCreateIngrdnts.filter(ingredient => ingredient !== e.target.getAttribute('ingredient'));
        this.setState({ crrntCreateIngrdnts: updatedList });
      }

      if (e.target.className === 'createBtn') {
        // Creates a new recipe if there is an input for the newRecipeName state 
        if (this.state.newRecipeName) {
          const payload = {name: this.state.newRecipeName, ingredients: this.state.crrntCreateIngrdnts};

          await api.insertRecipe(payload).then(res => alert('Recipe Created!'))
          this.apiLoading();

          this.setState({ crrntCreateIngrdnts: [] });
        } else { alert('No Name detected for Recipe') }
        
      }

      if (e.target.className === 'backBtn') {
        // Returns the view from the search results to the main recipes view
        this.apiLoading();
        this.setState({ isSearchOn: false });
      }
    } 
    
    // for statement of showing all of the recipes within the reicpes state within the application 
    for (let i = 0; i < this.state.recipes.length; i++) {
      indRecipeCntr.push( <IndRecipe currentRecipeID={this.state.currentRecipeID} currentRecipeIsOpen={this.state.currentRecipeIsOpen} currentRecipeIsEditOn={this.state.currentRecipeIsEditOn} currentEditIngrdts={this.state.currentEditIngrdts} recipe={this.state.recipes[i]} onClick={handleClick} onChange={handleChange} key={'recipe ' + i}/> )
    }
    

    // console.log(this.state.currentEditIngrdts)
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
                <FaSearch className='searchBtn' onClick={searchRecipe}/>
              </div> 
            : <FaSearch className='searchBtnClsd' onClick={handleSearchbar}/> }
            
          </div>

          <div className='createRecipeBtn' onClick={handleClick}>Create Recipe</div>
          {this.state.isSearchOn ?  <div className='backBtn' onClick={handleClick}>Return</div> : null }
         
          
          {this.state.showCreateComp ? <CreateRecipe crrntCreateIngrdnts={this.state.crrntCreateIngrdnts} onClick={handleClick} onChange={handleChange}/> : null }
        </div>

        <div className='indRecipesCntr'>
          {indRecipeCntr}
        </div>

      </div>
    );
  }
}

export default App;
