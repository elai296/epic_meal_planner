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
      // "https://api.edamam.com/search?q=" +
      //   this.props.value +
      //   "&app_id=1930606a&app_key=165754ed1a324e1c76dc770f26190489&from=0&to=10&time=1-60"
      `/api/test.php?q=` + this.props.value 
    )
      .then(response => response.json()) /* 8) */
      .then(recipes => {
        console.log("recipes are:", recipes)
        this.setState({ list: recipes }); /* 9) */
      })
      .then(() => {
        this.props.setView("search bar result",{}, this.state.list);
      });
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
                      name={recipe.label}
                      image={recipe.image_url}
                      url={recipe.directions_url}
                      servingSize={recipe.serving_size}
                      ingredient={recipe.ingredientLines}
                      time={recipe.totalTime}
                      setView={this.props.setView}
                      recipe={recipe}
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
