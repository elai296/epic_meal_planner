import React from 'react';
import Header from './header';
import ItemForm from './item-form';
import ItemList from './item-list';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
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
    fetch('/api/getShoppingList.php')    // ---- new code -> (changing the endpoint) ---------
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          list: data
        });
      });
  }

  addItem(newItem) {
    fetch('/api/getShoppingList.php', {  // ---- new code -> (changing the endpoint) ---------
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
          list: this.state.list.concat(data)
        });
      });
  }

  deleteItem() {

  }

  toggleChecked(itemId) {
    const itemObject = this.state.list.find(item => {
      return item.id === itemId;
    });

    fetch('/api/getShoppingList.php', {        //----- new code (changing the endpoint) --------
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
        const allEntries = this.state.list.map(oldEntry => {
          if (oldEntry.id === data.id) {
            return data;
          } else {
            return oldEntry;
          }
        });
        this.setState({
          list: allEntries
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

            <ItemList items={this.state.list} toggleChecked={this.toggleChecked}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
