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
    this.props.setView("searchBarResultsList", null, this.state.value, 'RECIPES');
  }

  render() {
    return (
      <div className="searchBarContainer rounded-circle textFont col-lg-4 col-md-6 col-sm-18 col-10">
        <form className="searchBarForm" onSubmit={this.handleSearch}>
          <a href='#'>
          {<img className="searchIcon mx-3 my-1 position-absolute" src="./image/searchIcon.png" alt="searchPicture" onClick={e=>this.handleSearch(e)}/>}

          </a>
          <input
            className="rounded-pill searchBarInput smx-1 pl-5 col-12"
            type="search"
            value={this.state.value}
            placeholder="Search Meal"
            onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
