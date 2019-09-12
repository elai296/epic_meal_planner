import React from "react";
import SearchResultItem from "./searcResultItem";

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      // value: ""
    };
  }
  // componentDidMount() {
  //  this.getRecipes();
  // }

  // loadResults() {
  //   this.setState({ list: this.props.results });
  // }
  handleClick(props) {
    props.setView("home", {}, []);
  }

  componentDidMount(){
    fetch(
      "https://api.edamam.com/search?q=" +
        this.props.value +
        "&app_id=1930606a&app_key=165754ed1a324e1c76dc770f26190489&from=0&to=10&time=1-60"
    )
      .then(response => response.json())
      .then(recipes => {
        this.setState({ list: recipes.hits });
      })
      // .then(() => {
      //   this.props.setView("search bar result",{}, this.state.list);
      // });
  }
  render() {
      // this.loadResults();
    return (
      <div>
        <a onClick={() => this.handleClick(this.props)}>Home</a>
        <h1>Search Results</h1>
        <section className="section">
            <div className="row">
            {this.state.list.map((recipe, x) => {
              if (x < 5) {
                return (
    
                  // <div key={x}>
                    <SearchResultItem
                      key={x}
                      name={recipe.recipe.label}
                      image={recipe.recipe.image}
                      url={recipe.recipe.url}
                      servingSize={recipe.recipe.yield}
                      ingredient={recipe.recipe.ingredientLines}
                      time={recipe.recipe.totalTime}
                      setView={this.props.setView}
                      recipe={recipe.recipe}
                    />
                  // </div>
                  
                
                );
              }
            })}
          </div>
        </section>
      </div>
    ); 
  }
}

export default SearchResults;
