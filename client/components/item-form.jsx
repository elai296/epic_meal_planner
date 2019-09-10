import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      status: false
    };
  }
}

export default ItemForm;
