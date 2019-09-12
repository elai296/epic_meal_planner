import React from "react";
import SearchBarResult from "./searcResultItem";

class SearchBarRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: [],
      view: "",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.setView("search bar result", null, this.state.value);
    // this.getRecipes();
  }

  // getRecipes() {
  //   fetch(
  //     "https://api.edamam.com/search?q=" +
  //       this.state.value +
  //       "&app_id=1930606a&app_key=165754ed1a324e1c76dc770f26190489&from=0&to=10&time=1-60"
  //   )
  //     .then(response => response.json())
  //     .then(recipes => {
  //       this.setState({ list: recipes.hits });
  //     })
  //     .then(() => {
  //       this.props.setView("search bar result",{}, this.state.list);
  //     });
  // }

  render() {
    return (
      <div className="contentRecipeBar">
        <div className="container rounded-circle">
          <form onSubmit={this.handleSearch}>
            <input
              className="rounded-pill"
              type="search"
              value={this.state.value}
              placeholder="Search"
              onChange={this.handleChange}
            />
            {<img className="searchIcon"src="./image/searchIcon.png"alt="searchPicture" onClick={e=>this.handleSearch(e)}/>}
          
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBarRecipe;
