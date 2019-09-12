import React from "react";

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "recipe details"
    };
  }
  handleCalendar() {}

  handleFavorites() {}

  handleShoppingList() {}
  

  render() {
    let recipe = this.props.recipe;
    return (
      <div className="container">
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
                />
              }
              {
                <img 
                  className="heartIcon" 
                  src="./image/heartIcon.png"
                  alt="Second Icond"
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
        <div>Click for Instructions{recipe.url}</div>
      </div>
    );
  }
}
export default RecipeDetails;
