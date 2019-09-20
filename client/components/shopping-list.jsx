import React from 'react';
import Header from './header';
import ShoppingListItemForm from './shopping-list-item-form';
import ShoppingListItemList from './shopping-list-item-list';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
    };
    this.getAllItems = this.getAllItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    fetch(`/api/getShoppingList.php`)
      .then(response => response.json())
      .then(data => {
        let getData = data;
        this.setState({ shoppingList: data });
      });
  }

  addItem(newItem) {
    fetch(`/api/addToShoppingList.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    })
      this.getAllItems()
  }

  deleteItem(id) {
    fetch(`/api/deleteFromShoppingList.php`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id)
    })
    this.getAllItems();
  }

  toggleChecked(itemId) {
    let id = parseInt(itemId)
    const shoppingList = this.state.shoppingList
    let checkedid;
    const itemObject = this.state.shoppingList.map(item => {
      if (itemId === item.id) {
        item.is_completed = !item.is_completed
        checkedid = item
        return checkedid
      } else {
      return item;
      }
    });

    fetch(`/api/toggleShoppingList.php`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(checkedid)
    })
      .then(()=> {
        this.setState({ shoppingList: itemObject })
      })
  }

  render() {
    return (
      <div>
        <Header setView={this.props.setView} text="Shopping List"/>
        <div className="container textFont mt-5">
          <div className="row">
            <div className="col">
              <ShoppingListItemForm onSubmit={this.addItem}/>
              <ShoppingListItemList allItems={this.state.shoppingList} deleteItem={this.deleteItem} toggleChecked={this.toggleChecked}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
