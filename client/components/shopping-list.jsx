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
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    fetch('')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          list: data
        });
      });
  }

  addItem(newItem) {
    fetch('', {
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

    fetch('', {
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
