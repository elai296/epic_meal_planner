import React from "react";
import SearchBar from "./search-bar";
import Calendar from "./calendar";
import Header from './header';

class RecipeDetails extends React.Component {
  constructor(props) {
    console.log("props are ", props)
    console.log("Recipe is ", props.recipe.ingredients)
    super(props);
    this.state = {
      favStatus: false,
      modal: ''
    };
    this.handleShoppingList = this.handleShoppingList.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  closeModal() {
    this.setState({
      modal: ''
    });
  }

  showModal(recipe) {
    if(this.state.modal === ''){
      return null;
    } else if (this.state.modal === 'shoppinglist') {
      return (
        <div>
          <div className="modal">Added to Shopping List
            <button
              onClick={() => {
                this.closeModal();
              }}>close</button>
          </div>
        </div>
      );
    } else if (this.state.modal === 'favorites') {
      return (
        <div>
          <div className="modal">Added to Favorites
            <button
              onClick={() => {
                this.closeModal();
              }}>close</button>
          </div>
        </div>
      );
    } else if (this.state.modal === 'calendar') {
      return (
        <div>
          <div className="modal">
            <div className="smallcalendar">
              <Calendar recipeId={recipe} setView={this.props.setView} view={this.props.view}/>
            </div>
            <button
              onClick={() => {
                this.closeModal();
              }}>close</button>
          </div>
        </div>
      );
    }
  }

  handleCalendar() {
    this.setState({
      modal: 'calendar'
    });
    this.showModal();
  }

  handleFavorites() {
    if(!this.state.favStatus) {
      this.setState(state=>({favStatus: !state.favStatus}));
      this.setState({
        modal: 'favorites',
      });
      this.showModal();
      this.putRecipeInFavorites(this.props.recipe);
    }
  }

  handleShoppingList() {
    let recipe = this.props.recipe.ingredients.split('\n');
    console.log("clicked", recipe);
    fetch(`/api/addtoShoppingListFromDetails.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then(response => {
        console.log("response", response)
        response.json()
      });
  }

  putRecipeInFavorites(data){
    fetch('/api/addToFavorites.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response=>{
      console.log("response", response)
      response.json()});
  }

  render() {
    let recipe = this.props.recipe;
    let props = this.props
    // console.log("props is ", props)
    const heartColor={
      whiteHeart:"./image/whiteHeartIcon.png",
      redHeart:"./image/redHeart.png"
    }


    // console.log("Ingredeients before split", recipe.ingredients)
    let ingredientLines = recipe.ingredients.split('\n');
    // console.log("ingredients after split ", ingredientLines);

    let image = !this.state.favStatus ? 'whiteHeart' : 'redHeart';
    console.log(recipe.id);
    console.log("worked", this.props);


    return (
      <div className="container">
        <div>
          <SearchBar setView={this.props.setView}/>
        </div>
        <div>
          <p className='h1'>{recipe.label}</p>
          <div className="row">
            <div className="propsFood" style={{
              backgroundImage: "url("+recipe.image_url+")",
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat"}}></div>
            <div className="timeServing">
              <div>Time: {recipe.cooking_time} minutes</div>
              <div>Serving size: {recipe.serving_size}</div>
            <div className="iconImages">
              {
                <img
                  className="calendarIcon imgIcon"
                  src="./image/calendarIcon.png"
                  alt="First Icon"
                  onClick={()=>this.handleCalendar()}
                />
              }
              {
                <img
                  className="heartIcon imgIcon"
                  src={heartColor[image]}
                  alt="Second Icon"
                  onClick={()=>this.handleFavorites()}
                />
              }
              {
                <img
                  className="shoppingListIcon imgIcon"
                  onClick= {() => this.handleShoppingList()} //need to change to the modal view for onClick. this is just for testing; it goes to shoppingList view
                  src="./image/shoppingList.png"
                  alt="Third Icon"
                />
              }
            </div>
            </div>
          </div>
        </div>

        <div className="text-center">INGREDIENTS</div>
        <div>
          {
            ingredientLines.map((ingredient, i) => {
            return <div key={i}>- {ingredient}</div>;
          })}
        </div>
        <div className="text-center">
        <a className="text-dark" href={recipe.directions_url}>Click for Instructions</a>
        </div>
        {this.showModal(recipe)}

      </div>
    );
  }
}

export default RecipeDetails;
