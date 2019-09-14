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
    debugger;
    console.log("current shopping list is ", this.state.shoppingList)
    console.log("item is ", itemId)
    var id = parseInt(itemId)
    console.log("number id is", id)
    const shoppingList = this.state.shoppingList

    var checkedid;
    const itemObject = this.state.shoppingList.map(item => {
      if (itemId === item.id) {
        item.is_completed = !item.is_completed
        checkedid = item
        return checkedid
      } else{
      return item;
      }
    });

    console.log("the checked id is ", checkedid)

    fetch(`/api/toggleShoppingList.php`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: itemId,
        is_completed: !itemObject.is_completed })
    })
      .then(()=> {
        console.log('item object is ', itemObject)
        this.setState({ list: itemObject })
      })
      // .then(response => {
      //   return response.json();
      // })
      // .then(data => {
      //   debugger;
      //   console.log("the current data is ", data)
      //   const allEntries = this.state.shoppingList.map(oldEntry => {
      //     if (oldEntry.id === data.id) {
      //       return data.id;
      //     } else {
      //       return oldEntry;
      //     }
      //   });
      //   this.setState({
      //     shoppingList: allEntries
      //   });
      // });
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
