import React from 'react';
import Header from './header';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <div>Favorites</div>
        <div>Keto</div>
        <div>Vegetarian</div>
        <div>Halal</div>
      </div>
    );
  }
}
