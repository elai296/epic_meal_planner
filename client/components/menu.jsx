import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.setMenu = this.setMenu.bind(this);
  }

  setMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  };

  render() {
    const containerOpacity = {
      backgroundColor: "rgb(69, 104, 220)",
      opacity: "0.3"
      // filter: "alpha(opacity = 60)"
      // filter: "opacity(0.4)"
    };

    const menuDivOpacity = {
      backgroundColor: "lightgrey",
      opacity: "0.6"
    }

    const greyDivOpacity = {
      backgroundColor: "rgb(242, 240, 240)",
      opacity: "0.4"
    }

    if (!this.state.showMenu) {
      return <i className="fas fa-bars menu mx-1" onClick={this.setMenu}></i>
    } else {
      console.log("modal loading")
      return (
        <div className="container d-flex column modal py-0 px-0 h-100 w-100 d-inline-block" style={containerOpacity}>
          <div className="border border-dark modal-body py-0 px-0 w-50"  style={greyDivOpacity} onClick={this.setMenu}></div>
          <div className="border border-dark modal-body py-0 px-0 w-50" style={menuDivOpacity}>
            <div className="pl-2 py-4 border border-dark font-weight-bold" onClick={
              () => { this.props.setView("home", {});
              this.setMenu();}}>Home</div>
            <div className="pl-2 py-4 border border-dark font-weight-bold" onClick={
              () => { this.props.setView("recipes", {});
              this.setMenu();}}>Recipes</div>
            <div className="pl-2 py-4 border border-dark font-weight-bold" onClick={
              () => { this.props.setView("calendar", {});
              this.setMenu();}}>Calendar</div>
            <div className="pl-2 py-4 border border-dark font-weight-bold" onClick={
              () => { this.props.setView("shoppingList", {});
              this.setMenu();}}>Shopping List</div>
          </div>
        </div>
      )
    }
  }


}

export default Menu;
