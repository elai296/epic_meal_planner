import React from 'react';
import Header from './header';
import SearchBar from './search-bar';
import SearchBarResultsItem from "./search-bar-results-item";
// import CategoriesItem from "./categories-item";

class RecipesCategoriesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryList:[]
        }
        this.retrieveData = this.retrieveData.bind(this);
    }

    retrieveData(){
      fetch(`/api/getCategories.php?category=`+ this.props.category)
        .then(response => response.json())
        .then(recipes => {
          this.setState({
            categoryList: recipes
          });
        });
    }

    componentDidMount(){
      this.retrieveData();
    }

    render(){
      if ( this.state.categoryList.length === 0 ){
        return null;
      } else {
        return (
          <div>
            <div>
              <SearchBar setView={this.props.setView} />
              <Header setView={this.props.setView} />
            </div>
            <div>
              <h4>Search Results</h4>
              <section className="section">
                <div className="row">
                  {this.state.categoryList.map((recipe, x) => {
                    return (
                      // <CategoriesItem
                      <SearchBarResultsItem
                        key={x}
                        name={recipe.label}
                        image={recipe.image_url}
                        time={recipe.cooking_time}
                        setView={this.props.setView}
                        recipe={recipe}
                      />
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        );
      }
    }
}

export default RecipesCategoriesList;
