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
      backgroundColor: "rgb(0, 0, 0, 0.5)",
    };

    const menuDivOpacity = {
      backgroundColor: "rgb(255,255,255)",
    }

    const greyDivOpacity = {
      opacity: "0.5"
    }

    if (!this.state.showMenu) {
      return <i className="fas fa-bars headerTextMenu headerMenuSize mx-2 align-self-center" onClick={this.setMenu}></i>
    } else {
      return (
        <div className="wrapper headerMenuSize textFont">
          <nav className="container d-flex column modal py-0 px-0 h-100 w-100 d-inline-block" style={containerOpacity}>
            <div className="border border-dark modal-body py-0 px-0 w-50 navbar"  style={greyDivOpacity} onClick={this.setMenu}></div>
            <div className="border border-dark modal-body py-0 px-0 w-50 " style={menuDivOpacity}>
              <div className="pl-2 py-3 mt-5" onClick={
                () => { this.props.setView("home", {});
                this.setMenu();}}>Home</div>
              <div className="pl-2 py-3" onClick={
                () => { this.props.setView("recipes", {});
                this.setMenu();}}>Recipes</div>
              <div className="pl-2 py-3" onClick={
                () => { this.props.setView("calendar", {});
                this.setMenu();}}>Calendar</div>
              <div className="pl-2 py-3" onClick={
                () => { this.props.setView("shoppingList", {});
                this.setMenu();}}>Shopping List</div>
            </div>
          </nav>
        </div>
      )
    }
  }


}

export default Menu;
