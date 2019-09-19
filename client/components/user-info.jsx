import React from 'react';
import Header from './header';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      nameInput: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      name: this.state.nameInput,
      nameInput: ""
    });
  }

  postName(){
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.name)
    };

    fetch('/API/(need endpoint from back end)', req)
      .then(res => res.json())
      .then(name => { console.log("POST name: ", name) });
      this.setState({nameInput: ""})
  }

  getName(){
      fetch(`/api /get endpoint`)
        .then(response => response.json())
        .then(name => { this.setState({ name }) })
  }

  render(){
    return (
      <div>
        <Header setView={this.props.setView} text="User Info"/>
        <form className="form-inline text-align-center" onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2 mr-2 ml-5">
            <input
              className="form-control"
              onChange={this.handleChange}
              item={this.state.nameInput}
              placeholder="Input your name"
              type="text"
              required />
          </div>
          <button type="submit" className="btn btn-secondary mb-2">Add</button>
        </form>
        <div>
          <div className="nameTitle">Name</div>
          <div className="name"><br />{this.state.name}</div>
        </div>
      </div>
    )
  }
}

export default UserInfo;
