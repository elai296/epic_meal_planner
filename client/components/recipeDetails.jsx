import React from "react";
import SearchBarRecipe from "./searchBar";

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favStatus: false
    };
  }
  handleCalendar() {
      this.props.setView("calendar");
  }

  handleFavorites() {
    this.setState(state=>({favStatus: !state.favStatus}));
    // this.props.setModal("favorites");
    this.putRecipeInFavorites(this.props.recipe
      );
  }

  handleShoppingList() {
      
  }

  putRecipeInFavorites(data){
    fetch("/api/getFavorites.php",{ //ask kim for endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response=>response.json());
  }


  render() {
    let recipe = this.props.recipe;
    const heartColor={
      whiteHeart:"./image/whiteHeartIcon.png",
      redHeart:"./image/redHeart.png"
    } 
    let image = !this.state.favStatus ? 'whiteHeart' : 'redHeart';

    return (
      <div className="container">
        <div>
        <SearchBarRecipe setView={this.props.setView}/>
        </div>
        <div>
          <h1>{recipe.label}</h1>
          <div className="row">
            {<img className="propsFood col-4" src={recipe.image} />}
            <div>
              <div>Time: {recipe.totalTime} minutes</div>
              <div>Serving size: {recipe.yield}</div>
              <div>{recipe.servingSize}</div>
            </div>
            <div className="iconImages col-4">
              {
                <img
                  className="calendarIcon"
                  src="./image/calendarIcon.png"
                  alt="First Icon"
                  onClick={()=>this.handleCalendar()}
                />
              }
              {
                <img
                  className="heartIcon"
                  src={heartColor[image]}
                  alt="Second Icon"
                  onClick={()=>this.handleFavorites()}
                />
              }
              {
                <img
                  className="shoppingListIcon" onClick= {() => this.props.setView('shoppinglist', {})} //need to change to the modal view for onClick. this is just for testing; it goes to shoppingList view
                  src="./image/shoppingList.png"
                  alt="Third Icon"
                />
              }
            </div>
          </div>
        </div>
        <div>
          {recipe.ingredientLines.map((ingredient, i) => {
            return <div key={i}>{ingredient}</div>;
          })}
        </div>
        <a href={recipe.url}>Click for Instructions</a>
      </div>
    );
  }
}
export default RecipeDetails;
