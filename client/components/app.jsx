import React from "react";
import Calendar from "./calendar";

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
    this.setView = this.setView.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  setView(name, recipe) {
    this.setState({
      view: {
        name: name,
        recpie: recipe
      }
    })
  }

  setModal(modal) {
    this.setState({ modal })
  }

  render() {
    return(
      <div>
        <Calendar />
      </div>
    )
  }

}

export default App;
