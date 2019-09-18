import React from 'react';
import Header from './header';

class RecipesFavoritesList extends React.Component{
    constructor(props){
      console.log("constructor props are ", props)
        super(props);
        this.state={
            favoriteList: []
        }
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props, recipe) {
    console.log("props are ", props);
    // console.log("recipe is ", this.state.favoriteList)
    var favoriteDetails = this.state.favoriteList[0];
    console.log("favoriteDetails ", favoriteDetails);
    this.props.setView("recipeDetails", favoriteDetails);
      }

    componentDidMount(){
            fetch("/api/getFavorites.php")
              .then(response => response.json())
              .then(recipes => {
                console.log("recipes are ", recipes)
                this.setState({ favoriteList: recipes });
              })
    }

    render(){
        return (
            <div className="card mb-3" style={{ maxWidth: "480px" }}>
              <div className="row no-gutters">
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
                {this.state.favoriteList.map((recipe)=>{
                      return(
                        <div className="col-sm-8">
                            <div className="card-body">
                                <img
                                className="card-title"
                                src={recipe.image_url}
                                onClick={() => this.handleClick()}
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

export default RecipesFavoritesList;
