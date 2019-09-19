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
    if (!this.state.showMenu) {
      return <i className="fas fa-bars menu mx-1" onClick={this.setMenu}></i>
    } else {
      return (
        <div className="menu">
          <div className="border bg-secondary" onClick={this.setMenu}>{`click here to exit menu`}</div>
          <div className="border border-dark">
            <div onClick={
              () => { this.props.setView("home", {});
              this.setMenu();}}>Home</div>
            <div onClick={
              () => { this.props.setView("recipes", {});
              this.setMenu();}}>Recipes</div>
            <div onClick={
              () => { this.props.setView("calendar", {});
              this.setMenu();}}>Calendar</div>
            <div onClick={
              () => { this.props.setView("shoppingList", {});
              this.setMenu();}}>Shopping List</div>
            <div onClick={
              () => { this.props.setView("userInfo", {});
              this.setMenu();}}>User Info</div>
          </div>
        </div>
      )
    }
  }


}

export default Menu;
