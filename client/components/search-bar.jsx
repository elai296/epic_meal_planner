import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.setView("searchBarResultsList", null, this.state.value);
  }

  render() {
    return (
      <div className="contentRecipeBar">
        <div className="container rounded-circle">
          <form className="searchBarForm searchBarForm2"onSubmit={this.handleSearch}>
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
export default SearchBar;
