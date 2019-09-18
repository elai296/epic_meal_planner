import React from "react";
import Calendar from "./calendar";
import ShoppingList from './shopping-list';
import SearchBar from "./search-bar";
import SearchBarResultsList from "./search-bar-results-list";
import RecipeDetails from "./recipe-details";
import RecipesCategoriesList from "./recipes-categories-list";
import RecipesFavoritesList from "./recipes-favorites-list";
import Header from "./header";
import Recipes from './recipes';
import UserInfo from "./user-info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addItemToShoppingList : [],
      oneRecipeDetail :[],
      view: {
        name: "recipes",
        recipe: {}
      },
      searchTerm: "",
      modal: "none",
      category: null
    };
    this.setView = this.setView.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.getFavorites= this.getFavorites.bind(this);
    this.recipeDetails = this.recipeDetails.bind(this);
    this.addToShoppingList = this.addToShoppingList.bind(this);
  }

  setView(name, recipe, searchTerm) {
    this.setState({
      view: { name: name, recipe: recipe },
      searchTerm: searchTerm
    });
  }

  setCategory(category) {
    this.setState({ category });
  }

  // ---- new code -----
   componentDidMount() {
    this.getFavorites();
    this.recipeDetails();
    // this.addToShoppingList({ id: 2 });
  }

  getFavorites(){
    fetch(`/api/getFavorites.php`)
      .then(res => res.json())
      .then(response => {
        // console.log("description Page",response);
      this.setState({ modal: response })});
  }

  recipeDetails(oneRecipe) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(oneRecipe)
    };

    // fetch('/api/recipeDetails.php', req)
    //   .then(res => res.json())
    //   .then(viewOneRecipe=> {
    //     // console.log("recipeDetails n favorites:",viewOneRecipe)
    //     const allItems = this.state.oneRecipeDetail.concat(viewOneRecipe);
    //     this.setState({ oneRecipe: allItems });
    //   });

  }

    addToShoppingList(addingredients) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addingredients)
    };

    fetch('/api/addIngredientsToShoppingList.php', req)
      .then(res => res.json())
      .then(addItem=> {
        // console.log("add ingredients to shoppingList Page",addItem)
        const allItems = this.state.addItemToShoppingList .concat(addItem);
        this.setState({ addingredients: allItems });
      });

  }

  render() {
    let display;

    if (this.state.view.name === "home") {
      display = (
        <React.Fragment>
          <Header setView={this.setView}/>
          <SearchBar setView={this.setView}/>
        </React.Fragment>
      )
    } else if (this.state.view.name === "search bar result") {
      display = (<SearchBarResultsList setView={this.setView} value={this.state.searchTerm}/>);
    } else if (this.state.view.name==="recipe details") {
      display = (<RecipeDetails setView={this.setView} recipe={this.state.view.recipe}/>);
    } else if (this.state.view.name==="calendar") {
      display = (<Calendar setView={this.setView}/>);
    } else if (this.state.view.name==="shoppinglist") {
      display = (<ShoppingList setView={this.setView}/>);
    } else if (this.state.view.name==="categories") {
      display = (<RecipesCategoriesList setView={this.setView} category={this.state.category}/>);
    } else if (this.state.view.name==="recipes") {
      display = (<Recipes
        setCategory={this.setCategory}
        setView={this.setView}/>);
    } else if (this.state.view.name==="userinfo") {
      display = (<UserInfo setView={this.setView}/>);
    } else if (this.state.view.name==="favorites") {
      display = (<RecipesFavoritesList setView={this.setView} category={this.state.category}/>);
    }
    return (
      <div>
        {display}
      </div>
    );
  }

}

export default App;
