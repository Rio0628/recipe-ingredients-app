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
      this.setState({ showSearchbar: true });
    }

    const searchRecipe = () => {
      const searchResult = this.state.recipes.filter(recipe => recipe.name.toLowerCase().search(this.state.searchInput) !== -1 );
      this.setState({ recipes: searchResult });
    
      this.setState({ isSearchOn: true });
      this.setState({ showSearchbar: false });
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

      if (e.target.id === 'addIngrdtBtn') {
        this.setState(prevState => ({ currentEditIngrdts: [...prevState.currentEditIngrdts, this.state.newIngredient]}))
        
      }

      if (e.target.id === 'removeIngrdtEdit') {
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

      if (e.target.id === 'addIngrdtCreate') {
        
        if (this.state.newIngredient) {
          this.setState(prevState => ({ crrntCreateIngrdnts: [...prevState.crrntCreateIngrdnts, this.state.newIngredient]}));
        } else { alert('No Ingredient Decteted!') }

      }

      if (e.target.id === 'removeCreateIngrdt') {
        const updatedList = this.state.crrntCreateIngrdnts.filter(ingredient => ingredient !== e.target.getAttribute('ingredient'));
        this.setState({ crrntCreateIngrdnts: updatedList });
      }

      if (e.target.className === 'createBtn') {
        if (this.state.newRecipeName) {
          const payload = {name: this.state.newRecipeName, ingredients: this.state.crrntCreateIngrdnts};

          await api.insertRecipe(payload).then(res => alert('Recipe Created!'))

          this.apiLoading();
        } else { alert('No Name detected for Recipe') }
        
      }

      if (e.target.className === 'backBtn') {
        this.apiLoading();
        this.setState({ isSearchOn: false });
      }
    } 

    for (let i = 0; i < this.state.recipes.length; i++) {
      indRecipeCntr.push( <IndRecipe currentRecipeID={this.state.currentRecipeID} currentRecipeIsOpen={this.state.currentRecipeIsOpen} currentRecipeIsEditOn={this.state.currentRecipeIsEditOn} currentEditIngrdts={this.state.currentEditIngrdts} recipe={this.state.recipes[i]} onClick={handleClick} onChange={handleChange} key={'recipe ' + i}/> )
    }
    
    console.log(this.state.test)
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
