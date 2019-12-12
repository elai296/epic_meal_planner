import React from "react";
import Calendar from "./calendar";
import ShoppingList from "./shopping-list";
import SearchBarResultsList from "./search-bar-results-list";
import RecipeDetails from "./recipe-details";
import RecipesCategoriesList from "./recipes-categories-list";
import RecipesFavoritesList from "./recipes-favorites-list";
import Header from "./header2";
import Recipes from "./recipes";
import UserInfo from "./user-info";
import Home from "./home";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: "home",
        recipe: {},
        viewTitle: "EPIC MEAL PLANNER"
      },
      searchTerm: "",
      category: null
    };
    this.setView = this.setView.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  setView(name, recipe, searchTerm, title, category) {
    this.setState(
      {
        view: { name: name, recipe: recipe, viewTitle: title },
        searchTerm: searchTerm,
        category: category
      }
    );
  }

  setCategory(category) {
    this.setState({ category });
  }

  render() {
    let display;
    if (this.state.view.name === "home") {
      display = <Home setView={this.setView} />;
    } else if (this.state.view.name === "recipes") {
      display = (
        <Recipes
          setCategory={this.setCategory}
          setView={this.setView}
          category={this.state.category}
        />
      );
    } else if (this.state.view.name === "calendar") {
      display = <Calendar setView={this.setView} />;
    } else if (this.state.view.name === "shoppingList") {
      display = <ShoppingList setView={this.setView} />;
    } else if (this.state.view.name === "userInfo") {
      display = <UserInfo setView={this.setView} />;
    } else if (this.state.view.name === "searchBarResultsList") {
      display = (
        <SearchBarResultsList
          setView={this.setView}
          value={this.state.searchTerm}
        />
      );
    } else if (this.state.view.name === "recipesCategoriesList") {
      display = (
        <RecipesCategoriesList
          setView={this.setView}
          category={this.state.category}
        />
      );
    } else if (this.state.view.name === "recipeDetails") {
      display = (
        <RecipeDetails
          setView={this.setView}
          recipe={this.state.view.recipe}
          view={this.state.view}
        />
      );
    }
    return (
      <React.Fragment>
        <div>
          <Header
            setCategory={this.setCategory}
            setView={this.setView}
            category={this.state.category}
            viewTitle={this.state.view.viewTitle}
          />
          {display}
        </div>
      </React.Fragment>
    );
  }
}
