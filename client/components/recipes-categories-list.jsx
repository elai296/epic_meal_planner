import React from 'react';
import Header from './header';
import SearchBar from './search-bar';
import SearchBarResultsItem from "./search-bar-results-item";

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

    componentDidUpdate(prevProps){
      if (prevProps.category === this.props.category){
        return;//if the search term is the same as the last search term, then end fecth call
        //if it's different term, then fetch again to end the cycle.
      }
      fetch( `/api/getCategories.php?category=`+ this.props.category)
        .then(response => response.json())
        .then(recipes => {
          this.setState({ categoryList: recipes });
        })
      }

    render(){
      if ( this.state.categoryList.length === 0 ){
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <div>
                <Header setView={this.props.setView}/>
                  <div className="row justify-content-center my-5">
                  <SearchBar setView={this.props.setView}/>
                  </div>
                    <div className="container mt-5">
                      <section className="section">
                          <div className="row">
                            {this.state.categoryList.map((recipe, x) => {
                              return (
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
          </div>
        );
      }
    }
}

export default RecipesCategoriesList;
