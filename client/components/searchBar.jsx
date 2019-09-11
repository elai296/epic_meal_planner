import React from "react";
import SearchBarResult from "./searcResultItem";

class SearchBarRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      view: "home page",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getRecipes();
  }

  // handleSearch(){
  //     this.getRecipes();
  // }

  getRecipes() {
    fetch(
      "https://api.edamam.com/search?q=" +
        this.state.value +
        "&app_id=1930606a&app_key=165754ed1a324e1c76dc770f26190489&from=0&to=10&time=1-60"
    )
      .then(response => response.json())
      .then(recipes => {
        this.setState({ list: recipes.hits });
      })
      .then(() => {
        this.props.setView("search bar result",{}, this.state.list);
      });
  }

  render() {
    return (
      <div className="contentRecipeBar">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Submit"
              onClick={e => this.handleSubmit(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBarRecipe;
