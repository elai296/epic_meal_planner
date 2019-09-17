import React from "react";
import SearchBar from "./search-bar";
import Calendar from "./calendar";

class RecipeDetails extends React.Component {
  constructor(props) {
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

  showModal() {
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
              <Calendar/>
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
        modal: 'favorites'
      });
      this.showModal();
      this.putRecipeInFavorites(this.props.recipe);
    }
  }

  handleShoppingList() {
    console.log("clicked");
    this.setState({
      modal: 'shoppinglist'
    });
    this.showModal();
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
        <SearchBar setView={this.props.setView}/>
        <Header setView={this.props.setView}/>
        </div>
        <div>
          <p className='h1'>{recipe.label}</p>
          <div className="row">
            <div className="propsFood" style={{
              backgroundImage: "url("+recipe.image+")",
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat"}}></div>
            <div className="timeServing">
              <div>Time: {recipe.totalTime} minutes</div>
              <div>Serving size: {recipe.yield}</div>
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
        <div>
          {recipe.ingredientLines.map((ingredient, i) => {
            return <div key={i}>{ingredient}</div>;
          })}
        </div>
        <a href={recipe.url}>Click for Instructions</a>

        {this.showModal()}

      </div>
    );
  }
}

export default RecipeDetails;
