import React from "react";
import SearchBar from "./search-bar";
import Calendar from "./calendar";
import Header from './header';

class RecipeDetails extends React.Component {
  constructor(props) {
    // console.log("props are ", props)
    // console.log("Recipe is ", props.recipe.ingredients)
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
          <div className="modal modalText">Added to Shopping List
            <button
              onClick={() => {
                this.closeModal();
              }}>
                   <i className="fas fa-times"></i>
              </div>
          </div>
        </div>
      );
    } else if (this.state.modal === 'favorites') {
      return (
        <div>
          <div className="modal modalText">Added to Favorites
            <button
              onClick={() => {
                this.closeModal();
              }}>
              {/* close */}

                <i className="fas fa-times"></i>

              </div>
          </div>
        </div>
      );
    } else if (this.state.modal === 'calendar') {
      return (
        <div>
          <div className="modal">
              <div className= "closeModal"
                onClick={() => {
                  this.closeModal();
                }}>
            <i className="fas fa-times"></i>
              </div>

            <div className="smallcalendar">
              <Calendar recipeId={recipe} setView={this.props.setView} view={this.props.view}/>
            </div>
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
    let recipeCategoryToggled;
    // if(!this.state.favStatus) {
    //   this.setState(state=>({favStatus: !state.favStatus}));
    // }
    this.setState({ modal: 'favorites' });
    this.showModal();
    this.putRecipeInFavorites(this.props.recipe);

    // console.log("recipe passed from APP: ", this.props.recipe);

    if (this.props.recipe.categories !== "favorites") {
      recipeCategoryToggled = {
        categories: "favorites",
        cooking_time: this.props.recipe.cooking_time,
        directions_url: this.props.recipe.directions_url,
        id: this.props.recipe.id,
        image_url: this.props.recipe.image_url,
        ingredients: this.props.recipe.ingredients,
        label: this.props.recipe.label,
        recipe_id: this.props.recipe.recipe_id,
        serving_size: this.props.recipe.serving_size
        }
    } else {
        recipeCategoryToggled = {
          categories: null,
          cooking_time: this.props.recipe.cooking_time,
          directions_url: this.props.recipe.directions_url,
          id: this.props.recipe.id,
          image_url: this.props.recipe.image_url,
          ingredients: this.props.recipe.ingredients,
          label: this.props.recipe.label,
          recipe_id: this.props.recipe.recipe_id,
          serving_size: this.props.recipe.serving_size
      }
    };
    // console.log("recipeCategoryToggled: ", recipeCategoryToggled);
    this.props.setView("recipeDetails", recipeCategoryToggled)
  }

  handleShoppingList() {
    let recipe = this.props.recipe.ingredients.split('\n');
    // console.log("clicked", recipe);
    fetch(`/api/addtoShoppingListFromDetails.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then(response => {
        // console.log("response", response)
        response.json()
      });
    this.setState({
      modal: 'shoppinglist'
    });
    this.showModal();
  }

  putRecipeInFavorites(data){
    // console.log("data: ", data);
    fetch('/api/addToFavorites.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response=>{
      response.json()})

  }

  render() {
    let recipe = this.props.recipe;
    let props = this.props
    // console.log("props is ", props)

    // console.log("Ingredeients before split", recipe.ingredients)
    let ingredientLines = recipe.ingredients.split('\n'); // need this for ingredient formatting
    // console.log("ingredients after split ", ingredientLines);

    /* Elaine's heart using this.state.favStatus */
    const heartColor = {
      whiteHeart: "./image/whiteHeartIcon.png",
      redHeart: "./image/redHeart.png"
    }
    let image = !this.state.favStatus ? 'whiteHeart' : 'redHeart';
    // console.log(recipe.id);
    // console.log("worked", this.props);

    let red = "./image/redHeart.png";
    let white = "./image/whiteHeartIcon.png";
    let jaeTestHeart = recipe.categories === "favorites" ? red : white;


    return (
      <div>
        <Header setView={this.props.setView} text="Epic Meal Planner"/>

        <div className="container">

          <div className="row justify-content-center my-5">
            <SearchBar setView={this.props.setView}/>
          </div>

          <div>
            <p className='recipeDetailsTitle'>{recipe.label}</p>
            <div className="row">

              <div className="propsFood" style={{
                backgroundImage: "url("+recipe.image_url+")",
                backgroundSize: "contain",
                backgroundRepeat:"no-repeat"}}>
              </div>

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
                      // src={heartColor[image]} // Elaine's heart via
                      src={jaeTestHeart}        // Jae's testHeart to reflect actual database
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
            <a className="text-secondary font-weight-bold" href={recipe.directions_url} target="_blank">Click for Instructions</a>
          </div>
          {this.showModal(recipe)}
        </div>



      </div>
    );
  }
}

export default RecipeDetails;
