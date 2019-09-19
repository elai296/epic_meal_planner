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
        name: "home",
        recipe: {}
      },
      searchTerm: "",
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

  componentDidMount() {
    this.getFavorites();
    this.recipeDetails();
  }

  getFavorites(){
    fetch(`/api/getFavorites.php`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          modal: response
        })
      }
    );
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
    let title, display;

    if (this.state.view.name === "home") {
      title = "Home";
      display = (
        <React.Fragment>
          <div className="container">
            <div className="row justify-content-end">
              <Header setView={this.setView}/>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center my-2">
              <SearchBar setView={this.setView}/>
            </div>
            <div className="row justify-content-center my-2">
              <h3>Find a new dish.</h3>
              <h3>Plan your next meal.</h3>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.state.view.name === "recipes") {
      title = "Recipes";
      display = (
        <Recipes setCategory={this.setCategory} setView={this.setView}/>
      );
    } else if (this.state.view.name === "calendar") {
      title = "Calendar";
      display = (
        <Calendar setView={this.setView} />
      );
    } else if (this.state.view.name === "shoppingList") {
      title = "Shopping List";
      display = (
        <ShoppingList setView={this.setView}/>
      );
    } else if (this.state.view.name === "userInfo") {
      title = "User Info";
      display = (
        <UserInfo setView={this.setView}/>
      );
    } else if (this.state.view.name === "searchBarResultsList") {
      title = "Search Results";
      display = (
        <SearchBarResultsList setView={this.setView} value={this.state.searchTerm}/>
      );
    } else if (this.state.view.name === "recipesCategoriesList") {
      title = "Categories";
      display = (
        <RecipesCategoriesList setView={this.setView} category={this.state.category}/>
      );
    } else if (this.state.view.name === "recipeDetails") {
      title = "Recipe Details";
      display = (
        <RecipeDetails setView={this.setView} recipe={this.state.view.recipe} view={this.state.view}/>
      );
    }

    return (
      <div>
        <Header setView={this.setView} text={title}/>
        {display}
      </div>
    );
  }
}

export default App;
