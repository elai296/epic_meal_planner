import React from "react";
import SearchResultItem from "./searcResultItem";

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
   this.loadResults();
  }

  loadResults() {
    this.setState({ list: this.props.results });
  }
  handleClick(props) {
    props.setView("home", {}, []);
  }
  render() {
      // this.loadResults();
    return (
      <div>
        <a onClick={() => this.handleClick(this.props)}>Home</a>
        <h1>Search Results</h1>
        <section className="section">
          {this.state.list.map((recipe, x) => {
            if (x < 5) {
              return (
                <div key={x}>
                  <SearchResultItem
                    name={recipe.recipe.label}
                    image={recipe.recipe.image}
                    url={recipe.recipe.url}
                    servingSize={recipe.recipe.yield}
                    ingredient={recipe.recipe.ingredientLines}
                    time={recipe.recipe.totalTime}
                    setView={this.props.setView}
                    recipe={recipe.recipe}
                  />
                </div>
              );
            }
          })}
        </section>
      </div>
    ); 
  }
}

export default SearchResults;
