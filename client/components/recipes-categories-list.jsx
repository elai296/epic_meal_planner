import React from 'react';
import Header from './header';

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
        .then(response => response.text())
        .then(recipes => {
          this.setState({
            categoryList: recipes
          });
        });
    }
    componentDidMount(){
      console.log("componentDidMount starting");
      this.retrieveData();
      console.log("componentDidMount ended");
    }

    render(){
      if ( this.state.categoryList.length === 0 ){
        console.log("BLANK: ", this.state.categoryList);
        return null;
      } else {
        return (
          <div className="card mb-3" style={{ maxWidth: "480px" }}>
            <Header setView={this.props.setView}/>
            <div className="row no-gutters">
              <h1>{this.props.category}</h1>
              <div className="col-sm-4">
                <div

                  className="card-img-top propsImage"
                  style={{
                    backgroundImage: "url("+this.props.image_url+")",
                    backgroundSize: "contain",
                    backgroundRepeat:"no-repeat",
                    height: "150px",
                    width: "150px"
                  }}
                ></div>

              </div>
              {this.state.categoryList.map((recipe)=>{
                    return(
                      <div className="col-sm-8">
                          <div className="card-body">
                              <img
                              className="card-title"
                              src={recipe.image_url}
                              onClick={e => handleClick(recipe, recipe.image_url)}
                              />
                              <h5>{recipe.label}</h5>
                              <p className="card-text">Time: {recipe.cooking_time} minutes</p>
                              <p className="card-text">
                              </p>
                          </div>
                      </div>
                    );
                })}

            </div>
          </div>
        );
      }

    }
}

export default RecipesCategoriesList;
