import React from "react";
import ShoppingList from './shopping-list';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: "home",
        recipe: {}
      },
      modal: "none"
    };
  }

  setView(name, recipe) {
    this.setState({
      view: {
        name: name,
        recipe: recipe
      }
    })
  }

  setModal(modal) {
    this.setState({ modal })
  }

  render() {
    return(
      <div>
        <ShoppingList/>
      </div>
    )
  }

}

export default App;
