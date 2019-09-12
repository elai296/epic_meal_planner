import React from 'react';
import Header from './header';
import ItemForm from './item-form';
import ItemList from './item-list';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      isChecked: false
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
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          shoppingList: data
        });
      });
  }

  addItem(newItem) {
    fetch(`/api/addToShoppingList.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          shoppingList: this.state.shoppingList.concat(data)
        });
      });
    this.getAllItems();
  }

  deleteItem(id) {
    this.setState({
      shoppingList: this.state.shoppingList.filter(itemId => itemId !== id)
    });
  }

  toggleChecked(itemId) {
    const itemObject = this.state.shoppingList.find(item => {
      return item.id === itemId;
    });

    fetch(``, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isChecked: !itemObject.isChecked })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const allEntries = this.state.shoppingList.map(oldEntry => {
          if (oldEntry.id === data.id) {
            return data.id;
          } else {
            return oldEntry;
          }
        });
        this.setState({
          shoppingList: allEntries
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <Header text="Shopping List"/>
            <ItemForm onSubmit={this.addItem}/>
            <ItemList allItems={this.state.shoppingList} deleteItem={this.deleteItem} toggleChecked={this.toggleChecked}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
