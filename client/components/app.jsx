import React from "react";
import Calendar from "./calendar";
import ShoppingList from './shopping-list';
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";
import RecipeDetails from "./recipeDetails";
import FavoriteList from "./favoriteList";
import Menu from "./menu";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addItemToShoppingList : [],
      oneRecipeDetail :[],
      view: {
        name: "home",
        recipe: {}
      },
      searchTerm: "",
      modal: "none"
    };
    this.setView = this.setView.bind(this);
    this.setModal = this.setModal.bind(this);
    this.getFavorites= this.getFavorites.bind(this);
    this.recipeDetails = this.recipeDetails.bind(this);
    this.addToShoppingList = this.addToShoppingList.bind(this);
  }

  setView(name, recipe, searchTerm) {
    this.setState({
      view: { name: name, recipe: recipe },
      searchTerm: searchTerm
    });
  }

  // ---- new code -----
   componentDidMount() {
    this.getFavorites();
    this.recipeDetails();
    this.addToShoppingList({ id: 2 });
  }

  getFavorites(){
    fetch(`/api/getFavorites.php`)
      .then(res => res.json())
      .then(response => {
        // console.log("description Page",response);
      this.setState({ modal: response })});
  }


  recipeDetails(oneRecipe) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(oneRecipe)
    };

    fetch('/api/recipeDetails.php', req)
      .then(res => res.json())
      .then(viewOneRecipe=> {
        // console.log("recipeDetails n favorites:",viewOneRecipe)
        const allItems = this.state.oneRecipeDetail.concat(viewOneRecipe);
        this.setState({ oneRecipe: allItems });
      });

  }


    addToShoppingList(addingredients) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addingredients)
    };

    fetch('/api/addIngredientsToShoppingList.php', req)
      .then(res => res.json())
      .then(addItem=> {
        // console.log("add ingredients to shoppingList Page",addItem)
        const allItems = this.state.addItemToShoppingList .concat(addItem);
        this.setState({ addingredients: allItems });
      });

  }
  componentDidMount(){
    this.getFavorites();
  }

  setModal(modal) {
    this.setState({ modal });
  }

  render() {
    let display;
    let menu = <Menu setView={this.setView}/>

    if (this.state.view.name === "home") {
      display = <SearchBar setView={this.setView}/>;
    } else if (this.state.view.name === "search bar result") {
      display = (<SearchResults setView={this.setView} value={this.state.searchTerm} />);
    } else if (this.state.view.name==="recipe details"){
      display=(<RecipeDetails setView={this.setView} recipe={this.state.view.recipe}/>);
    } else if (this.state.view.name ==="recipe details"){
      display=(<SearchBarRecipe setView={this.setView} />);
    }else if(this.state.view.name==="calendar"){
      display=(<Calendar setView={this.setView} setModal={this.setModal}/>)
    }else if(this.state.view.name==="shoppinglist"){
      display=(<ShoppingList setView={this.setView} setModal={this.setModal}/>)
    }else if(this.state.view.name==="favorite list"){
      display=(<FavoriteList setView={this.setView}/>)

    }
    return (
      <div>
        {display}
        {menu}
      </div>
    );
  }

}

export default App;
