import React from "react";
import SearchBarResultsItem from "./search-bar-results-item";
import Header from './header';

class SearchBarResultsList extends React.Component {
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
    fetch( `/api/test.php?q=` + this.props.value )
      .then(response => response.json())
      .then(recipes => {
        console.log("recipes are:", recipes)
        this.setState({ list: recipes });
      })
      .then(() => {
        this.props.setView("search bar result",{}, this.state.list);
      });
  }
  render() {
      // this.loadResults();
    return (
      <div>
        {/* <a onClick={() => this.handleClick(this.props)}>Home</a> */}
        <h1>Search Results</h1>
        <Header setView={this.props.setView}/>
        <section className="section">
            <div className="row">
            {this.state.list.map((recipe, x) => {
              if (x < 5) {
                return (

                  // <div key={x}>
                    <SearchBarResultsItem
                      key={x}
                      name={recipe.label}
                      image={recipe.image}
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

export default SearchBarResultsList;
