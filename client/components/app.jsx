import React from "react";

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
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.getFavorites();
  }


  setView(name, recipe) {
    this.setState({
      view: {
        name: name,
        recpie: recipe
      }
    })
  }

  getFavorites(){
    fetch(`/api/getFavorites.php`)
      .then(res => res.json())
      .then(response => {console.log(response);
      this.setState({ modal: response  })});

  }

  setModal(modal) {
    this.setState({ modal })
  }

  render() {
    return(
      <div>
        <span className="h1">TEST</span>
      </div>
    )
  }

}

export default App;
