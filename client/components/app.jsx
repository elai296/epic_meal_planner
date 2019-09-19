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
      // addItemToShoppingList: [], // what is this?
      // oneRecipeDetail: [], // what is this?
      view: {
        name: "home",
        recipe: {}
      },
      searchTerm: "",
      category: null
    };
    this.setView = this.setView.bind(this);
    this.setCategory = this.setCategory.bind(this);
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

  render() {
    let title, display;

    if (this.state.view.name === "home") {
      display = (
        <div>
          <Header setView={this.setView}/>
          <div className="container">
            <div className="row justify-content-center my-5">
              <SearchBar setView={this.setView}/>
            </div>
            <div>
              <h3 className="row justify-content-center">Find a new dish.</h3>
              <h3 className="row justify-content-center">Plan your next meal.</h3>
            </div>
          </div>
        </div>
      );
    } else if (this.state.view.name === "recipes") {
      display = (
        <Recipes setCategory={this.setCategory} setView={this.setView}/>
      );
    } else if (this.state.view.name === "calendar") {
      display = (
        <Calendar setView={this.setView} />
      );
    } else if (this.state.view.name === "shoppingList") {
      display = (
        <ShoppingList setView={this.setView}/>
      );
    } else if (this.state.view.name === "userInfo") {
      display = (
        <UserInfo setView={this.setView}/>
      );
    } else if (this.state.view.name === "searchBarResultsList") {
      display = (
        <SearchBarResultsList setView={this.setView} value={this.state.searchTerm}/>
      );
    } else if (this.state.view.name === "recipesCategoriesList") {
      display = (
        <RecipesCategoriesList setView={this.setView} category={this.state.category}/>
      );
    } else if (this.state.view.name === "recipeDetails") {
      display = (
        <RecipeDetails setView={this.setView} recipe={this.state.view.recipe} view={this.state.view}/>
      );
    }

    return (
      <div>
        {/* <img src="./image/backgroundImage.jpg" alt="backgroundImg"/> */}
        {display}
      </div>
    );
  }
}

export default App;
