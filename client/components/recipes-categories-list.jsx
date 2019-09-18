import React from 'react';
import Header from './header';
import SearchBarResultsItem from "./search-bar-results-item";

class RecipesCategoriesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryList:[]
        }
        this.retrieveData = this.retrieveData.bind(this);
    }

    handleClick(props, recipe) {
    console.log(props);
    this.props.setView("recipe details", recipe, []);
      }

    retrieveData() {
      fetch(`/api/getCategories.php`)
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
        console.log("this.state.categoryList", this.state.categoryList);
        return (

          <div className="card mb-3" style={{ maxWidth: "480px" }}>

            <Header setView={this.props.setView}/>
            <div className="row no-gutters">
              <h1>{this.props.category}</h1>
              <div className="col-sm-4">
                <div
                  className="card-img-top propsImage"
                  style={{
                    backgroundImage: "url("+this.state.image_url+")",
                    backgroundSize: "contain",
                    backgroundRepeat:"no-repeat",
                    height: "150px",
                    width: "150px"
                  }}
                > </div>
              </div>


              {/* {this.state.categoryList.map((recipe, x )=>{
                    return(
                      <div className="col-sm-8" key={x}>
                        <div className="card-body">
                              <img
                              className="card-title"
                              src={this.state.categoryList.image_url}
                              onClick={e => handleClick(reciepe, recipe.image_url)}
                              />
                              <h5>{this.state.categoryList.label}</h5>
                              <p className="card-text">Time: {this.state.cooking_time} minutes</p>
                              <p className="card-text">
                              </p>
                          </div>
                      </div>
                    );
                })} */}

              <section className="section">
                <div className="row">
                  {this.state.categoryList.map((recipe, x) => {
                      return (
                        <SearchBarResultsItem
                          key={x}
                          name={recipe.label}
                          image={recipe.image_url}
                          // url={recipe.directions_url}
                          // servingSize={recipe.serving_size}
                          // ingredient={recipe.ingredientLines}
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
