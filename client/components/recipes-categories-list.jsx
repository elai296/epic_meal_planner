import React from 'react';

class RecipesCategoriesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryList:[]
        }
    }

    handleClick(props, recipe) {
    console.log(props);
    this.props.setView("recipe details", recipe, []);
      }

    componentDidMount(){
            fetch("/api/getCategories.php")
              .then(response => response.json())
              .then(recipes => {
                this.setState({ categoryList: recipes });
              })
    }

    render(){
        return (
            <div className="card mb-3" style={{ maxWidth: "480px" }}>
              <div className="row no-gutters">
                <h1>Categories</h1>
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

export default RecipesCategoriesList;
