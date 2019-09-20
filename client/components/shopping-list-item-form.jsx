import React from 'react';

class ShoppingListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      listItem: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      ingredients_desc: this.state.listItem,
      isChecked: false
    };
    this.props.onSubmit(newItem);
    event.target.reset();
  }

  render() {
    return (
      <form className="input-group mb-4 shadow-sm" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          onChange={this.handleChange}
          item={this.state.listItem}
          placeholder="Add an item"
          type="text"
          required
          autoFocus/>
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary">Add</button>
        </div>
      </form>
    );
  }
}

export default ShoppingListItemForm;
