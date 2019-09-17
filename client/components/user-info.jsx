import React from 'react';
import Header from './header';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }
  render(){
    return (
      <Header setView={this.props.setView}/>
    )
  }
}

export default UserInfo;
