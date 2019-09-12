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
      return <i className="fas fa-bars" onClick={this.setMenu}></i>
    } else {
      return (
        <React.Fragment>
          <div className="border bg-secondary" onClick={this.setMenu}>{`click here to exit menu`}</div>
          <div className="border border-dark">
            <div onClick={
              () => { this.props.setView("home", {});
              this.setMenu();}}>Home</div>
            <div onClick={
              () => { this.props.setView("recipe", {});
              this.setMenu();}}>Recipe</div>
            <div onClick={
              () => { this.props.setView("calendar", {});
              this.setMenu();}}>Calendar</div>
            <div onClick={
              () => { this.props.setView("shoppinglist", {});
              this.setMenu();}}>Shopping List</div>
            <div onClick={
              () => { this.props.setView("userInfo", {});
              this.setMenu();}}>User Info</div>
          </div>
        </React.Fragment>
      )
    }
  }


}

export default Menu;
